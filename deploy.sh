#usage: bash deploy.sh <commit message>
bundle lock --add-platform x86_64-linux
git add .
git commit -m "$1"
git push
