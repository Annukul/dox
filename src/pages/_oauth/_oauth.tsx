import { useEffect } from "react"
import { authorize } from "../../services/auth"
import { useSearchParams } from "react-router-dom"
import { redirect } from "react-router-dom"
import { AuthStore } from "../../store/auth-store"

export const OAuth = () => {
  const [searchParams] = useSearchParams()

  const [updateAuthState] = AuthStore((state: any) => [state.updateAuthState])

  const authorizeRequest = async () => {
    const code = searchParams.get("code")
    if (code) {
      const res = await authorize({ code: code })
      console.log({ res })
      updateAuthState({ isLoggedIn: true, user: res?.data })
      redirect("/")
    }
  }

  useEffect(() => {
    authorizeRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return <h1>Redirecting...</h1>
}
