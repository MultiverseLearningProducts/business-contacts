FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install && npm run build

EXPOSE 1234

CMD ["node", "server.js"]

