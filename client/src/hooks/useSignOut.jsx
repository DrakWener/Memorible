import { useAuthContext } from "./useAuthContext"


export const useSignOut = () => {
  const {dispatch} = useAuthContext()


  const signout = () => {

    localStorage.removeItem('user')

    dispatch({type: "SignOut"})
  }

  return {signout}
}