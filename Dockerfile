# Build dependencies
#!/bin/bash
FROM node:17-alpine as dependencies

WORKDIR /app

COPY package.json .
RUN npm i

COPY . . 

CMD npm run dev:watch

# Build phase
FROM dependencies as builder

RUN npm run build

EXPOSE 3000

CMD npm run start
