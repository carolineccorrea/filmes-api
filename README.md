## Índice
* [General info](#general-info)
* [Tecnologias](#tecnologias)
* [Setup](#setup)
* [Documentação](#documentação)

## Informações Gerais
API REST foi desenvolvida para buscar e adicionar as informações referente a informações sobre filmes.
As informações dos filmes serão obtidas pela API: http://www.omdbapi.com/

Os dados correspondentes dos filmes e usuarios cadastrados são guardados no banco de dados MONGODB.

![GitHub repo size](https://img.shields.io/github/repo-size/carolineccorrea/movies-api)
![GitHub](https://img.shields.io/github/license/carolineccorrea/movies-api)
![GitHub language count](https://img.shields.io/github/languages/count/carolineccorrea/movies-api)
![GitHub top language](https://img.shields.io/github/languages/top/carolineccorrea/movies-api)
 [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=carolineccorrea_movies-api&metric=security_rating)](https://sonarcloud.io/dashboard?id=carolineccorrea_movies-api)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=carolineccorrea_movies-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=carolineccorrea_movies-api)

## 🚀 Technologias
Project is created with: 
* [Nest Framework](https://nestjs.com)
* [Mongoose](https://mongoosejs.com)
* [Swagger](https://swagger.io)
---

## 📰 Documentação
Swagger Open API 🔥

```
$ npm run dev:server
$ localhost:3000/docs
```
---

## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/api-filmes.git
$ cd api-filmes
$ npm install
$ npm run dev:server
```
---

## O servidor inciará na porta:3000 - acesse <http://localhost:3000> 

## Exemplos de uso { GET , POST , PUT , DELETE }

* adicionando um usuário /POST
http://localhost:3000/v1/customers

```
{
  "name": "fulano",
  "password":"0101010101",
  "document": "111111111111",
  "email": "emailexemplo@email.com"
}

```

* adicionando um filme /POST
```
http://localhost:3000/v1/customers/:document/:nomedofilme

```
---

* buscando um filme /GET
```
http://localhost:3000/v1/customers/:document/:nomedofilme

```
---
Desenvolvido por Caroline Correa 👽
