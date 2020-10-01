# Conceitos Back-end Node.JS 📚
![Node.JS](https://isitics.com/wp-content/uploads/2019/06/2400%D1%851260-rw-blog-node-js.png)
    
Conteudos aprendidos nessa aula:
- [Oque é Node.JS?](/Content/ConceitosNode.MD) (criando)
- [Oque é uma API?](/Content/ConceitosAPI.MD) (criando)
- [Criar um projeto Node.JS](Content/CriarProjeto.MD)
- [Iniciar um servidor utilizando o express](Content/IniciarServidor.MD)
- [Sobre os metodos HTTP](Content/MetodosHTTP.MD)
- [Testar rotas HTTP](Content/TestarRotasHTTP.MD) (criando)
- [Sobre os tipos de parametros HTTP](Content/ParametrosHTTP.MD)
- [Oque é um Middleware?](Content/Middlewares.MD)
- [Criando uma aplicacao de tarefas](Content/AplicacaoTarefas.MD) (criando)

----------
Todo conteudo foi aprendido no primeiro modulo da GoStack, otimo curso de programacao da [RocketSeat](https://rocketseat.com.br/)

----------

![alt](https://riis.com/wp-content/uploads/2017/07/api.jpg)

## Iniciando API de tarefas ⚒
1. Baixando repositorio em sua maquina. rode o comando no terminal.
```
git clone https://github.com/Guicortiz/conceitos-nodeJS.git && cd conceitos-nodeJS
```
2. Apos baixar o repositorio do git e abrir a pasta, abra o projeto no visual studio code ou seu editor de preferencia. rode o comando no terminal.
```
code .
```
3. Pronto o projeto estará aberto em seu editor de codigo e pronto para uso. para iniciar o projeto. Rode o comando no terminal.
```
yarn dev
```
----------
## Rotas da API de tarefas 💻
- [GET] localhost:3333/tasks  
`Retornara todas tarefas cadastradas na API.`

![alt](images/retornogetsemparametro.png?raw=true "Retorno Get")

- [GET] localhost:3333/tasks?category=Trabalho   
`Retornara apenas tarefas que tenha a palavra Trabalho na categoria da tarefa cadastrada na API.`

![alt](images/retornogetparametro.png?raw=true "Retorno Get com parametro")
- [POST] localhost:3333/tasks   
`Ira cadastrar uma tarefa com descricão e categoria. Todas tarefas estão sendo sinalizadas como não finalizadas (finish = false )`
```javascript
{
  //Caso nao for enviada categoria sera definido como noCategory.
  "category":"Nome da catergoria"
  //Obrigatorio enviar uma descricão da tarefa.
	"description":"Finalizar aula de conceitos do back-end."
}
```

![alt](images/retornopost.png?raw=true "Retorno Post")

- [PUT] localhost:3333/tasks/:id   
`Irá definir o campo finish como true para o id enviado no parametro da rota`

![alt](images/retornoupdate.png?raw=true "Retorno Update")

- [DELETE] localhost:3333/tasks/:id   
`Irá DELETAR uma tarefa da lista de tarefas. retorno apenas de status code 204`

![alt](images/retornodelete.png?raw=true "Retorno Delete")


----------
# CRIADOR DO PROJETO [GUICORTIZ](https://github.com/Guicortiz)
Projeto criado para aprendizado e ajudar novos desenvolvedores a programar em Node.JS  
  
Qualquer colaboracao é bem vinda. se possivel compartilhar 💙
![alt](https://avatars2.githubusercontent.com/u/32350762?s=460&u=1f2572701fb8f7ccdb1d7b0c9cf1d9677a8f6610&v=4)
