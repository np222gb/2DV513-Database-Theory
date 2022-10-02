# Instructions

## Version 1.0

This README contains the instructions on how to use the web application as the app is not exactly production-ready yet.
The application will run with all the dependencies fulfilled as of now and will further be scaled and deployed to the web.

## npm installation instructions

1. Clone the repository into your local machine.
    ```
    git clone link-to-repo 
    ```
2. Go to the party-app directory in your local machine and open a Powershell/Git bash terminal there.
3. Since the entire app is written using the following node packages,
    *  ExpressJS            
    *  MySql 
    *  body-parser
    *  nodemon
    It is required that you install them in your local machine as well using the command, 
    ```
    npm install
    ``` 
4. Once the installation is done, go to the project directory and use the command 
    ```
    npm run start
    ```
    to start the application.

## Mysql instructions

1. I have attached the dumpfile from my local database to the git repository. 
2. Download the dump file on your local machine and run the following command.
    ```
    mysql -u root -p fikatime < backup.sql
    ```

### Prerequisites
Before traversing the application make sure you have installed the npm packages and imported the dump file into mysql.

## Traversing the application 

1. The application currently has the following routes.
    * / (which is the homepage where all the events are listed.)
    * /login (which is the login page with a quite simple authentication mechanic.)
    * /register (which is the register page where you can register a user into the application.)
    * /createevent (which is the page where you can create events to be listed in the homepage.)
<<<<<<< HEAD
    
=======
2. The application will run on ```localhost:8080``` so you can add the / and your desired route after the localhost.
3. The order where you register a user, login and then you select which event you wish to go is appropriate to test. 
4. One of the predefined users in the application is "Username: sg222wn" and "Password: 3112".
>>>>>>> a448f96a58ddeea968147e32280274d6dac5f217
---

# Authors

Sundarakrishnan Ganesh and Nitin Pasikanti
