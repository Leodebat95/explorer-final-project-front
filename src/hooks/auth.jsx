import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});



export function AuthProvider({ children }) {

  const [data, setData] = useState({});

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    // comandos que controlam o "loading" da aplicação, checando a autenticação do "user"


  async function signIn({ email, password }) {

    try {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      localStorage.setItem("@foodexplorer:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({ user, token });

      setIsCheckingAuth(false);

    } catch(error) {

      if(error.response) {
        alert(error.response.data.message);
          
      } else {
        alert('Não foi possível entrar.');
      };
    };
  };


  function signOut() {

    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    
    setData({});
  };


  function isAdmin() {

    const userType = data.user.user_type;

    return userType === 'admin';
  };


  useEffect(() => {
    
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    
    if(token && user) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    };

    setIsCheckingAuth(false);

  }, []);



  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      isCheckingAuth,
      user: data.user,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};



export function useAuth() {

   return useContext(AuthContext);
};
