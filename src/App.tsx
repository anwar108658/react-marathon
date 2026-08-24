import BgChanger from "./bg-changer/BgChanger"
import Counter from "./counterApp_0/Counter"
import Currency from "./currencyExchange_5/Currency"
import GeneratePassword from "./password-generater/GeneratePassword"

function App() {
  

  return (
    <div className="bg-black text-white">
      <Counter/>
      <BgChanger/>
      <GeneratePassword/>
      <Currency/>
    </div>
  )
}

export default App
