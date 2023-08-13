1. npm init
2. npm i react react-dom
3. в файле скрипт.джиес:  import React from 'react';
                          import * as ReactDOM from 'react-dom/client';
4. npm i webpack -D
5. копируем к себе в проект webpack.config.js чтоб забрать кастомные настройки.
6. npm i html-webpack-plugin webpack-dev-server -D
7. проверь точки входа script.js index.html (или что там у тебя с исходниками?). заглуши регулярку на jsx файлы если она прописана до установки babel.
8. внештатная ситуация: у меня webpack запускается только через команду npx webpack. Но все равно консоль предложила установить webpack-cli. 
 8.1. npm i -D webpack-cli
9. пропишем кастомные скрипты в package.json:
           "scripts": {
    "start": "webpack serve",
    "build": "webpack"
  }, //после чего набираешь npm run build и он запускает webpack.
10. Для чтения jsx файлов закопипасти (или откоментируй)  регулярку на jsx файлы; 
11. установить бабель:  npm i babel-loader @babel/preset-env @babel/preset-react
12. пропиши import React from "react" в каждом модуле реакт-частей.
13. пропиши в джи-есе import './styles/styles.scss' и:
   13.1  npm i sass style-loader css-loader sass-loader -D