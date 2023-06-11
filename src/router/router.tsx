import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignIn } from "../pages/Signin"
import { Home } from "../pages/Home"

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
