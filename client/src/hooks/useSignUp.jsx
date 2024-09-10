import { useAuthContext } from './useAuthContext'
import { useState } from 'react'

export const useSignUp = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (username, email, password, repassword) => {
    setError(null)
    setIsLoading(true)

    await axios.post('http://localhost:5005/api/user/SignUp', {
      username: username,
      email: email,
      password: password,
      repassword: repassword
    })
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data.data))
      dispatch({type: "SignIn", payload:data.data})
      setError(null)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setError(err)
      setIsLoading(false)
    })
  }

  return { signup, error, isLoading }
} 