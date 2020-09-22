# Conceitos Back-end NODE.JS 📚
![Node.JS](https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js.png)
    
Conteudos aprendidos nessa aula:
- Conceitos Node.JS
- Conceitos API REST
- Criar um projeto node.
- Iniciar um servidor utilizando o express.
- Metodos HTTP.
- Testar rotas HTTP.
- Tipos de parametros.
- Servidor funcional
- Middlewares.

__________
## - Criando Projeto 📦:

1. Criar uma pasta para armazenar o projeto. exemplo ( terminal unix ):
```shell
mkdir conceitos_back-end && cd conceitos_back-end
```
2. Rodar comando no terminal para iniciar projeto com gerenciamento de pacotes.
```shell
yarn init -y
```
3. Terminal irá retornar o seguinte: success Saved package.json e criara o arquivo na raiz do projeto. Esse arquivo fara todos gerenciamento de pacotes e scripts do projeto.
```json 
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "license": "MIT"
}
```
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

//Retornando mensagem quando acessado localhost/3333 no navegador web.
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
node index.js
``` 
7. O resultado será o seguinte:  
![alt](images/helloworld.png?raw=true "Hello world")

---------

## Metodos HTTP:
  1. GET: Buscar informacoes do back-end.
  2. POST: Criar uma informacao no back-end.
  3. PUT/PATCH: Alterar informacao no back-end.
  4. DELETE: Deletar dado no back-end.

----------

## Tipos de parametros:
  1. Query Params: filtros e paginacao. Utilizado na maioria das vezes em rotas GET, utilizando um ponto de interrogacao `?`.
  Exemplo:
  ```
  localhost:3333/conceitos?nome=Guilherme
  ```
  1. Route Params: Indentificar recursos(Atualizar/Deletar).
  Exemplo:
  ```
  localhost:3333/conceitos/1
  ```
  2. Request Body: Conteudo na hora de criar ou editar um recurso.  


----------
  
## Middleware

- Interceptador de requisisoes: interrompendo ou alterando dados da requisicao.
