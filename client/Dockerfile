# Use a imagem oficial do Node.js com uma versão específica
FROM node

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e o package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do aplicativo para o diretório de trabalho
COPY . .

# Construa o aplicativo React com Vite
RUN npm run build

# Exponha a porta 3000 (ou a porta que você configurou em seu aplicativo Vite)
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "preview"]

