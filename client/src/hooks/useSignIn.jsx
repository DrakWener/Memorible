import { useAuthContext } from './useAuthContext'
import { useState } from 'react'

export const useSignIn = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signin = async (emailusername, password) => {
    setError(null)
    setIsLoading(true)

    await axios.post('http://localhost:5005/api/user/SignIn', {
      emailusername: emailusername,
      password: password
    })
    .then((data) => { 
      localStorage.setItem('user', JSON.stringify(data.data))
      dispatch({type: "SignIn", payload:data.data})
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setError(err)
      setIsLoading(false)
    })
  }

  return { signin, error, isLoading }
} 