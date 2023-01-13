FROM node:18-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY package.json .
RUN npm install --ignore-scripts
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
