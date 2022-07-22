FROM node:16.16.0-alpine

WORKDIR /api

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY ./ ./

ENV PORT=8080

CMD ["npm", "start"]