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
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v1/https";

const app = express();
app.use(json());
app.use(cors({ origin: true }));

initializeApp();
const db = getFirestore();

app.get("/", (req: any, res: any) => {
  res.send("Welcome to the PulseTab learning space!!");
});

app.get("/users", async (req: any, res: any) => {
  try {
    const userRef = db.collection("users");
    const snapshot = await userRef.get();
    const users: any[] = [];
    snapshot.docs.forEach((doc) => {
      users.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(
//     `Express server running successfully and listening on http://localhost:${PORT}/`
//   );
// });

exports.webApi = onRequest(app);
