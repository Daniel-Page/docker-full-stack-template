FROM node:16.16.0-alpine AS build-step

WORKDIR /client

COPY package.json ./

COPY package-lock.json ./

# Check the order of this is correct?
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.23.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /client/build /frontend/build