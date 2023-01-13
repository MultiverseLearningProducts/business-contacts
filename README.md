# Client Dockerfile setup

1. Locate the client folder directory.
2. Create a new file named `Dockerfile` in the client directory.
3. Copy the following instructions into the `Dockerfile`:

FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN apk add g++ make py3-pip

RUN npm install && npm run build

EXPOSE 1234

CMD ["node", "server.js"]


4. Make sure that all the project files are inside the directory, otherwise the `COPY . /app` command will not work correctly.

5. In the terminal, navigate to the project directory and run the following command:

docker build -t project-name 

This command will build the Docker image and tag it as "project-name".

6. To run the container, use the following command:

docker run -p 1234:1234 project-name


This command will run the container and map the host port 1234 to the container's port 1234.

7. The service can be accessed via http://localhost:1234

# Server Dockerfile setup

1. Create a new folder named `server` in your project directory.
2. Using a text editor, create a new file named `Dockerfile` in the `server` folder.
3. Copy the following instructions into the `Dockerfile`:

FROM node:18-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY package.json .
RUN apk add g++ make py3-pip
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]

4. In the terminal, navigate to the server directory and run the following command:

docker build -t server-image 

This command will build the Docker image and tag it as "server-image".

5. To run the container, use the following command:

docker run -p 3000:3000 server-image



# Docker commands:

docker build -t name-of-image

docker run -p matchPort:matchPort name-of-image





