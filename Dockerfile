FROM alpine:3.9
ENV NODE_VERSION 12.13.0
WORKDIR /app
ADD . /app
EXPOSE 8080
CMD ["node", "app.js"]
