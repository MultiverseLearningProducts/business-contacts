
FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN apk add g++ make py3-pip

RUN npm run build --target=12.4.0-linux-x64 --dist-url=https://electronjs.org/headers

EXPOSE 1234

CMD ["node", "server.js"]
