# E-commerce Backend

## ORM (OBJECT RELATIONAL MAPPING)


<a href="https://img.shields.io/badge/JavaScipt-100%25-yellow"><img alt="JavaScript use" src="https://img.shields.io/badge/JavaScipt-100%25-yellow"></a> <a href="https://img.shields.io/badge/Used-Node.js-red"><img alt="Node.js use" src="https://img.shields.io/badge/Used-Node.js-red"></a> <a href="https://img.shields.io/badge/Used-Express-orange"><img alt="Express" src="https://img.shields.io/badge/Used-Express-orange"></a> <a href="https://img.shields.io/badge/Used-Dotenv-blueviolet"><img alt="Dotenv" src="https://img.shields.io/badge/Used-Dotenv-blueviolet"></a> <a href="https://img.shields.io/badge/Used-Mysql2-informational"><img alt="Mysql2" src="https://img.shields.io/badge/Used-Mysql2-informational"></a> <a href="https://img.shields.io/badge/Used-Sequelize-success"><img alt="Sequelize" src="https://img.shields.io/badge/Used-Sequelize-success"></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough](#walkthrough)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Contact Information](#contact-information)

## Description

    E-commerce Backend is a project focuses on Object Relational Mapping (ORM). Here we are creating an inventory for an e-commerce platform and
    focusing on API ROUTES to perform RESTful CRUD operations.

## Installation  

#### Mysql is needed to create database. 
#### INSOMNIA to test routes and perform CRUD operations
To download INSOMNIA click [HERE!!!](https://insomnia.rest/)
#### To run this code repo in your computer, user must install Node.js. 
#### User also need the following dependencies

    * Express
    * mysql2 
    * Dotenv 
    * Sequelize
    * Nodemon (Dev Dependencies)   
    * Jest (To run test)

- open terminal
- clone the repo: `https://github.com/thossain89/E-Commerce-Backend.git`
- cd into new directory (Must be in directory to work) 
- Download all dependency package by entering `npm install`
- Create The database in Mysql shell by running `SOURCE db/schema.sql`
- Quit Mysql shell
- Then run `node seeds/index.js` to seed the database
- Run `node server.js` to start the server


## Usage

```
To perform the crud operations we need INSOMNIA an open source API client. Use the following path to create, read, update, delete from database.

- Products: localhost:3001/api/products
- Categories: localhost:3001/api/categories
- Tags: localhost:3001/api/tags
```


## Demo of CRUD operations :

![DEMO CRUD OPERATIONS](./assets/img/demo.gif)  



## Walkthrough

### The walkthrough video is in three parts. The first part shows the setup, second one shows CRUD operations for products and third one covers the categories and tags route. 
-----------------------------------------------------------------------------------------------------------------------------------------------------
#### Part-1: setup Walkthrough [click here !](https://drive.google.com/file/d/1KlTxjYQfyxJ0skVvireVYtjF1pzKyWN5/view).

#### Part-2: products CRUD Operations Walkthrough [ click here!](https://drive.google.com/file/d/1RzhkS5vrOEcomn5Nvyz5vuUqr4_dF_gT/view).
#### Part-3: categories and Tags CRUD operations Walkthrough [click here!](https://drive.google.com/file/d/1J9hfz5iHRj6WuvL6Xin0zFxauLgVOf2n/view).

-------------------------------------------------------------------------------------------------------------------------------------------------------
## Contribution

If you would like to contribute to this project reach out to me. Contact Information can be found below or by clicking on the 'Contact-Information' link provided in the Table of Contents.

## Test Instructions
#### For testing user must install Jest dependency in Node.js module
#### You must Download jest to conduct any test in this repo  
- Download jest in cmd by running the code `npm install jest`
- Then run: `npm run test` in console


## License

<a href="https://img.shields.io/badge/License-MIT-brightgreen"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen"></a>

## Contact Information

[Email Address](tanvirhossain2006@gmail.com)

[Github Repo ReadMe Generator](https://github.com/thossain89/Team_Profile_Generator.git)

## Authors   

<img src="./assets/img/tanvir.jpg" width="50">  


* **Tanvir hossain** [Git Hub Profile](https://github.com/thossain89)  

&copy; 2021 Tanvir Hossain, Coding Bootcamp ,University of Sydney and Trilogy Education
