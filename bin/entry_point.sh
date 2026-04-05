#!/bin/bash
# Local preview: use bundled gems; do not delete Gemfile.lock (breaks Bundler).
# Browser: try http://127.0.0.1:8080/ (or your devcontainer forwarded port), not only 0.0.0.0.

CONFIG_FILE=_config.yml

run_jekyll() {
  exec bundle exec jekyll serve \
    --watch \
    --port=8080 \
    --host=0.0.0.0 \
    --livereload \
    --force_polling
}

run_jekyll &

while true; do
  inotifywait -q -e modify,move,create,delete "$CONFIG_FILE"

  if [ $? -eq 0 ]; then
    echo "Change detected to $CONFIG_FILE, restarting Jekyll"
    jekyll_pid=$(pgrep -f "jekyll serve" || true)
    if [ -n "$jekyll_pid" ]; then
      kill -KILL $jekyll_pid 2>/dev/null || true
    fi
    run_jekyll &
  fi
done
