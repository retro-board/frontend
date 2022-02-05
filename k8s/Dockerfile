# Builder
FROM node:lts-alpine AS builder

RUN mkdir -p /home/builder
WORKDIR /home/builder

COPY . .

RUN npm install
RUN npm run build

# Runner
FROM node:lts-alpine AS runner
COPY --from=builder /home/builder/dist ./dist

RUN npm install -g http-server
EXPOSE 8080

CMD ["http-server", "dist", "-p", "8080"]