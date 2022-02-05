# Builder
FROM node:lts-alpine AS builder

RUN mkdir -p /home/builder
WORKDIR /home/builder

COPY . .

RUN npm install
RUN npm run build

# Runner
FROM nginx:stable-alpine AS runner
COPY --from=builder /home/builder/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]