# 1. INTRODUÇÃO

Nos últimos dez anos, o consumo de conteúdo digital tem se transformado significativamente, migrando de um modelo baseado na compra unitária para o formato de assinaturas dos chamados streamings. Essa mudança de paradigma está diretamente relacionada à evolução tecnológica e à popularização da internet de alta velocidade, que possibilitou a criação de plataformas acessíveis e convenientes para os usuários. O modelo de assinatura tem se consolidado em diferentes segmentos do mercado, como música, filmes e livros, garantindo acesso contínuo a vastas bibliotecas de conteúdo mediante um pagamento fixo mensal ou, em alguns casos, por meio de versões gratuitas com publicidade (Montardo; Valiatti, 2021).

De acordo com Datta, Knox e Bronnenberg (2022), as plataformas de streaming se caracterizam por oferecer catálogos digitais dinâmicos e atualizados periodicamente, permitindo que os usuários explorem e consumam conteúdos de maneira ilimitada dentro de determinados períodos. O setor musical foi um dos pioneiros na adoção desse modelo, com serviços como Spotify e Deezer transformando a forma como os consumidores acessam e descobrem novas músicas. De maneira semelhante, a indústria cinematográfica também passou por uma revolução com o crescimento de plataformas como Netflix e Prime Video, que proporcionam acesso sob demanda a um extenso catálogo de filmes e séries.

No mercado editorial, essa tendência também tem se expandido, com a popularização de plataformas de assinatura de livros digitais. Serviços como Kindle Unlimited, oferecido pela Amazon, possibilitam que os usuários leiam uma ampla seleção de títulos sem a necessidade de adquiri-los individualmente. De acordo com Silva (2024), a acessibilidade proporcionada por dispositivos eletrônicos e plataformas digitais contribui para democratizar o acesso ao conhecimento, além de permitir uma diversificação do perfil dos leitores que antes não estavam contemplados nas vendas unitárias de livros.

Consideradas as vantagens da leitura por meio digital, é relevante destacar que a implementação de um sistema de assinatura de livros digitais apresenta desafios técnicos e operacionais relevantes. Questões como a segurança no acesso ao conteúdo, escalabilidade da infraestrutura e experiência personalizada do usuário precisam ser abordadas para garantir o sucesso da plataforma. 

Diante desse cenário, a livraria Café com Letras, empresa de caráter fictício, tem o objetivo de posicionar-se no mercado digital por meio do desenvolvimento de uma plataforma de assinatura de livros. A criação desse sistema exige uma análise detalhada das melhores práticas adotadas no setor, garantindo uma solução inovadora, segura e escalável.

## 1.1. Problema

A transformação digital intensificou a distribuição de livros em meio digital, tornando a presença online um requisito essencial para a competitividade das livrarias. Nesse cenário, modelos inovadores de acesso ao conteúdo literário têm ganhado espaço, sendo o formato de assinatura já popular em setores como música e audiovisual.

A adoção do streaming de livros apresenta-se como uma oportunidade estratégica para modernizar a forma de consumo de conteúdos literários, permitindo que os leitores acessem um vasto acervo de obras mediante um pagamento recorrente. Além de proporcionar conveniência ao usuário, esse modelo representa uma possibilidade de inovação para o setor, diferenciando-se das tradicionais vendas unitárias e promovendo maior engajamento do público leitor. 

Diante dessas demandas, torna-se necessária a concepção de um software, que atenda às exigências técnicas e operacionais desse modelo de distribuição. O sistema deverá contemplar funcionalidades essenciais, como o registro de novos usuários, a adesão a planos de assinatura e o acesso à leitura digital de forma segura e eficiente. Dessa forma, a solução proposta busca não apenas acompanhar as transformações do mercado editorial, mas também consolidar um modelo inovador de acesso à leitura, contribuindo para a democratização do conhecimento e a expansão da literatura digital no Brasil.

## 1.2. Objetivos do trabalho

O objetivo do trabalho é desenvolver um software capaz de atender os principais requisitos do novo serviço de assinatura de livros que a livraria almeja implementar, integrando a nova modalidade a um sistema pré-existente de e-commerce para venda de livros físicos e digitais. O principal requisito do software é prover o acesso aos e-books por meio de plataforma digital, porém isso requer o desenvolvimento de diversas outras funcionalidades que não são tão óbvias para o estabelecimento.

A primeira alteração que se faz necessária é a identificação de quais clientes aderiram ao plano de assinatura, para que o sistema possa liberar ou não o acesso à plataforma de leitura de e-books. Portanto, é preciso incluir um campo adicional no banco de dados para essa finalidade.

O software também precisará controlar os pagamentos recorrentes oriundos das assinaturas. Um sistema de e-commerce é desenhado para lidar apenas com transações pontuais, geradas por compras; será necessário implementar uma funcionalidade de gestão de pagamento de mensalidades, com dashboards para os clientes mostrando valores pagos e vencimentos futuros, com as respectivas datas. Com a falta de uma gestão financeira organizada, os clientes podem se sentir insatisfeitos pela desordem do controle de mensalidades e pagamentos em geral e buscar uma outra empresa que possua um ambiente mais moderno (De Morais Jr. et al., 2013).

Alguns requisitos não-funcionais importantes que surgem estão relacionados ao controle de acesso dos usuários. O sistema deve integrar a gestão do pagamento das mensalidades à liberação de acesso ao sistema de leitura de e-books, sendo capaz de separar quem está em dia com as mensalidades dos inadimplentes e, também, determinar em que momento o último grupo perderá o acesso ao conteúdo exclusivo.

## 1.3. Justificativa

  A digitalização acelerada pela pandemia de COVID-19 tornou os serviços de assinatura de livros uma oportunidade estratégica para modernizar a forma de consumo de conteúdo literário (Silva, 2024). Em vez de vendas unitárias, o “streaming” de livros traz praticidade, engajamento e competitividade, atendendo às expectativas dos leitores que buscam flexibilidade.
  
  A integração dessa nova modalidade ao e-commerce da Café com Letras justifica-se pela necessidade de gerenciar pagamentos recorrentes, controle de acesso ao acervo e diferenciação dos clientes assinantes. Além de aprimorar a experiência do usuário e evitar falhas na gestão de mensalidades, a solução fortalece o papel da livraria na democratização do conhecimento, atendendo às demandas de um mercado editorial cada vez mais digital.

## 1.4. Público alvo

  O público-alvo é muito diversificado, pois o nosso projeto vai oferecer e-book para todas as idades e interesses, dos livros infantis até livros clássicos e biográficos. Uma parte do nosso público pode ser aquela pessoa que vai assinar a nossa assinatura mensal que garante acesso a todos os livros do nosso portfólio, mas também temos o público que só quer comprar um livro que ele está interessado.
  
  O perfil do nosso público-alvo são aquelas pessoas que são aptas à leitura digital, essas pessoas podem ser de diferentes idades, mas o maior consumidor de livros digitais atualmente é de jovens entre 18 e 24 anos, mas faremos com que todas as idades se deslumbrem com a leitura digital.
