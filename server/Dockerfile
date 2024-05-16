FROM node:20

WORKDIR /app

# Копирование зависимостей
COPY server/package.json .
# COPY server/package-lock.json .

# Установка зависимостей
RUN npm install

# Копирование остальных файлов проекта
COPY . .

# Команда для запуска сервера
CMD ["node", "server/app.js"]
