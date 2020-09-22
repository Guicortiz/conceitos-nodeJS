# Iniciar servidor Node.JS 📚
![Node.JS](https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js.png)

----------


## - Iniciar servidor utilizando express 💻:

1. Primeiramente criar um arquivo chamado `index.js` caso prefira crie uma pasta chamada `src` para guardar todos arquivos do seu projeto.
2. Adicione o pacote express no seu projeto. utilizando comando no terminal ( unix )
```shell
yarn add express
```
3. Isso ira adicionar o express dentro da pasta do seu projeto permitindo voce usar ele no seu projeto.
4. abra o arquivo `index.js` dentro do seu editor de texto.
5. Coloque as seguintes linhas de comando dentro do seu `index.js`.
```javascript
//Importando o express para dentro do seu servidor.
const express = require('express');

//Iniciando o express no seu servidor.
const server = express();

//Retornando mensagem quando acessado localhost:3333 no navegador web.
server.get('/', (request,response) => {
  return response.get("Meu primeiro projeto em Node.JS e Express");
})

//Escutando a porta 3333 na rota localhost
server.listen(3333, () => {
  console.log('📦 Servidor iniciado!')
})
```
6. execute o seguinte comando no terminal (unix).
```node
node src/index.js
``` 
7. O resultado será o seguinte:  
![alt](../images/helloworld.png?raw=true "Hello world")

---------