FROM node:14
WORKDIR /client
COPY . .
RUN npm install
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "start"]
