import { useCallback, useEffect, useRef, useState } from "react"

const GeneratePassword = () => {
  const [length,setLength] = useState(50)
  const [numAllowed,setNumAllowed] = useState(true)
  const [charAllowed,setCharAllowed] = useState(true)
  const [password,setPassword] = useState("")
  const ref = useRef<any>(null)

  const passwordGenerator = useCallback(function () {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{};:',.<>/?\|`~"
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(() => {
    ref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numAllowed,charAllowed])
  
  return (
    <div className="w-full h-screen p-3">
      <div className="w-full max-w-lg flex flex-col gap-4 justify-center items-center mx-auto p-5 rounded-lg text-white bg-gray-800">
        <h1 className="text-2xl">Password Generator</h1>
        <div className="w-full flex">
          <input 
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={ref}
          onChange={(e) => setPassword(e.target.value)}
          className="flex-1 w-full rounded-tl-md rounded-bl-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none  disabled:bg-slate-50 disabled:text-slate-500"/>
          <button onClick={copyPassword} title="Copy Password" className="bg-blue-700 px-2 rounded-tr-md rounded-br-md cursor-pointer hover:bg-blue-500 transition duration-150 ease-in-out "> 🗃️</button>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1"
          >
            <label htmlFor="range" className="text-sm text-teal-500">Length : {length}</label>
            <input style={{
              cursor: `url("https://freesvg.org/img/taj-mahal-isolated.png") 4 4 , pointer`
            }} className="" type="range" id="range" min={4} max={100} value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
          </div>
          <div className="col-span-1 flex items-center">
            <label htmlFor="num" className="text-sm text-teal-500 cursor-pointer">Numbers : </label>
            <input className="ml-2 cursor-pointer" type="checkbox" id="num" checked={numAllowed} onChange={(e) => setNumAllowed(e.target.checked)} />
          </div>
          <div className="col-span-1 flex items-center">
            <label htmlFor="char" className="text-sm text-teal-500 cursor-pointer">Special Characters :</label>
            <input className="ml-2 cursor-pointer" type="checkbox" id="char" checked={charAllowed} onChange={(e) => setCharAllowed(e.target.checked)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneratePassword