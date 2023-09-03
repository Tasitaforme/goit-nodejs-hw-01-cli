👉 [Скріншоти CLI](./README.md) 
👉 [ДЗ](./HomeWorkTask.md)
👉 [Корисні матеріали](./INFO.md)

# CLI(Command line interface) програма.
## Команди та скріншоти їх виконання

### Отримання всього списку контактів

```bash
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
```

![CLI list](https://i.ibb.co/ngCPJBQ/list.png "CLI list")

### Пошук контакту по id

```bash
# Отримуємо контакт по id і виводимо у консоль об'єкт контакту 
# або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```
![CLI get](https://i.ibb.co/mb6X15j/get.png "CLI get")

![CLI get null](https://i.ibb.co/wdZ0bFd/get2.png "CLI get null")


### Додавання контакту

```bash
# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

![CLI add](https://i.ibb.co/N67TS9S/add.png "CLI add")

### Видалення контакту

```bash
# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту 
# або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

![CLI remove](https://i.ibb.co/Wv22wk8/remove.png "CLI remove")

![CLI remove null](https://i.ibb.co/Ldqhmwc/remove2.png "CLI remove null")

### Редагування контакту
```bash
# Оновлюємо контакт та виводимо в консоль об'єкт видаленого контакту 
# або null, якщо контакту з таким id не існує.
node index.js --action="update" --id rsKkOQUi80UsgVPCcLZZW --email alec.howard@Nulla.com
```

![CLI update](https://i.ibb.co/G0sbr5n/update.png "CLI update")

<p align="center">
<img src="https://i.ibb.co/VmZTdLd/update2.png" alt="CLI update null" />
</p>



<!-- <img src="https://i.ibb.co/N67TS9S/add.png" alt="add" border="0">
<img src="https://i.ibb.co/mb6X15j/get.png" alt="get" border="0">
<img src="https://i.ibb.co/wdZ0bFd/get2.png" alt="get2" border="0">
<img src="https://i.ibb.co/ngCPJBQ/list.png" alt="list" border="0">
<img src="https://i.ibb.co/Wv22wk8/remove.png" alt="remove" border="0">
<img src="https://i.ibb.co/Ldqhmwc/remove2.png" alt="remove2" border="0">
<img src="https://i.ibb.co/G0sbr5n/update.png" alt="update" border="0">
<img src="https://i.ibb.co/VmZTdLd/update2.png" alt="update2" border="0"> -->