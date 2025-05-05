# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos consumidores de livros digitais que devem ser atendidas pelo projeto de plataforma online de leitura, para que possam ter a melhor experiência de uso.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Leitura Livre. Visando oferecer a melhor experiência aos usuários, o sistema possuirá os módulos de: gestão de livros; gestão de usuários; consulta de catálogo; leitura de livros.

### 3.2.2 Missão do produto
Possibilitar o acesso à leitura de forma gratuita e democrática, oferecendo uma experiência de uso simples, prática e agradável.

### 3.2.3 Limites do produto
O Leitura Livre não oferece nenhuma forma de download dos livros, sendo o acesso limitado ao ambiente online da plataforma. Embora permita a solicitação de inclusão de novos títulos, as obras aceitas e adicionadas na plataforma serão somente aquelas que já se encontram em domínio público. Não é possível fazer upload de arquivos PDF do próprio computador para leitura na plataforma.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Acesso a livros de forma gratuita |	Essencial |
|2 | Variedade de acervo de livros | Essencial | 
|3 | Disponibilidade de acesso via navegador web através do computador, celular ou tablet | Essencial | 
|4 | Leitura online | Essencial | 
|5	| Registro de livros lidos	| Essencial | 
|6	| Interface simples e intuitiva	| Essencial | 
|7	| Recomendação de livros similares	| Recomendável | 
|8	| Anotação e marcação de trechos nos livros	| Recomendável | 
|9	| Configurações do leitor online	| Recomendável | 
|10	| Edição de perfil do usuário	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Cadastro de usuário |	O sistema deve permitir que usuários se cadastrem usando e-mail e senha. |
| RF2 |	Login	| O usuário deve poder fazer login com e-mail e senha. |
| RF3	| Acesso baseado em cargo (RBAC) |	O sistema deve permitir diferentes tipos de usuários (leitores/ administradores). |
| RF4	| Consulta de livros |	O sistema deve permitir que os usuários busquem livros por título, autor, gênero.  |
| RF5	| Consulta de livros |	O sistema deve permitir a navegação por categorias e subcategorias.  |
| RF6	| Consulta de livros |	O sistema deve permitir que os usuários visualizem as informações detalhadas de um livro, incluindo capa, autor, sinopse e avaliação.  |
| RF7	| Leitura online |	O sistema deve permitir que os usuários leiam livros diretamente no navegador  |
| RF8	| Recuperação de senha |	O usuário deve poder redefinir sua senha caso tenha esquecido.  |
| RF9	| Gestão de acervo |	O sistema deve permitir que administradores adicionem, editem e removam livros do catálogo.  |
| RF10	| Configuração de leitor digital |	O usuário deve poder ajustar o tamanho da fonte e a cor de fundo do leitor digital.  |
| RF11	| Experiência de uso |	O sistema deve salvar automaticamente a última página lida para retomada posterior.  |
| RF12	| Experiência de uso |	O sistema deve permitir ao usuário realizar anotações e marcações.  |
| RF13	| Renovação de acervo |	O sistema deve permitir que o usuário solicite que novos livros sejam adicionados ao catálogo  |
| RF14	| Recomendação de livros |	O sistema deve sugerir outras obras com base no gênero dos livros lidos pelo usuário  |
| RF15	| Recomendação de livros |	O sistema deve informar os livros recém adicionados  |
| RF16	| Personalização de perfil de usuário |	O sistema deve permitir que os usuários editem seu perfil, incluindo nome, foto e preferências de leitura.  |



### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O sistema deve ser escalável para suportar um crescimento futuro de usuários e livros. |
| RNF2 | O sistema deve armazenar senhas de forma criptografada. |
| RNF3 |	O sistema deve usar HTTPS para proteger a comunicação entre cliente e servidor. |
| RNF4 |	O sistema deve ser acessível via web e dispositivos móveis (Android e iOS). |
| RNF5 |	O sistema deve seguir a norma W3C de acessibilidade. |
| RNF6 |	O sistema deve ser compatível com os navegadores mais usados (Chrome, Firefox, Edge, Safari). |
| RNF7 |	O sistema deve apresentar tempo de resposta de no máximo 2 segundos. |
| RNF8 |	O sistema deve suportar 1000 acessos simultâneos. |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador |	Usuário gerente do sistema responsável pelo cadastro e gestão de livros. Possui acesso geral ao sistema. |
| Usuário |	Usuário consumidor da plataforma, que utilizará para a leitura de livros |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.
![diagrama casos uso](https://github.com/user-attachments/assets/56abd516-a142-4f7f-b41c-c7e418bcedd3)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Caso de Uso 1: Cadastro de Usuário

Atores Envolvidos: Usuário (Leitor ou Administrador)

Descrição: Permite que uma pessoa se cadastre como usuário do sistema, sendo por padrão um cadastro como leitor. (para administradores, o cargo é concedido manualmente por um administrador pré-existente).

Pré-condições: Usuário não deve estar cadastrado previamente.

Fluxo Principal de Eventos: Pessoa acessa a página de cadastro.
Preenche os dados solicitados (nome, e-mail, senha).
O sistema valida os dados.
O sistema confirma o cadastro.

Fluxo Alternativo: Se o e-mail já estiver em uso, o sistema solicita outro.

Pós-condições: Usuário cadastrado e com tipo de acesso definido.

#### Caso de Uso 2: Login

Atores Envolvidos: Usuário

Descrição: Permite que o usuário entre na plataforma com e-mail e senha.

Pré-condições: O usuário já deve estar cadastrado.

Fluxo Principal de Eventos: Usuário acessa a tela de login.
Usuário informa e-mail e senha.
Sistema verifica as credenciais.
Acesso é concedido e o painel inicial é carregado.

Fluxo Alternativo: Se a senha estiver incorreta, o sistema exibe mensagem de erro.

Pós-condições: Sessão iniciada.



#### Caso de Uso 3: Buscar Livros

Atores Envolvidos: Usuário

Descrição: Permite que o usuário busque livros por título, autor ou gênero.

Pré-condições: Usuário deve estar logado.

Fluxo Principal de Eventos: Usuário acessa a área de busca.
Insere termo desejado (título/autor/gênero).
O sistema exibe os resultados.
Pós-condições: Livros relevantes são listados na tela.

#### Caso de Uso 4: Leitura de livro online

Atores Envolvidos: Usuário cadastrado

Descrição: Permite que usuários assinantes leiam livros direto pelo navegador.

Pré-condições: Usuário deve estar logado.

Fluxo Principal de Eventos: Usuário escolhe um livro disponível.
O sistema verifica o status de login do usuário e a disponibilidade do livro.
O conteúdo do livro é exibido no leitor digital.

Fluxo Alternativo: Se o usuário estiver deslogado, o acesso é negado e o usuário é redirecionado para a tela de login.

Pós-condições: Livro aberto para leitura.


#### Caso de Uso 5:  Gerenciar Catálogo de Livros

Atores Envolvidos: Administrador

Descrição: Permite que o administrador adicione, edite ou exclua livros do catálogo.

Pré-condições: Acesso com permissão de administrador.

Fluxo Principal de Eventos: Admin acessa o painel de gestão.
Seleciona opção de adicionar, editar ou remover livro.
Sistema salva as alterações no banco de dados.

Pós-condições: Catálogo atualizado.


#### Caso de Uso 6:  Redefinir senha

Atores Envolvidos: Usuário (Leitor ou Administrador)

Descrição: Permite que usuários redefinam suas senhas em caso de esquecimento.

Pré-condições: O usuário deve ter cadastro com e-mail válido.

Fluxo Principal de Eventos: Usuário acessa a opção "Esqueci minha senha".
Informa o e-mail cadastrado.
O sistema envia um link de redefinição para o e-mail informado.
Usuário acessa o link e define nova senha.
Sistema confirma a alteração.

Fluxo Alternativo: Se o e-mail não estiver cadastrado, o sistema informa que não há usuário cadastrado e convida a realizar o registro.

Pós-condições: Nova senha cadastrada.


#### Caso de Uso 7:  Editar perfil

Envolvidos: Usuário (Leitor ou Administrador)

Descrição: Permite que o usuário atualize seu nome, imagem de perfil e preferências de leitura.

Pré-condições: Usuário deve estar logado.

Fluxo Principal de Eventos: Usuário acessa o menu de perfil.
Altera as informações desejadas.
O sistema valida e salva as alterações.
Feedback é exibido confirmando a atualização.

Pós-condições: Perfil atualizado com sucesso.

#### Caso de Uso 8: Ver livros recomendados

Atores Envolvidos: Usuário (Leitor)

Descrição: Exibe sugestões de leitura personalizadas com base no histórico do usuário, como gêneros mais lidos, anotações e avaliações feitas.

Pré-condições: Usuário deve estar logado e ter lido ou interagido com pelo menos um livro.

Fluxo Principal de Eventos: O usuário acessa a área de recomendações.
O sistema analisa os gêneros dos livros lidos anteriormente.
O sistema busca outros livros semelhantes no catálogo.
O sistema exibe uma lista de recomendações.

Fluxo Alternativo: Se o usuário ainda não tiver histórico, o sistema pode exibir sugestões gerais ou com base em tendências da plataforma.

Pós-condições: Lista de livros sugeridos exibida ao usuário.



### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![diagrama classes](https://github.com/user-attachments/assets/8367e733-0d1e-4bff-b795-56cf7d377305)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuário |	Cadastro de informações relativas aos usuários |
| 2	| Livro |	Cadastro de livros |
| 3 |	Leitura |	Registro de leituras individuais de cada usuário |
| 4 |	Anotação |	Cadastro de anotações realizadas durante a leitura |
| 5	|	Comentário |	Cadastro de comentários relacionados a livros.|
