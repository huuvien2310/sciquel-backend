FROM node:14-alpine
WORKDIR /app
COPY . .
WORKDIR /app/src
RUN npm install
CMD ["npm", "run", "start"]