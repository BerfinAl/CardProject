import {
  ref,
  uploadBytes,
  getDownloadURL,
  ref as storageRef,
  getMetadata,
} from "firebase/storage";
import { db, storage } from "./firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
  limit,
} from "firebase/firestore";

const cardsCollection = collection(db, "cards");

export const uploadImage = async (file: File) => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  console.log(storageRef);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const saveCard = async (
  title: string,
  description: string,
  imageUrl: string
) => {
  try {
    await addDoc(cardsCollection, {
      title: title,
      description: description,
      image: imageUrl,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export async function getLatestCard(cb : Function) {
  const q = query(
    collection(db, "cards"),
    orderBy("timestamp", "desc"),
    limit(1)
  );

  onSnapshot(q, async (snapshot) => {
    for (const change of snapshot.docChanges()) {
      if (change.type === "added") {
        const { title, description, image } = change.doc.data();
        const imageUrl = image;
        const imageRef = storageRef(storage, imageUrl);
        const imageSrc = await getDownloadURL(imageRef);
        getMetadata(imageRef)
          .then((file) => {
            cb({ title, description, image: { file, imageSrc } });
          })
          .catch((error) => {
            console.log("error getting the metadata", error);
          });
      }
    }
  });
}
