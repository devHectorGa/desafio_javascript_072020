# How to Install

- Install dependencies in the main directory and, install dependencies in the client folder with **npm** or **yarn**.

  ```
  // Install dependencies
  $ yarn install
  or
  $ npm install

  // Install dependencies inside the client folder
  $ cd client/ | yarn install
  or
  $ cd client/ | npm install
  ```

- **.env** file have this structure:
  ```
  // AUTH SECTION
  AUTH_SECRET=AUTH_SECRET
  // DB SECTION
  DB_USER=DB_SERVER
  DB_PASSWORD=DB_PASSWORD
  DB_NAME=DB_NAME
  ```
