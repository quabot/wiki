# syntax=docker/dockerfile:1

FROM node:18.17

ARG REST_ENV="stable"

WORKDIR /app

COPY . .

RUN yarn install --prod
RUN yarn build
RUN npm install -g serve

EXPOSE 9999

CMD ["serve", "-s", "build", "-l", "9999"]
