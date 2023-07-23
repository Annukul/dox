import axios from "axios"

export const authorize = async (payload: { code: string }) => {
  try {
    const res = await axios.post("http://localhost:4000/api/v1/github/callback", payload)
    return res
  } catch (error) {}
}
