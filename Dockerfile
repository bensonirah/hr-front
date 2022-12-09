FROM node:19-alpine

WORKDIR /app

#RUN npm install -g yarn

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
