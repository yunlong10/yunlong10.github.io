#!/usr/bin/env bash
# usage: bash deploy.sh <commit message>
set -euo pipefail

bundle lock --add-platform x86_64-linux

if command -v npx >/dev/null 2>&1; then
  if [ ! -d node_modules ]; then
    echo "Installing npm dependencies..."
    npm install
  fi
  npx prettier . --write
else
  echo "Warning: npx not found; skipping Prettier."
  echo "Install Node.js first, then run: npm install"
  echo "  https://nodejs.org/  (LTS installer)"
  echo "  or: brew install node"
fi

git add .
git commit -m "$1"
git push
