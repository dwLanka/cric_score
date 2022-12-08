import { collection, addDoc } from "firebase/firestore";
import { db } from "../db";

export const createTournament = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const tournamentRef = await addDoc(collection(db, "tournaments"), {
        tt: [
          { name: "ABC", isActive: true },
          { name: "ABC2", isActive: false },
        ],
      });

      console.log("tournamentRef ", tournamentRef.id);
      resolve(tournamentRef);
    } catch (e) {
      console.error("Error adding document: ", e);
      reject(e);
    }
  });
};
