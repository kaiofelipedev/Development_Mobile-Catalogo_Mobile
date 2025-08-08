Projeto acadêmico desenvolvido durante a disciplina de desenvolvimento mobile, no curso de análise e desenvolvimento de sistemas - Unifecaf - Agosto/2025

O projeto foi desenvolvido em TypeScript utilizando bibliotecas a biblioteca React e React Native para favorecer o desenvolvimento híbrido.

O projeto foi estruturado com Expo que favorece o desenvolvimento fornecendo uma estrutura pronta além de módulos.
O Redux Toolkit foi tilizado para o gerenciamento do estado global da aplicação.

INTRUÕES
Para iniciar o projeto 'npm start'
 - A primeira tela será a tela de login, onde o usuário deve preencher os campos de nome e senha ( campos vázios retornam o alerta: Campo obrigatório! ).
      Preencha os campos com ("Username: admin" e "senha: 123"). Qualquer outra combinação retornará um alerta de 'Username ou senha inválidos!'.
 - A próxima tela exibe uma lista com 30 produtos variados, os dados dos produtos são obtidos via API REST, com a URL: https://dummyjson.com/products
      Para consumir a API, está sendo utilizado o pacote axios ( npm ).
 - Na tela de produtos existe 2 botões separando categorias 'Masculino' e 'Feminino', ao clicar em cada botão será apresentado uma lista dos respectivos produtos da categoria ( cerca de 16 no masculino e 25 no feminino ).
 - A tela de produtos conta com navegação em pilha ( Stacks ), logo, ao clicar na seta de voltar no canto superios esquerdo, a aplicação volta para a tela de login.

Obs: Ao clonar o repositório, será necessário rodar o comando 'npm install' para baixar o node_modules que fica oculto pelo arquivo ( .gitignore ).
