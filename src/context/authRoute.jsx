// import { Children } from "react";
import { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    // Auth: false,
    auth: false,
    user: null,
    // _id: null,
    token: "",
    // password: "",
  });
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if(data){
        const parse = JSON.parse(data);
        setauth({
            ...auth,
            auth: true,
            user: parse.user,
            token: parse.token,
            // password: parse.password,
        })
    }
  }, [])
  return (
    <AuthContext.Provider value={[auth, setauth]}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
