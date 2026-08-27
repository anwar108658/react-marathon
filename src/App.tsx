import { Outlet } from "react-router-dom"
import Footer from "./react-router_7/Footer/Footer"
import Header from "./react-router_7/Header/Header"

function App() {
  

  return (
    <div className="bg-white dark:bg-black">
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
