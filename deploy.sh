#!/usr/bin/env sh

cp -r ./* /www/next/
cp -r ./.next /www/next/
pm2 stop nextjs-app
pm2 start nextjs-app
