# Node
FROM node:lts-alpine AS node

WORKDIR /frontend

COPY . .

RUN npm install

CMD ["npm", "run", "serve"]
