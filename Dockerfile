FROM node:16.15.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

ENV ENVIRONMENT="development"

EXPOSE 8080

CMD ["npm", "start"]