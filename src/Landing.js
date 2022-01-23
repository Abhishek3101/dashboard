import React,{useEffect,useState} from 'react';
import { useAuth } from './AuthContext';
import {Button, Heading, Text, chakra} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
function Landing() {
  const {currentUser,signInwithGoogle} = useAuth()
  const navigate = useNavigate()
  const [loading, setloading] = useState(true);
  useEffect(() => {
    console.log(currentUser)
    if(currentUser !== null){
      navigate('/loggedin',{replace: true})
    }
  
    return ()=>{
      setloading(false)
    }
  }, [currentUser]);

  useEffect(() => {
    const user = localStorage.getItem('userlocal')
    if(!user){
      setloading(false)
    }
  }, []);
  
  
  return (
    <>
      {loading ? (
        <>
        {console.log('loader')}
        <Text>Page is Loading</Text>
        </>
      ) : (
        <>
        {console.log('button')}
        <div>
          <Button
            onClick={signInwithGoogle}
          >
            Login using Google
          </Button>
          {/* <Heading>{`The current user is: ${currentUser}`}</Heading>
          <Text>{currentUser.providerData[0].uid}</Text>

          <chakra.pre>{JSON.stringify(currentUser, null, 2)}</chakra.pre> */}
        </div>
        </>
      )}
    </>
  );
  
}

export default Landing;
