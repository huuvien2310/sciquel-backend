FROM node:14-alpine
WORKDIR /app
COPY ./src/package.json ./src/package-lock.json ./
RUN npm install
COPY . ./
CMD ["node", "src/index.js"]