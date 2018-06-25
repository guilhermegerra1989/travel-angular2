# travel-angular2


Teste Front End com Angular2

A solução para o teste desenvolvido baseia-se no cadastro de viagens e sua listagem. Para desenvolvimento da solução, foi utilizado o Visual Studio Code e o framework Angular2.

Para criação da arquitetura utilizei o https://cli.angular.io/ onde é feito uso do node.js para runtime do código Javascript. Foram utilizados alguns frameworks de auxílio ao desenvolvimento: (bootstrap 3, ng2-datepicker, app-routing.module).

Criei um Dashboard onde é possível visualizar as viagens cadastradas de maneira simples e rápida, onde também é possível acessar cada cadastro. Foi criado a tela de listagem de viagens, onde é possível criar novas viagens, excluí-las ou edita-las. Para adicionar uma nova viagem criei um formulário dentro de um modal do bootstrap. Existem validações nos campos de Data e origem e destino. No campo de data existe o auxílio de um framework onde é possível visualizar o calendário. 

Para os campos “Aircraft” e “User” do formulário criei mocks JSON de aviões e usuários. Existe uma tela para visualização dos usuários, onde criei um componente que é possível visualizar a listagem. É possível criar novos componentes para novos CRUD’s.

Para desenvolvimento e testes foram criados mocks no formato JSON. A estrutura no código foi dividida: components, entities, mocks, services, tests. É possível criar mais testes unitários e rodar com comando npm run test. Para planos futuros, a idéia é criar um back-end onde receba o json trabalhado no front-end, e percista os dados em alguma base de dados.

