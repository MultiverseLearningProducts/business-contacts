FROM node:16-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY package.json .
RUN apk add g++ make py3-pip
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
