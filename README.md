# API Monitoramento Agrícola

## Executar projeto

Este projeto utiliza Docker, logo para executar o mesmo basta executar os comandos abaixo (no terminal) e ter o docker e docker compose instalados:

1. Acessar a pasta raiz do projeto.

2. Subir containers (db e app):
``` shell
docker-compose up
```

3. Criar o banco, rodar migrations e seeds:
``` shell
docker-compose exec app yarn sequelize db:create 
docker-compose exec app yarn sequelize db:migrate
docker-compose exec app yarn sequelize db:seed:all
```

4. Pronto, o projeto já estar no ar na porta **3000**, com o banco criado e com a estrutura minima para realizar as requisições do time de IOT.
```
POST - http://localhost:3000/api/v1/acquisition
```

OBS: as portas 3000 e 5432 terão que estar disponiveis na maquina host!

## Executar Teste Unitário e de Integração

1. Comente a linha 7 e descomente a linha 8 do arquivo 'docker-compose.yml'

2. Subir containers (app e db), o teste sera executado.

``` shell
docker-compose up
```

## Visualizar cobertura de teste do Projeto

1. Abrir o arquivo *'\_\_tests__/coverage/lcov-report/index.html'*

## Doc - Postman

https://documenter.getpostman.com/view/4570028/S1Zw6VCb?version=latest#intro

Collection: https://www.getpostman.com/collections/de535709d45bc827873b