<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Описание

Фуллстек приложение - облачное хранилище - созданное с использованием фреймворков [Nest.js](https://github.com/nestjs/nest) и [Next.js](https://github.com/vercel).

## Установка nest/cli

```bash
# глобальная установка nest cli
$ npm i -g @nestjs/cli
```

## Создание начальной структуры проекта

```bash
$ nest new <project-name>
```

## Вспомогательные команды nest/cli

```bash
# список всех доступных команд
$ nest g --help

# создание crud-ресурса
$ nest g res <resourse-name>
```

## Запуск приложения

```bash
# режим разработки
$ npm run start:dev

# режим продакшн
$ npm run start:prod
```

## Запуск тестов

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
---

## Архитектура nest.js приложения

Nest.js приложение формируется из следующих компонентов:

### Модули
- **Назначение**: Группировка связанных компонентов (контроллеров, сервисов и провайдеров) для упрощения структуры приложения и управления зависимостями.

### Сервисы
- **Назначение**: Реализация бизнес-логики и управление данными. Сервисы инкапсулируют функциональность приложения и могут быть повторно использованы в разных контроллерах.

### Контроллеры
- **Назначение**: Обработка HTTP-запросов и взаимодействие с пользователем. Контроллеры принимают запросы, вызывают соответствующие сервисы и формируют ответы.

### DTO (Data Transfer Object)
- **Назначение**: Определение структуры данных, передаваемых между клиентом и сервером. DTO помогают обеспечить валидацию и поддерживать согласованность данных.

### Entities
- **Назначение**: Представление данных в виде объектов, которые соответствуют структурами таблиц в базе данных. Entities используются для управления и взаимодействия с данными в ORM (например, TypeORM).

Каждый из этих компонентов играет важную роль в обеспечении четкой архитектуры и поддерживаемости приложения.
