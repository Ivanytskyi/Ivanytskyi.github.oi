# orders-products
Проект разработан в соответствии с тех. заданием под разрешение экрана FullHD
Реализован функционал, который прописан в тех. задании


## Переходим в папку с проектом
```
cd orders-products
```

## Собираем образ Docker для нашего приложения на Vue.js:
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

### Собираем проект
```
npm run build
```

### Запускаем наше приложение Vue.js в контейнере Docker:
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```
