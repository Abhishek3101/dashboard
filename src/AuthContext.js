import {createContext,useContext,useEffect,useState} from 'react'
import { auth } from './firebase'
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth'
const AuthContext = createContext({
    currentUser: null,
})

export const useAuth = ()=> useContext(AuthContext)

export default function AuthContextProvider({children}){
    const [currentUser, setcurrentUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user=>{
          setcurrentUser(user)
          if(user){
            localStorage.setItem('userlocal',user)
          }
          
      })
    
      return () => {
        unsubscribe();
      };
    }, []);
    

    function signInwithGoogle(){
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    function signOutUser(){
        return signOut(auth)
    }

    const value = {
        currentUser,
        signInwithGoogle,
        signOutUser
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}