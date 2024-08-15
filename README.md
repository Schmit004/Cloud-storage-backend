<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Описание

REST API для облачного хранилища, написанный с использованием [Nest.js](https://github.com/nestjs/nest) фреймворка.

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

## Документация

Для автоматической генерации документации используется Swagger (теперь известный как OpenAPI). Основные его преимущества:

1. **Документирование API**: Автоматическая генерация понятной документации для RESTful API, что облегчает понимание его функциональности для разработчиков и клиентов.

2. **Тестирование API**: Позволяет разработчикам и тестировщикам тестировать API прямо из интерфейса документации, упрощая процесс отладки.

3. **Генерация клиентского кода**: Swagger может генерировать клиентский код на разных языках программирования, что экономит время при интеграции API.

4. **Стандартизацие**: Предоставляет единый формат описания API, что позволяет согласованно работать с ним различным командам и инструментам.

5. **Упрощение коммуникации**: Обеспечивает ясное и единообразное представление API, что упрощает взаимодействие между разработчиками и другими заинтересованными сторонами.

```bash
# установка swagger в проект
npm i @nestjs/swagger
```

[Документация](https://docs.nestjs.com/openapi/introduction) по подключению swagger-а.

## БД в Docker

Существует множество способов создать докер-контейнер с необходимыми сервисами. Наиболее простые способы это через DockerCLI и с помощью `docker-compose.yml` файла.
Для просмотра баз данных, развёрнутых в докер-контейнере, есть множество UI-инструментов, наиболее простой из них это Adminer.
Для того чтобы использовать Adminer для просмотра содержимого базы данных PostgreSQL, развернутой в Docker, делаем следующее:

### 1: Развертывание PostgreSQL БД в Docker

Контейнер с PostgreSQL, можно развернуть с помощью следующей команды:

```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

### 2: Развертывание Adminer в Docker

Adminer, который будет использоваться для подключения к контейнеру PostgreSQL, развёртывается следующей командой:

```bash
docker run --name my-adminer -d --link my-postgres:postgres -p 8080:8080 adminer
```

### 3: Подключение к Adminer

1. В браузере и переходим по адресу `http://localhost:8080`.
2. Появится страница входа Adminer. Заполняем поля следующим образом:
   - **System**: PostgreSQL
   - **Server**: postgres (или IP-адрес контейнера PostgreSQL, если не используется `--link`)
   - **Username**: postgres
   - **Password**: mysecretpassword
   - **Database**: (оставить пустым, чтобы увидеть список всех баз данных, или указать конкретную базу данных)

3. Нажимаем кнопку "Login" для входа.

После входа видим список баз данных. Выбираем нужную базу данных и увидим список таблиц. Кликаем на любую таблицу, чтобы увидеть её содержимое.

### Пример использования Docker Compose

При использовании Docker Compose для развертывания PostgreSQL и Adminer, создаём файл `docker-compose.yml` со следующим содержимым:

```yaml
version: '3.8'

services:
  db:
    image: postgres
    restart: always
    container_name: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: mysecretpassword
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"

  adminer:
    image: adminer
    restart: always
    ports:
      - "8080:8080"
```

### Управление докер-контейнерами

```bash
# создание докер-контейнера с БД
$ docker-compose up -d

# удаление докер-контейнера
$ docker-compose down

# список томов, в которых хранятся данные
$ docker volume ls

# удаление тома с данными, если возникла проблема с кешированием
$ docker volume rm <имя_вашего_докер_тома>
```

После запуска контейнера можно перейти по адресу `http://localhost:8080`, чтобы использовать Adminer для управления базой данных PostgreSQL.

## Multer

Multer — это middleware для Node.js, который используется для обработки мультипарт-запросов (multipart/form-data). Такие запросы обычно отправляются при загрузке файлов через формы HTML. В связке с Nest.js, Multer позволяет легко обрабатывать загруженные файлы и сохранять их на сервере.

### Для чего нужен Multer?

- **Обработка файловых загрузок**: Multer позволяет легко обрабатывать загрузку файлов, полученных в HTTP-запросах.
- **Сохранение файлов**: Вы можете настроить, куда сохранять загруженные файлы и под каким именем.
- **Валидация файлов**: Multer позволяет проверять загруженные файлы на соответствие определенным критериям (например, тип файла или размер).

### Установка Multer

Для использования Multer в проекте Nest.js, используем следующую команду:

```bash
npm i @types/multer
```

### Настройка Multer в Nest.js

Multer подключается в контроллере обрабатывающем загрузку файлов с помощью специальных декораторов.
В декораторы можно передать настройки для сохранения файлов в определенную директорию, а также задать другие параметры, такие как ограничения на размер файла.

1. **Настройка Multer в контроллере**

```typescript
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB
    },
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return {
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
    };
  }
}
```

### Пример использования

Теперь вы можете отправлять POST-запросы на маршрут `/upload` с файлом в теле запроса. Например, используя `curl`:

```bash
curl -F 'file=@/path/to/your/file.jpg' http://localhost:3000/upload
```

## Passport

**Passport** — это библиотека для Node.js, которая предоставляет гибкий и модульный подход к аутентификации. Она предоставляет middleware для Express и других фреймворков для обработки аутентификации.
Основное преимущество Passport заключается в его модульности и поддержке множества стратегий аутентификации, которые можно легко добавлять и настраивать.

### Стратегии аутентификации

Стратегии аутентификации в Passport — это плагины, которые реализуют конкретные методы аутентификации. Например:

- **Локальная стратегия**: Аутентификация с использованием имени пользователя и пароля.
- **JWT стратегия**: Аутентификация с использованием JSON Web Tokens.
- **OAuth стратегии**: Аутентификация через сторонние сервисы, такие как Google, Facebook, GitHub и т.д.

### Использование Passport в Nest.js

Nest.js предоставляет официальный модуль `@nestjs/passport`, который упрощает интеграцию Passport в проект Nest.js.

#### Установка

Для начала устанавливаем необходимые пакеты:

```bash
npm install @nestjs/passport passport passport-local passport-jwt
npm install @types/passport-local @types/passport-jwt --save-dev
```

#### Настройка локальной стратегии

1. **Создание стратегии**

- Создаём файл `local.strategy.ts`.
- В файле создаём класс, который будет использовать локальную стратегию Passport.
- Реализуем метод для валидации пользователя на основе имени пользователя и пароля.

```typescript
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

2. **Создание сервиса аутентификации**

Создаём файл `auth.service.ts` и реализуем метод, который проверяет пользователя в базе данных и сравнивает пароль:

```typescript
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
```

3. **Создание модуля аутентификации**

Создайте файл `auth.module.ts` и регистрируем класс LocalStrategy в NestJS через механизм внедрения зависимостей. При регистрации класса как провайдера в модуле аутентификации NestJS самостоятельно загрузит и активирует его:

```typescript
@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
```

4. **Использование Guard для защиты маршрутов**

В файле `local.guard.ts` создаём LocalAuthGuard, который будет использовать локальную стратегию для защиты маршрутов.
В большинстве случаев, простого наследования от AuthGuard и указания стратегии достаточно для выполнения основных задач аутентификации:

```typescript
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
```

Если требуется дополнительная логика, Guard можно расширить, добавив необходимые методы и логику:

```typescript
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
```

5. **Использование Guard в контроллере**

Используем созданный LocalAuthGuard в контроллере для аутентификации:

```typescript
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
```

Связь между `LocalAuthGuard` и `LocalStrategy` происходит через имя стратегии **'local'**, которое используется в `AuthGuard`. Passport автоматически связывает Guard с соответствующей стратегией, зарегистрированной в приложении.
Механизм связи реализован в модуле `auth.module.ts`.
