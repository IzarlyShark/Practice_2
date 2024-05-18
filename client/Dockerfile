FROM nginx

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем файлы вашего клиентского приложения в образ
COPY . /usr/share/nginx/html/

# Определяем порт, на котором будет работать nginx
EXPOSE 8000

# Команда для запуска nginx внутри контейнера
CMD ["nginx", "-g", "daemon off;"]