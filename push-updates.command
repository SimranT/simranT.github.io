#!/bin/bash
# Double-click this file to commit and push all your website updates to GitHub.
cd "$(dirname "$0")"

echo "Cleaning up leftover git lock files..."
rm -f .git/index.lock
find .git/objects -name "tmp_obj_*" -delete 2>/dev/null

echo ""
echo "Staging all changes..."
git add -A

echo ""
echo "Committing..."
git commit -m "Add Analytics Playground labs, personal finance tools, and sitewide UX overhaul"

echo ""
echo "Pushing to GitHub..."
git push

echo ""
echo "Done! Press Enter to close this window."
read
