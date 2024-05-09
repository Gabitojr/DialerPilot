import { initializeApp } from 'firebase/app';
import { getFirestore, doc, collection, addDoc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a note to a specific phone number
async function addNoteToPhoneNumber(phoneNumber, note) {
  try {
    const phoneRef = doc(db, "phoneNotes", phoneNumber);
    const notesRef = collection(phoneRef, "notes");
    const docRef = await addDoc(notesRef, {
      title: note.title,
      content: note.content,
      created_at: new Date()
    });
    console.log("Note added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding note: ", e);
  }
}

export default addNoteToPhoneNumber;
// Example usage
