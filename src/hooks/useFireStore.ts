import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Db } from "../firebase/config";

type Image = {
  createAt: Date;
  imageUrl: string;
  userEmail: string;
};
export const useFireStore = (Names: string) => {
  const [Docs, setDocs] = useState<Image[]>([]);
  const [isloading, setisLoading] = useState<Boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(Db, Names), orderBy("createAt", "desc"));
        onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const userEmail = doc.data().userEmail.split("@")[0];
            const createAt = doc.data().createAt.toDate();
            images.push({ imageUrl, createAt, userEmail });
          });
          setDocs(images);
          setisLoading(false);
        });
      } catch (error) {}
    };
    getData();
  }, [Names]);

  return {
    Docs,
    isloading,
  };
};
