# Builder
FROM node:lts-alpine AS builder

RUN mkdir -p /home/builder
WORKDIR /home/builder

COPY . .

RUN npm install
RUN npm run build

# Runner
FROM caddy AS runner
COPY --from=builder /home/builder/dist /srv
COPY ./k8s/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80