import { useState } from "react";
import { storage } from "./config";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const Usestorage = () => {
  const [Progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState("");

  const Upload = (file: File) => {
    if (!file) {
    }
    const fileId = v4();
    const formatType = file.type.split("/")[1]; //genrating random id for the file
    const storageRef = ref(storage, `images/${fileId}.${formatType}`);

    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setProgress(Progress);
        });
      }
    );
  };
  return { Progress, error, url, Upload };
};
