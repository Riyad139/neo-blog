import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { nanoid } from "nanoid";

import FireBaseApp from "./FireBaseApp";

let uploadTask;

const uploadHandler = (blobInfo, success, failure, progress) => {
  if (uploadTask) uploadTask.cancel();

  const storageRef = ref(getStorage(FireBaseApp), "blog_images/" + nanoid());
  uploadTask = uploadBytesResumable(storageRef, blobInfo.blob());

  uploadTask.on(
    "state_changed",
    (snap) => {
      progress((snap.bytesTransferred / snap.totalBytes) * 100);
    },

    (err) => console.error(err),

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        success(url);
      });
    }
  );
};

const uploader = (blob) => {
  if (uploadTask) uploadTask.cancel();

  const storageRef = ref(getStorage(FireBaseApp), "blog_images/" + nanoid());
  uploadTask = uploadBytesResumable(storageRef, blob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snap) => {},

      (err) => console.error(err),

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
};

export { uploadHandler, uploader };
