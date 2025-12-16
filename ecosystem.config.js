module.exports = {
  apps: [{
    name: 'rmi',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/home/username/public_html',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}