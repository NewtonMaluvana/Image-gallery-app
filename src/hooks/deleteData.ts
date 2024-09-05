import {
  deleteDoc,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { Db } from "../firebase/config";

export const deleteData = async (image: string) => {
  try {
    const q = query(collection(Db, "images"), where("imageUrl", "==", image));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Loop through the documents and delete them
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  } catch (error) {}
};
