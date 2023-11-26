// import { data } from "autoprefixer";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
  user: null,
  token: "",
  auth: false,
  loading: true,
  role: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "set_role":
      return { ...state, role: payload };
    case "login":
      return {
        ...state,

        user: payload.user,

        token: payload.token,
        auth: payload.auth,
        loading: false,
        role: payload.user.role,
      };
    case "logout":
      return { initialState };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (user && token) {
      dispatch({
        type: "login",
        payload: {
          ...state,
          user,
          auth: user.auth,
          token,
          // user.auth,
        },
      });
    }
  }, []);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const useDispatchContext = () => useContext(DispatchContext);
// // import { Children } from "react";
// import { useState, useEffect, createContext, useContext } from "react";
// const AuthContext = createContext();
// const useAuth = () => useContext(AuthContext);
// const AuthProvider = ({ children }) => {
//   const [auth, setauth] = useState({
//     // Auth: false,
//     user: null,
//     // _id: null,
//     token: "",
//     auth: "",

//     // auth: false,
//     // password: "",
//   });

//   useEffect(() => {
//     const data = localStorage.getItem('auth')
//     if(data){
//         const parse = JSON.parse(data);
//         setauth({

//             user: parse.user,
//             token: parse.token,
//             auth: parse.auth,

//             password: parse.password,

//             auth: auth.role,

//         })
//     }

//   }, [])
//   return (
//     <AuthContext.Provider value={[auth, setauth]}>
//     {/* console.log(auth) */}
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { useAuth, AuthProvider };
