FROM node:alpine
WORKDIR /home/node
COPY package.json .
RUN npm i
COPY . .
CMD ["npm", "run", "start:prod"]