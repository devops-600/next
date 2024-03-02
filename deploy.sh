#!/usr/bin/env bash

APPNAME="nextjs-app"
echo "pm2 app name is $APPNAME"
echo "copy new artifacts"
cp -r ./* /www/next/
cp -r ./.next /www/next/
echo "restarting service"
sudo -u lighthouse pm2 show $APPNAME
if [ $? -ne 0 ]
then
  echo "$APPNAME does not exist, creating"
  cd /www/next/ && sudo -u lighthouse pm2 start "npm run start" --name $APPNAME
else
  echo "$APPNAME exists, restarting"
  cd /www/next/ && sudo -u lighthouse pm2 stop $APPNAME
  cd /www/next/ && sudo -u lighthouse pm2 start $APPNAME
fi

echo "service restarted"

