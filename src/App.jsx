import { Route, Routes } from "react-router"
import ContactUs from "./pages/contactus"
import Home from "./pages/home"
import Login from "./pages/login"
import Navbar from "./components/navbar/navbar"
import Career from "./pages/career"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
