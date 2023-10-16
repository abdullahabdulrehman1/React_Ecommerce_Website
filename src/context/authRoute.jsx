// import { Children } from "react";
import { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    // Auth: false,
    user: null,
    // _id: null,
    token: "",
    // auth: false,
    // password: "",
  });
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if(data){
        const parse = JSON.parse(data);
        setauth({
            ...auth,
            user: parse.user,
            token: parse.token,
            auth: true,
            password: parse.password,
        })
    }
  }, [])
  return (
    <AuthContext.Provider value={[auth, setauth]}>
      {children}
    </AuthContext.Provider>
  );
};


export { useAuth, AuthProvider };
