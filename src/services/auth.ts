import axios from "axios"

export const authorize = async (payload: { code: string }) => {
  try {
    const res = await axios.post(`${process.env.PUBLIC_API_BASE_URL}/github/callback`, payload)
    return res
  } catch (err) {}
}
