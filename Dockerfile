# front
FROM node:14 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# backend
FROM node:14 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# banco de dados
FROM mongo:latest AS mongodb

# Combine as imagens em um único contêiner
FROM node:14
WORKDIR /app
COPY --from=frontend /app/frontend/build ./frontend
COPY --from=backend /app/backend ./backend
COPY --from=mongodb / /

# Configurações adicionais, se necessário
# ...

# Exponha as portas necessárias
EXPOSE 3000 5000

# Comando de inicialização
CMD ["npm", "start"]
