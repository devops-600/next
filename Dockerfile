FROM node:20-alpine

WORKDIR /usr/src/app
ENV PORT 3000
COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
