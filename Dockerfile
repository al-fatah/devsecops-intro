FROM node:20-alpine
WORKDIR /app
COPY app/package*.json ./app/
RUN cd app && npm ci --omit=dev || (cd app && npm install --omit=dev)
COPY app ./app
EXPOSE 3000
CMD ["npm", "start", "--prefix", "app"]