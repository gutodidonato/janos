import * as React from "react";
import Rotas from "./src/Login/Rotas";
import AuthProvider from "./src/contexts/auth";


export default function App() {
  return(
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  
)
}
