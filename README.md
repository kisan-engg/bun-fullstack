<p align="center">
  <a href="www.kge.one" rel="noopener">
    <svg height="24" width="60" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="24" fill="none" stroke="#C0C0C0" font-size="24">K.G.E.</text>
    </svg>
  </a>
</p>

<h3 align="center">Bun/Node FullStack Decoupled: Notes Manager </h3>

---

<p align="left"> 
This Notes Manager could be a reference point if you want to enjoy a full stack application!
</br>I have made it decoupled, so that backend and frontend can be used independently. 
<br> 
</p>

##  About <a name = "about"></a>

I could not find any good examples for elysia, better-auth!
So build my oun example for self-reference.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

If you have a liking to Node+npm. 
</br>
You can replace <strong>bun </strong> (or bun --bun) with <strong>npm</strong>.

## Prerequisites <a name = "prerequisites"></a>

What things you need to install the software and how to install them.

  - <a href="https://bun.sh/" target="_blank">Bun</a> 
  - OR <a href="https://nodejs.org/en" target="_blank">Node</a>
  - <a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL</a>

## Installing <a name = "installing"></a>
Running this application in local would require running two bun/node instances front end and backend!

## Setup DB <a name = "setupdb"></a>
Create db name <strong>'users'</strong>.
I am using user <strong>pgelysia</strong>, feel free to use postgres as user.
helping script:
<ul>
<li>CREATE DATABASE users;</li>
<li>CREATE USER pgelysia WITH ENCRYPTED PASSWORD 'fullstack';</li>
<li>GRANT ALL PRIVILEGES ON DATABASE users TO pgelysia;</li>
<li>\c users postgres</li>
<li>(# You are now connected to database "users" as user "postgres".)</li>
<li>GRANT ALL ON SCHEMA public TO pgelysia;</li>
</ul>
</br>
Make sure to use right user and db name
```
postgres://pgelysia:fullstack@localhost:5432/users
```

## Setup Backend <a name = "backend"></a>

```
cd poc-backauth
```
```
bun install
```
Below command will create db tables based on schema provided in folder 'schema'
```
bunx drizzle-kit push
```
```
bun run dev
```

## Setup Frontend <a name = "frontend"></a>

```
cd poc-webauth
```

install dependencies:

```
bun install
```
Run application:
```
bun run dev
```

## localhost:

![alt text](image.png)

## Build-With <a name = "buildwith"></a>
- Bun
- Node
- Elysia JS
- drizzle orm
- better-auth
- svelte
- vite

## Author(s)
  - Rajeev Kr. Aryan (<a href="https://github.com/kisan-engg">@kisan-engg</a>)

