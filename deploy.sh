set -e

npm run build

cd docs

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/DBA-GameStore/front-end-game-store.git master:gh-pages

cd -