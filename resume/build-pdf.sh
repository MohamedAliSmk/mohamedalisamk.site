#!/bin/sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/Mohamed_Ali_Hassan_Frappe_Senior_Resume.pdf"
SRC="$ROOT/resume/resume.html"
CHROME="${CHROME:-google-chrome-stable}"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$SRC"

echo "Wrote $OUT"
