FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY next.config.js ./
COPY public ./public
COPY ./.next ./
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
