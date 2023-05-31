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

### Скрины приложения

<img width="1680" alt="image" src="https://github.com/Ivanytskyi/orders-products/assets/86095425/c473c0a2-ec27-4397-9d92-43f30329ab21">
<img width="1435" alt="image" src="https://github.com/Ivanytskyi/orders-products/assets/86095425/71e578e1-520d-417d-9759-d71a9dbf9fb3">
<img width="1680" alt="image" src="https://github.com/Ivanytskyi/orders-products/assets/86095425/0be31eab-5ec2-43a4-80fe-c60fc5ac0353">
