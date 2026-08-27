import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BgChanger from './bg-changer/BgChanger.tsx'
import Counter from './counterApp_0/Counter.tsx'
import GeneratePassword from './password-generater/GeneratePassword.tsx'
import Currency from './currencyExchange_5/Currency.tsx'
import Home from './react-router_7/Home/Home.tsx'
import About from './react-router_7/About/About.tsx'
import Contact from './react-router_7/Contact/Contact.tsx'
import User from './react-router_7/User/User.tsx'
import { ThemeProvider } from './Context/theme.ts'


const reactElement  = {
  type:"a",
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  children:"google"
} // why this not work? because this method create like type,props etc from my thoughts i dont know wether react use or not so that's why this is not work

const createAnother = () => (
  <h1>hello</h1>
)

const reactActualElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_blank"},
  'click'
)// this is work because they already define first value ,seconde value etc and last evaluated expression injected result of js like variable 

console.log(reactActualElement)


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
      path:'/',
      element:<Home/>
      },
      {
      path:'about',
      element:<About/>
      },
      {
      path:'contact',
      element:<Contact/>
      },
      {
      path:'user/:id',
      element:<User/>
      },
      {
      path:'bg-changer',
      element:<BgChanger/>
      },
      {
      path:'counter-app',
      element:<Counter/>
      },
      {
      path:'Generate-pass',
      element:<GeneratePassword/>
      },
      {
      path:'currency',
      element:<Currency/>
      },
  ]
  }
])



function Main() {
  const [themeMode,setThemeMode] = useState("light")
  
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }
  
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector('html')?.classList?.add(themeMode)
  }, [themeMode])

  return(
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
  
}

createRoot(document.getElementById('root')!).render(
  <Main />
)