const { default: axios } = require("axios");
const TeleBot = require("telebot");

const BOT_TOKEN = ""; // Token do bot do Telegram
const UNSPLASH_TOKEN = ""; // Token do Unsplash

const bot = new TeleBot({
  token: BOT_TOKEN,
});

//Mensagem que lista todos os comandos
const msgAllCommands =
  "Comandos dispoíveis:\n/piada - Para eu lhe contar uma piada\n/diga <sua mensagem> - Para eu dizer a sua mensagem\n/foto <descricão da foto> - Para eu te enviar uma foto aleatória sobre qualquer assunto\n/ajuda - Para listar os comandos\n/autor - Para eu lhe contar sobre o meu criador";

//Bot dá as boas-vindas
bot.on(["/start"], (msg) =>
  msg.reply.text(`Bem-vindo(a) ao Uéslei Bot!\n${msgAllCommands}`)
);

//Bot lista os comandos disponíveis
bot.on("/ajuda", (msg) => msg.reply.text(msgAllCommands));

//Bot responde com uma piada aleatória da lista de piadas
bot.on("/piada", (msg) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return msg.reply.text(randomJoke);
});

//Bot diz o que o usuário quiser e avisa se não entender o que deve ser dito
bot.on("/diga", (msg) => {
  const text = msg.text.match(/^\/diga (.+)$/);
  if (text && text[1])
    return bot.sendMessage(msg.from.id, text[1], {
      replyToMessage: msg.message_id,
    });
  else
    return bot.sendMessage(
      msg.from.id,
      "Não consegui entender o que devo dizer : /",
      { replyToMessage: msg.message_id }
    );
});

//Bot responde com uma imagem sobre o que o usuário quiser e avisa se não entender do que se trata
bot.on("/foto", (msg) => {
  const text = msg.text.match(/^\/foto (.+)$/);
  if (text && text[1]) {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: UNSPLASH_TOKEN,
          query: text[1],
        },
      })
      .then(({ data: { urls } }) => {
        return msg.reply.photo(urls.thumb);
      })
      .catch((e) => {
        console.log(`e`, e);
        return bot.sendMessage(
          msg.from.id,
          "Não consegui encontrar uma foto para você : /",
          { replyToMessage: msg.message_id }
        );
      });
  } else
    return bot.sendMessage(
      msg.from.id,
      "Não consegui entender o que devo buscar : /",
      { replyToMessage: msg.message_id }
    );
});

//Bot responde com informações do autor
bot.on("/autor", (msg) =>
  msg.reply.text(
    "O autor desse bot é Uéslei Suptitz\nAluno do 4º ano do Curso Técnico em Informática\nIFSul - Câmpus Sapiranga"
  )
);

bot.start();

