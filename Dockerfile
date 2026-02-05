# Imagen base con Node
FROM node:22

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Exponemos el puerto
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "start"]