import BgChanger from "./bg-changer/BgChanger"
import Counter from "./counterApp_0/Counter"
import GeneratePassword from "./password-generater/GeneratePassword"

function App() {
  

  return (
    <div className="bg-black text-white">
      <Counter/>
      <BgChanger/>
      <GeneratePassword/>
    </div>
  )
}

export default App
