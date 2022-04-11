# SciQuel-Server
SciQuel's backend 

## Use with Docker Compose
Run these command asynchronously and rerun every developing cycle
```
docker-compose build
docker-compose up
docker-compose down
```

## Normal Use
Navigate to `src` and run `npm start` to start the server with `nodemon`

```mermaid
classDiagram
      src --> gql
      src --> models
      src --> utils
      class gql{
          +anthing related to graphql
          should be init here
      }
      class models{
          
      }
      models --> users
      class users{
          
      }
      class utils{

      }
      utils --> config
      utils --> database
      class database{
          +singleton pattern
          +expect to be used in every model
      }
      class config{
          +include ports, MONGO_URI, etc.
      }
```