module.exports = {
  apps: [
    {
      name: 'peekle',
      script: 'dist/main.js',
      instances: 0, // 프로세스 수 결정, 0으로 두면 최대
      exec_mode: 'cluster',
      // watch: true, // nodemon과 같은 기능
      // ignore_watch: ["node_modules", "logs", "public", "uploads"], // watch 대상에서 제외할 경로
      // max_memory_restart: "2G", // 메모리 사용량이 2GB를 넘으면 재시작

      // log_file: './logs/pm2/combined.log',
      // error_file: './logs/pm2/error.log',
      // out_file: './logs/pm2/output.log',

      log_file: './combined.log',
      error_file: './error.log',
      out_file: './output.log',

      // --env production 모드로 실행할 때 적용될 환경 변수
      env_production: {
        NODE_ENV: 'production',
      },
      // --env development 모드로 실행할 때 적용될 환경 변수
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
