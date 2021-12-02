# API-NodeJs

The goal of this project is to create an API structure that is easy to use and secure. API-NodeJs makes data available for other applications to use, so the main functionality found in this API is structured data exposure

## Installation procedure
- Prerequis: Node.js ,SGBD mysql, nodemon (npm install -g nodemon), REST Client extension Visual Studio Code
- git clone https://github.com/Ntsoa2112/API-NodeJs.git
- cd API-NodeJs
- npm install
- Import the base.sql database
- Create the environment variable .env file, then copy the content of .env.example into .env, after adding the name of your database, the password and all the necessary configurations
- npm run start

## Route
List élève:

        GET http://localhost:3000/api/eleve

Obtenir un élève:

        GET http://localhost:3000/api/eleve/1

Insertion élève:

        POST http://localhost:3000/api/eleve
        Content-Type: application/json

        {
            "appelation":"RAKELY",
            "niveau":"T1"
        }

Register user:

        POST http://localhost:3000/api/user/register
        Content-Type: application/json

        {
            "nom":"RAKOTO",
            "prenom":"Bema",
            "email":"bema@gmail.com",
            "appelation":"Bemakely",
            "droit":"Niveau 2",
            "password":"bema@gmail.com",
            "confirm_password":"bema@gmail.com"
        }

Login user:

        POST http://localhost:3000/api/user/login
        Content-Type: application/json

        {
            "email":"bema@gmail.com",
            "password":"bema@gmail.com"
        }