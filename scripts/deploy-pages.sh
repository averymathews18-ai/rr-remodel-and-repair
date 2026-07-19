#!/bin/bash
# Build the static export and publish it to the gh-pages branch,
# which GitHub Pages serves at:
#   https://averymathews18-ai.github.io/rr-remodel-and-repair/
#
# Requires the GitHub CLI, authenticated:  gh auth login
# Run from the project root:               bash scripts/deploy-pages.sh
set -e

REPO_URL="$(git config --get remote.origin.url)"
REPO_URL="${REPO_URL#https://}"          # strip protocol for token auth

echo "▸ Building static export…"
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/rr-remodel-and-repair npm run build
touch out/.nojekyll                       # let GitHub serve the _next/ folder

echo "▸ Publishing to gh-pages…"
cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="deploy" -c user.email="deploy@local" commit -q -m "Deploy static build"
git push -f "https://x-access-token:$(gh auth token)@${REPO_URL}" gh-pages
rm -rf .git

echo "✓ Deployed → https://averymathews18-ai.github.io/rr-remodel-and-repair/"
