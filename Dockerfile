# React
FROM node as build
WORKDIR /app/client
COPY client/package.json .
RUN npm install
COPY client .
RUN npm run build

# Express server
WORKDIR /app/server
COPY server/package.json .
RUN npm install
COPY server .
EXPOSE 3001

CMD ["node", "server.js"]
