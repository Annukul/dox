import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Authentication } from "../pages/Authentication"
import { Home } from "../pages/Home"
import { OAuth } from "../pages/_oauth/_oauth"

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<Home />} />
        <Route path="/oauth/github/callback" element={<OAuth />} />
      </Routes>
    </Router>
  )
}
