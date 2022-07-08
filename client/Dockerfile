FROM node:16.16.0-alpine

WORKDIR /client

COPY package.json ./

COPY package-lock.json ./

# Check the order of this is correct?
RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]

