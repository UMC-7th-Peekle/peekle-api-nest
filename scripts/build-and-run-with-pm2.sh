#!/bin/bash
set -euo pipefail

echo "[1] pm2가 설치되어 있는지 확인합니다."
if which pm2 > /dev/null 2>&1; then
  echo "✅ pm2가 정상적으로 인식됩니다: $(which pm2)"
else
  echo "❌ pm2를 PATH에서 찾을 수 없습니다. PATH를 등록합니다."
  export PATH="$PATH:/usr/local/bin"
  if which pm2 > /dev/null 2>&1; then
    echo "✅ PATH 등록 후 pm2 인식됨: $(which pm2)"
  else
    echo "❌ 여전히 pm2를 찾을 수 없습니다. pm2가 설치되어 있는지 또는 설치 경로를 확인하세요."
    exit 1
  fi
fi

echo "[2] pnpm이 설치되어 있는지 확인합니다."
if which pnpm > /dev/null 2>&1; then
  echo "✅ pnpm이 정상적으로 인식됩니다: $(which pnpm)"
else
  echo "❌ pnpm을 PATH에서 찾을 수 없습니다. PATH를 등록합니다."
  export PATH="$PATH:/usr/local/bin"
  if which pnpm > /dev/null 2>&1; then
    echo "✅ PATH 등록 후 pnpm 인식됨: $(which pnpm)"
  else
    echo "❌ 여전히 pnpm을 찾을 수 없습니다. pnpm이 설치되어 있는지 또는 설치 경로를 확인하세요."
    exit 1
  fi
fi

pnpm install
echo "📦  의존성 설치가 완료되었습니다."

# pnpm run prisma:generate
# echo "🛠️  Prisma 클라이언트 생성이 완료되었습니다."

pnpm run remove-leftovers

echo "🔐 .env 파일이 존재하는지 확인합니다."
if [ -f ".env" ]; then
  echo "✅ .env 파일이 존재합니다."
else
  echo "❌ .env 파일이 존재하지 않습니다. 환경 변수 파일을 생성하거나 복사하세요."
  exit 1
fi

echo "🔐 .env.development 파일이 존재하는지 확인합니다."
if [ -f ".env.development" ]; then
  echo "✅ .env.development 파일이 존재합니다."
else
  echo "❌ .env.development 파일이 존재하지 않습니다. 환경 변수 파일을 생성하거나 복사하세요."
  exit 1
fi

pnpm run build
echo "🔨  빌드가 완료되었습니다."

echo "🚀  pm2를 이용해 프로세스를 시작합니다."
pm2 start ecosystem.config.cjs --env development

echo "✅  모든 작업이 성공적으로 완료되었습니다! 🎉"