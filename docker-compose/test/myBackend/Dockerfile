FROM node:alpine

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

ENV PATH=/app/node_modules/.bin:$PATH

CMD ["nodemon","--legacy-watch","src/app.js"] 