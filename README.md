# Ueslei Bot

Um bot simples do Telegram criado para a disciplina de Programação para Dispositivos Móveis, lecionada pelo professor Jorge Arthur Schneider Aranda. O bot responde á alguns comandos básicos e outros mais legais.

## Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Axios](https://github.com/axios/axios)
- [TeleBot](https://github.com/mullwar/telebot)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Uma IDE, como o [VSCode](https://code.visualstudio.com/)

## Passo a passo

Pelo terminal:

- Faça o clone do projeto em algum local da sua máquina. Exemplo: `user/projetos`
- Vá até a pasta que você acabou de clonar. Exemplo: `cd user/projetos/ueslei_bot`
- Agora abra o projeto com sua IDE. Exemplo: `code .`

Serviços externos:

- Você vai precisar criar uma conta no Telegram para conseguir um token do bot, para fazer isso você pode seguir [este tutorial](https://docs.microsoft.com/pt-br/azure/bot-service/bot-service-channel-connect-telegram?view=azure-bot-service-4.0)
- Com o token em mãos, copie ele e cole na variável `BOT_TOKEN` dentro de `index.js`
- Você também vai precisar criar uma conta de desenvolvedor em [Unsplash](https://unsplash.com/developers)
- Agora navegue até "Your apps", crie um app, abra ele e vá até "Keys". Copie a "Access Key" e cole na variável `UNSPLASH_TOKEN` dentro de `index.js`

De volta ao terminal:

- Utilizando **npm** ou **yarn**, instale as dependências do projeto. Exemplo: execute o comando `yarn` ou `npm i`
- Agora, basta executar `yarn start` ou `npm start` e o projeto vai iniciar em seu terminal
- Com o projeto rodando, basta falar com o seu bot que ele já irá responder!

## Comandos

- /piada - O bot conta uma piada
- /diga <sua mensagem> - O bot responde com a sua mensagem
- /foto <descrição da foto> - O bot envia uma foto aleatória sobre a descrição
- /ajuda - O bot lista os comandos
- /autor - O bot conta um pouco sobre o autor

## Autor

Uéslei Suptitz, amante de desenvolvimento.

- [LinkedIn](https://www.linkedin.com/in/u%C3%A9slei-suptitz/)
- uesleisuptitz@gmail.com
