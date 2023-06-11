import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Authentication } from "../pages/Authentication"
import { Home } from "../pages/Home"

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
