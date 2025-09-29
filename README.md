![Logo do Projeto](./.github/logo.png)


# Rocket.q

Aplicativo web onde os usuários podem criar suas salas e compratilhar para outras pessoas acessarem e fazer perguntas anonimas.

---

## 📽️ Demonstração

![Demonstração do Projeto](./.github/rocket-q.png)

---

## 🚀 Funcionalidades

- Criação de uma sala, colocando uma senha de ADM
- Exclusão de uma pergunta
- Marcar como lida a pergunta
- Compratilhamento do código da sala
- Acesso como visitante a uma sala, com código compratilhado pelo ADM.

---

## 🧰 Tecnologias Utilizadas

- **Node + Express.js**
- **HTML5, CSS3, JavaScript**
- **SQlite**

---

## 🛠️ Como rodar o projeto

### ✅ Pré-requisitos
- Node.js v22.19.0 e NPM
- Banco de dados (SQLite)
- Servidor Web 


### 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/luizfspintoo/rocketq.git
cd rocket-q

```

2. Instale as dependências do projeto
```bash
npm install
```

3. Crie um script para criação do banco de dados e suas tabelas
```bash
//Va até o arquivo package.json, e na parte de scripts, inclua: 

"scripts": {
    "init-db": "node src/db/init.js",
}

//Depois de criado o script, no terminal basta rodar o comando: npm run init-db
```


4. Crie um script para rodar a aplicação (opcional)
```bash
//Va até o arquivo package.json, e na parte de scripts, inclua: 

"scripts": {
    "start": "nodemon ."
}
```


🚀 Rode o projeto
```bash
//No terminal basta rodar o comando: npm start
A aplicação vai ser inicializada e servidor ligado.

```

### ✅ Considerações Finais

Este projeto vai além de um simples aplicativo. Ele foi concebido com um objetivo especial: servir outras pessoas.

Passei uma semana codificando e me dedicando ao Rocket.q com o intuito de criar um projeto didático e prático. O objetivo é que ele seja o ponto de partida para ensinar programação a colegas de trabalho que estão iniciando no mundo tech.



