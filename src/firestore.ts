import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const cardCollection = collection(db, "cards");

export async function saveCardData(
  title: string,
  description: string,
  imageSrc: string
) {
  const newCard = {
    title,
    description,
    imageSrc,
  };
  console.log(newCard);
  try {
    await addDoc(cardCollection, newCard);
    console.log("Document written");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
