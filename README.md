# business-contacts
An application serving up business contacts, via Node, Express, and React

## Getting Started
### Option 1 - Run in development (or just without docker)
Run two apps independently:
- `cd server` and `npm run start-dev` (runs in watch mode on port 3000)
- `cd client` and `npm start` (runs in watch mode on port 1234)
- Visit the app at [localhost:1234](https://localhost:1234)

### Option 2 - Running with `docker-compose`
(once docker-compose.yml created):
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- `docker-compose up`
- Visit the app at [localhost:1234](https://localhost:1234)
- To stop the app: `docker-compose down --rmi all` (this also removes all images)

## Apps
- Node.js server
- React front end
