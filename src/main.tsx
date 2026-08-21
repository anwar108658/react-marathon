import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'


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

createRoot(document.getElementById('root')!).render(
  <App />
  // createAnother()
  // reactActualElement
)