# Builder
FROM node:lts-alpine AS builder

RUN mkdir -p /home/builder
WORKDIR /home/builder

COPY . .

RUN npm install
RUN npm run build

# Runner
FROM nginx AS runner
COPY --from=builder /home/builder/dist /srv
COPY ./k8s/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80