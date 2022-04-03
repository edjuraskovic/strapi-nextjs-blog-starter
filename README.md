# Strapi Starter Next Blog Extended
Based on:
https://github.com/strapi/strapi-starter-next-blog

The extended starter includes:
- Cloudinary provider allowing you to upload the media content in Cloudinary
https://cloudinary.com
- articles pagination + React infinite scroll
- tailwindcss

It is bootstrapped with MongoDB / locally or connecting to Atlas Mongo DB
https://www.mongodb.com

Uses yarn to install the project dependencies



## Setup
The database configuration file is located at ```backend\config\database.js```

Create a .env file by copying the env.example located at ```backend\.env.example``` and fill in your DB credentials and Cloudinary variables.  



## Installation

### Back-end (Strapi)
Enter backend directory and run the following command:

```yarn install```


### Front-end (Next.js)
Enter frontend directory and run the following command:

```yarn install```


#### To run both servers in a single command terminal instance go to root of the project and run ```yarn install```. After instalation you can start Strapi backend and Next.js frontend from the root of your project directory by running:

```yarn develop```


Once the creation of your project is completed you will be prompted to http://localhost:1337/admin in order to create the first admin user for your project and to log in into the administration panel.

Frontent will be available on http://localhost:3000/


Cheers :sparkles:
