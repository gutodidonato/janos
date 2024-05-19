import React, {useState, createContext, useEffect} from 'react';
import { signInWithEmailAndPassword, getAuth, signOut} from "firebase/auth";
import { getDatabase, ref, get } from 'firebase/database';
import AsyncStorage from '@react-native-community/async-storage';
import { firebase } from '../../App';

export const AuthContext = createContext({});



function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState(null)
  
  const auth = getAuth();


  useEffect(()=>{
    async function loadStorage(){
      const userStored = await AsyncStorage.getItem('Auth_user')
    if (userStored){
      setUser(JSON.parse(userStored));
    }
  }

  
    loadStorage()

  }, [])


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
      storageUser(userData);


      alert("Bem-vindo: " + userCredential.user.email);
    } catch (error) {
      alert("Ops, algo deu errado: " + error.message);
    }
  }

  async function storageUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function deslogar(){
    await signOut(auth);
    await AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, userData, logar }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider;