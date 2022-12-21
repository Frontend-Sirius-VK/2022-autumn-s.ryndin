FROM node:16.17.1

WORKDIR /2022-autumn-s.ryndin

COPY package.json .
COPY package-lock.json .
RUN npm ci
# для сохранения зависимостей

COPY server.js .
COPY src/database.js .
COPY src/migrations .

COPY . .
