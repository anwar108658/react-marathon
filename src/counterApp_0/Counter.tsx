import { useState } from "react"

const Counter = () => {

  // let counter = 1

  // const addVal = () => {
  //   counter = counter+1
  //   console.log(counter)
  // } this function work well and value change in counter variable but they don't propagate value in actual dom


  const [counter2,setCounter2] = useState(15)

  const addVal2 = () => {
    if (counter2 < 20) {
      setCounter2(counter2+1)
    }else{
      alert("Do not waste your time")
    }
  }
  const removeVal2 = () => {
    if (counter2 > 0) {
      setCounter2(counter2-1)
    }
  }
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl">Basic  Counter App</h1>
        <p className="text-cyan-500 text-lg">Counter value: {counter2}</p>
        <div className="flex gap-2">
          <button onClick={addVal2} className="bg-green-900 px-2 py-1 rounded-lg text-sm cursor-pointer hover:bg-green-800 transition-all duration-500">Add value ➕</button>
          <button onClick={removeVal2} className="bg-pink-950 px-2 py-1 rounded-lg text-sm cursor-pointer hover:bg-red-800 transition-all duration-500">Remove value ⚠️</button>
        </div>
      </div> 
    </div>
  )
}

export default Counter