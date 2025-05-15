/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import express, { json } from "express";
import cors from "cors";
// import { onRequest } from "firebase-functions/v1/https";

const app = express();
app.use(json());
app.use(cors({ origin: true }));

app.get("/", (req: any, res: any) => {
  res.send("Hello from Firebase!");
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(
    `Express server running successfully and listening on http://localhost:${PORT}/`
  );
});


// exports.webApi = onRequest(app);
