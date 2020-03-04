# Sample charts component

[Demo🏃](https://sampleapp-49553.web.app/)

 - [x] [Angular Material design](https://material.angular.io/)✔️
 - [x] Mobile friendly ✔️
 - [x] [Firebase](https://firebase.io) UserAuth Integrated✔️
 - [x] [Firebase](https://firebase.io) Firestore realtime database Integrated✔️
 - [x] [Firebase](https://firebase.io) Firestore hosting ready✔️
 - [x] Propietary [Backend Service](https://github.com/HektorCyC/SimpleBackend) ✔️
 - [x] Angular Observables✔️
 - [x] Angular Guards ✔️
 - [x] Angular Services✔️
 - [x] Modular design✔️

## How to run the project in localhost

 1. Clone the repository at the master branch
 2. NodeJs **minimum 10.15.0 is required**
 3. Setup your own Firebase project API keys at the file `enviroments/enviroment.ts`
 4. Install dependecies `npm i`
 5. Serve the project `ng serve`

## Deploy to Firebase

 1. Login with Firebase CLI `firebase login`
 2. Initialize Firebase project -> Follow the instrucctions at the CLI `firebase init` *point to your "dist" folder for further deployments*
 3. Build your production package `ng build --prod`
 4. Deploy the project to your choosen Firebase project `firebase deploy --hosting`
Further information about deployment 
[**Angular deployment**](https://angular.io/start/deployment) 
[**Firebase Deploy**](https://firebase.google.com/docs/hosting/deploying)

Made with ❤️ in 🇲🇽