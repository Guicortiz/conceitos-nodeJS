# Sobre os tipos de parametros HTTP 📚
![Node.JS](https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js.png)

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