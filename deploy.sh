#!/usr/bin/env sh

cp -r ./* /www/next/
cp -r ./.next /www/next/
cd /www/next/ && pm2 stop nextjs-app || true
cd /www/next/ && pm2 start "npm run start" --name nextjs-app || true
cd /www/next/ && pm2 start nextjs-app || true
