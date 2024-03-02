#!/usr/bin/env sh

echo "copy new artifacts"
cp -r ./* /www/next/
cp -r ./.next /www/next/
echo "restarting service"
cd /www/next/ && sudo pm2 restart nextjs-app
echo "service restarted"

