### STAGE 1: Build ###
FROM node:18.12.1-alpine AS build

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build


### STAGE 2: Run ###
FROM nginx:1.23.2-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/app/dist/pms /usr/share/nginx/html
