import mongoose from "mongoose";
import { firebase, dotenv } from "./exports";

dotenv.config();

export async function connect_mongodb() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@cluster0-uvim4.gcp.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );
    console.log(">>> MongoDb is connected!");
  } catch (e) {
    console.log("Something went wrong!");
    console.log(e);
  }
}

// Initialize Firebase
export function connect_firebase() {
  try {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    });
    console.log(">>> Firebase initialized app ");
  } catch (e) {
    console.log("Error trying to connect to firebase");
    console.log(e);
  }
}
