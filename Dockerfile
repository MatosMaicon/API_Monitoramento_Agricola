FROM node:alpine

WORKDIR /usr/app
RUN npm install -g yarn

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]