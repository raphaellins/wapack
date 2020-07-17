import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request : any, response: any) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const realRequest = functions.https.onRequest((request : any, response: any) => {
  functions.logger.info("Real request!", {structuredData: true});
  response.send("Hello from Firebase!");
});