import axios from "axios"

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return "https://dox.fly.dev/api/v1"
  } else {
    return "http://localhost:4000/api/v1"
  }
}

export const authorize = async (payload: { code: string }) => {
  try {
    const res = await axios.post(`${getBaseUrl()}/github/callback`, payload)
    return res
  } catch (err) {}
}