const jokes = [
  "Não xaveco a mulherada no frio, porque minha mãe disse que no frio quem recebe muito gelo pode ter hipotermia.",
  "Esta tão frio que fui abrir o armário do meu quarto e tinha um Pinguin(tux) lá dentro.",
  "Hoje ninguém vai estragar o meu dia, eu mesmo faço isso sozinho.",
  "Dinheiro não é grão de café, mas eu torro.",
  "Javeiros são iguais pombos: Estão por todo lugar.",
  "Na boa, massinha de modelar é mais legal do que muita gente por aí.",
  "Adivinha quem acordou disposto a mudar? Isso mesmo, alguma empresa de frete por aí.​",
  "Corpus Christi já foi, lembrando que na segunda-feira tem Corpus Triste.",
  "Pode jogar pedra em mim, com elas um dia vou construir um firewall.",
  "As mulheres querem um homem perfeito, o problema se for ver é que o homem perfeito quer também um homem perfeito.",
  "Hoje faz exatamente oito anos que me disseram que sou rancoroso.",
  "Hoje ao almoçar no shopping encontrei uma fonte da juventude onde estava escrito 'vaga para idoso', parou um carro e quando o motorista desceu ele era jovem.",
  "Todo mundo dizendo que eu sou o cara mais cético que existe, mas eu duvido disso.",
  "Os amores de hoje duram menos que a licença do MATLAB na versão trial.",
  "Indecisão de sentimentos é tenso, nunca sei se estou com mais fome ou com mais sono.",
  "O sono que habita em mim é caseiro, não sai por nada.",
  "Tenho inveja da vírgula que precisa de espaço e ninguém fica perguntando o porquê...",
  "Queria ser um gnomo, pois gnomo não existe... se fosse heroi seria o desgraçaman",
  "Se gripe é algo mutante a minha seria um X-men, sendo especifico o Professor X(causando uma dor de cabeça muito doida).",
  "O Java é mais interessado em se manter atualizado do que muita gente por ae...",
  "Segunda-feira é igual operadora de celular: Reclamar não resolve nada.",
  "Não seja aquele aplicativo que não pode ser excluído do celular na vida das pessoas.",
  "Tem gente que acha que sou GPU com overclock para ficar me torrando.",
  "Tem sentimentos que a gente tem que fazer igual faz com Trident, melhor esconder do que dar pra alguém.",
  "Lembrando da época em que toda mulher queria me pegar, isso mesmo saudades de quando era recém-nascido.",
  "Meu raciocínio antes do almoço fica mais lento que o Internet Explorer.",
  "A cada novo dia você tem uma nova chance de estragar tudo de novo.",
  "Sua opinião é igual o número do criança esperança: não ligo",
  "A segunda coisa que eu mais odeio é gente esquecida a primeira eu não lembro",
  "Fascinante como o pessoal do hospital fica bravo quando você desliga uns aparelhos da tomada para carregar o celular.",
  "Se eu fosse um X-Men meu super poder seria ficar invisível quando as pessoas não precisam de mim.",
  "Sono quando você está hackiando é igual amigo que pede dinheiro emprestado. Só aparece em horas erradas...",
  "Mulheres que gostam de homem de atitude, não querendo me gabar não mas hoje mesmo guardei as louças e limpei a pia, tudo isso enquanto compilava um kernel",
  "Usar fones de ouvido é tipo ficar em 'modo avião' da vida real.",
  "Mosquito mais perigoso que zika, chicungunha, dengue é chamado bovespa, principalmente para quem sai alavancando o que não tem.",
  "Ta na moda tatoo e tals, a única tatuagem que eu tive na vida foi no meu braço. Tinha a forma de um chinelo e durou uns dias, artista foi minha mãe.",
  "Me sentindo o Marty McFly voltando 1 hora no tempo, esse horário de inverno prova que o Brasil é um país atrasado.",
  "Ae comprei o presente do dia doas namorados para minha namorada, agora só falta arrumar a namorada.",
  "Nem precisa saber química para sacar a reação de algumas pessoas quando você fala não.",
  "Uma professora de matemática Htinha para resolver os problemas da minha vida​",
  "10.000 caracteres eu escrevo tudo que aconteceu de bom na minha vida e ainda sobra 10.000 caracteres",
  "Alguém chama a polícia. Tá tendo um crime aqui, eu tô matando a fome.",
  "Amor é uma coisa tão difícil de achar que vou começar a chamá-lo de sinal da VIVO.",
  "Você passa 8 horas escrevendo códigos ai nos testes surge vários bugs , equivalente quando você lava a louça e alguém coloca alguma coisa na pia.",
  "Como é bom acordar com um sms de quem te ama, agora mesmo recebi um assim 'Seus creditos estão acabando faça hoje mesmo uma nova recarga'.",
  "Vou sair galera, porque ao contrário de vocês eu tenho uma vida. Na verdade eu tenho até 19, claro no Super Mario.",
  "Recurso novo da Microsoft para mim é como sessão da tarde: já vi e sei que vai ser uma merda.",
  "Campeão se o Robocop fosse feito em Java nunca ele iria atirar em um alvo em movimento, obviamente iria travar e ter um delay muito grande...",
  "Metathesiophobia is the fear of change.",
];
