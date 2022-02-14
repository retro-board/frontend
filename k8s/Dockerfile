# Builder
FROM node:lts-alpine AS builder

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

# Runner
FROM nginx:stable-alpine AS runner
COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY ./k8s/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
