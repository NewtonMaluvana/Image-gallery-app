import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Db } from "../firebase/config";

type Image = {
  createAt: Date;
  imageUrl: string;
  userEmail: string;
};
export const useFireStore = (Names: string) => {
  const [Docs, setDocs] = useState<Image[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(Db, Names), orderBy("createAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const userEmail = doc.data().userEmail;
            const createAt = doc.data().createAt.toDate();
            images.push({ imageUrl, createAt, userEmail });
          });
          setDocs(images);
        });
      } catch (error) {}
    };
    getData();
  }, [Names]);

  return {
    Docs,
  };
};
