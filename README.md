# SciQuel-Server
SciQuel's backend 

## Normal use
- Go to `src/utils/config.js` to change the `MONGODB_URI` to yours `URI` or make your own `env`
- To start the server, go to `src` and run `npm start`
- To develop with nodemon, go to `src` and run `npm dev`

## Use with Docker Compose
- To develop with Docker, run `docker-compose up` in your terminal
- To terminate the Docker instance, run `docker-compose down` in your terminal
- Delete this Docker container after terminated it if you want to refresh the temporary MongoDB database in this Docker instance.

## Clarification
- Project structure
```
src/
|--- graphql/ <GraphQL related features>
|    |--- resolvers/
|    |    |--- index.js <Merge all resolvers to index>
|    |    |--- <All resolvers will be implemented here>
|    |---typeDefs.js <Schema for models, queries, mutations>
|--- models/
|    |--- <Each model call database.js to connect with MongoDB and use its API>
|--- utils/
|    |--- config.js  <Environment variables come here>
|    |--- database.js <Singleton pattern for models to communicate with MongoDB database>
|--- index.js
```