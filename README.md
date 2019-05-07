# owlbooks

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

## How to run
1. Clone or download the project
2. `npm install`
3. Create a `.env` file in the root of the project like:
  ```
  PORT=3001
  MONGODB_URI=mongodb://localhost:27017/owlbooks
  JWT_PRIVATE_KEY=[jwtPrivateKey]
  GOOGLE_CLIENT_ID=[googleClientId]
  FACEBOOK_APP_ID=[fbAppId]
  FACEBOOK_APP_SECRET=[fbAppSecret]
  ```
4. Create a `.env` file inside the `client` folder like:
  ```
  REACT_APP_PERSIST_ENCRYPT_KEY=[persistEncryptKey]
  REACT_APP_GOOGLE_CLIENT_ID=[googleClientId]
  REACT_APP_FACEBOOK_APP_ID=[fbAppId]
  ```
5. `npm run dev` or `npm start`

## Test at heroku
https://owlbooks.herokuapp.com/
