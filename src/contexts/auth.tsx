import React, {useState, createContext} from 'react';
import { signInWithEmailAndPassword, auth } from "../firebase/firebaseConnection";
import firebase from 'firebase/database';
import { getDatabase, ref, get } from 'firebase/database';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});

  async function logar(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const db = getDatabase();
      const userRef = ref(db, 'usuarios/' + uid);
      const snapshot = await get(userRef);
      const userData = {
        uid: uid,
        nome: snapshot.val().nome,
        email: userCredential.user.email
      };
      setUserData(userData);
      alert("Bem-vindo: " + userCredential.user.email);
    } catch (error) {
      alert("Ops, algo deu errado: " + error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ userData, logar }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider;