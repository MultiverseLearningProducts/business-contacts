FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN apk add g++ make py3-pip

RUN npm install && npm run build

EXPOSE 1234

CMD ["node", "server.js"]

