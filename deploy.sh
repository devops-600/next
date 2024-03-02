#!/usr/bin/env bash

echo "copy new artifacts"
cp -r ./* /www/next/
cp -r ./.next /www/next/
echo "restarting service"
sudo -u lighthouse pm2 show nextjs-app
if [ $? -ne 0 ]
then
  cd /www/next/ && sudo -u lighthouse pm2 start "npm run start" --name nextjs-app
else
  cd /www/next/ && sudo -u lighthouse pm2 stop nextjs-app
  cd /www/next/ && sudo -u lighthouse pm2 start nextjs-app
fi

echo "service restarted"

