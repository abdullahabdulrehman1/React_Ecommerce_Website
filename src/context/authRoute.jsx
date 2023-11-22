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
    auth: "",

    // auth: false,
    // password: "",
  });
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if(data){
        const parse = JSON.parse(data);
        setauth({
            
            user: parse.user,
            token: parse.token,
            auth: parse.auth,
            
            password: parse.password,

            auth: auth.role,
            
        })
    }
  }, [])
  return (
    <AuthContext.Provider value={[auth, setauth]}>
    {/* console.log(auth) */}
      {children}
    </AuthContext.Provider>
  );
};


export { useAuth, AuthProvider };
