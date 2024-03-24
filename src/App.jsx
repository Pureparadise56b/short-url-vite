import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import PreLoader from './pages/PreLoader'
import AuthProvider from "./AuthProvider"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
