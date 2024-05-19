import * as React from "react";
import Rotas from "./src/Login/Rotas";
import Tabs from "./src/Main/Tabs"
import AuthProvider from "./src/contexts/auth";
import {initializeApp} from "firebase/app"
import {config} from "./src/config/firebaseConnection"
import {AuthContext} from "./src/contexts/auth"

export const firebase = initializeApp(config.firebaseConfig);



export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user } = React.useContext(AuthContext);
  return user ? <Tabs /> : <Rotas />;
}