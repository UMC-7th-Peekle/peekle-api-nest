#!/bin/bash
set -euo pipefail

# echo "🌱  1. pnpm 패키지를 설치합니다."
# pnpm install

# echo "🏗️  2. Nest Project를 Build 합니다."
# pnpm run build

echo "[1] pm2가 설치되어 있는지 확인합니다."
if which pm2 > /dev/null 2>&1; then
  echo "✅ pm2가 정상적으로 인식됩니다: $(which pm2)"
else
  echo "❌ pm2를 PATH에서 찾을 수 없습니다. PATH를 등록합니다."

  # 일반적인 글로벌 설치 경로 추가 (환경에 맞게 경로 수정 가능)
  # export PATH="$PATH:$HOME/.npm-global/bin"
  export PATH="$PATH:/usr/local/bin"
  # export PATH="$PATH:$HOME/.nvm/versions/node/$(node -v)/bin"

  # pm2가 인식되는지 다시 확인
  if which pm2 > /dev/null 2>&1; then
    echo "✅ PATH 등록 후 pm2 인식됨: $(which pm2)"
  else
    echo "❌ 여전히 pm2를 찾을 수 없습니다. pm2가 설치되어 있는지 또는 설치 경로를 확인하세요."
    exit 1
  fi
fi

echo "🚀  pm2를 이용해 프로세스를 시작합니다."
pm2 start ecosystem.config.cjs

echo "✅  모든 작업이 성공적으로 완료되었습니다! 🎉"