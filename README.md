# ToDoList-FullStack


Este é um projeto no qual eu desenvolvi com auxilio de vídeos no youtube para desenvolver mais os meus conhecimentos em javascript, principalmente na parte do backend, foi utilizado algumas tecnologias como: dotenv, express.

## Como rodar o projeto:

Baixe os arquivos e rode:
```bash
  npm install
```
Isso irá instalar todas as dependências do node.

Para que a aplicação rode foi necessário rodar o mysql em um container do docker, caso não tenha o mysql no docker faça isso:
```bash
  docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d
```

Caso tenha:
```bash
  docker start mysql
```
Agora para rodar o backend é só rodar este comando:
```bash
  npm start
```
E o backend estará rodando, ai é só abrir o HTML e pronto 🤗.

Obrigado!
