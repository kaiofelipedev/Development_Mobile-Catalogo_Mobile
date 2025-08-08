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
 - Ao clicar sobre um produto, você será redirecionado para a tela de detalhes daquele mesmo produto. Para voltar, clique na seta de navegação.
 - A tela de produtos conta com navegação em pilha ( Stacks ), logo, ao clicar na seta de voltar no canto superios esquerdo, a aplicação volta para a tela de login.

Obs: Ao clonar o repositório, será necessário rodar o comando 'npm install' para baixar o node_modules que fica oculto pelo arquivo ( .gitignore ).

PRINTS

Tela de login

<img width="387" height="860" alt="tela_login" src="https://github.com/user-attachments/assets/a18f8dab-6890-4471-9718-3188dcb15836" />



Tela com todos os produtos

<img width="387" height="860" alt="todos_produtos" src="https://github.com/user-attachments/assets/dbd3fee8-d33b-4cee-93c8-61bb613e302b" />


Tela de produtos masculino

<img width="387" height="860" alt="produtos_masculino" src="https://github.com/user-attachments/assets/6a0b0c43-4406-465d-824b-50e3fee5ba62" />


Tela de produtos feminino

<img width="387" height="860" alt="produtos_feminino" src="https://github.com/user-attachments/assets/4f2c6a16-8d34-4eb8-aea4-836c65693064" />


Tela de detalhes do produto selecionado

<img width="387" height="860" alt="tela_detalhes" src="https://github.com/user-attachments/assets/8ef7a6c5-8f5d-435c-9812-d15c46d35a5e" />
