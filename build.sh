#!/bin/bash
# build.sh - 빌드 → 복사 → HTML 업데이트 자동화
# 사용법: 저장소 루트에서 ./build.sh 실행
set -e

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC_DIR="$REPO_ROOT/src"
DIST_DIR="$SRC_DIR/dist/public"
ASSETS_DIR="$REPO_ROOT/assets"

echo "▶ 빌드 시작..."
cd "$SRC_DIR"
npm run build

echo "▶ 기존 assets 정리..."
rm -f "$ASSETS_DIR"/index-*.js "$ASSETS_DIR"/index-*.css

echo "▶ 새 빌드 파일 복사..."
cp "$DIST_DIR"/assets/index-*.js "$ASSETS_DIR"/
cp "$DIST_DIR"/assets/index-*.css "$ASSETS_DIR"/

NEW_JS=$(ls "$DIST_DIR"/assets/index-*.js | xargs basename)
NEW_CSS=$(ls "$DIST_DIR"/assets/index-*.css | xargs basename)

echo "   JS:  $NEW_JS"
echo "   CSS: $NEW_CSS"

echo "▶ HTML 파일 업데이트..."
for html in "$REPO_ROOT/index.html" "$REPO_ROOT/en/index.html" "$REPO_ROOT/zh/index.html"; do
  OLD_JS=$(grep -o 'assets/index-[^"]*\.js' "$html" | head -1 | xargs basename 2>/dev/null || echo "")
  OLD_CSS=$(grep -o 'assets/index-[^"]*\.css' "$html" | head -1 | xargs basename 2>/dev/null || echo "")
  [ -n "$OLD_JS" ] && sed -i "s|$OLD_JS|$NEW_JS|g" "$html"
  [ -n "$OLD_CSS" ] && sed -i "s|$OLD_CSS|$NEW_CSS|g" "$html"
  echo "   업데이트: $(basename $(dirname $html))/$(basename $html)"
done

echo ""
echo "✅ 완료!"
echo ""
echo "   로컬 미리보기:"
echo "   cd $REPO_ROOT && python3 -m http.server 8080"
echo ""
echo "   배포 (GitHub Pages 반영):"
echo "   git add -A && git commit -m \"build: update\" && git push"
