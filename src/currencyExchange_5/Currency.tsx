import { useState } from "react"
import useCurrencyInfo from './hooks/useCurrencyInfo.ts'
import Input from "./components/Input.tsx"

const Currency = () => {
    const [amount,setAmount] = useState(300)
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("pkr")
    const [convertedAmount,setConvertedAmount] = useState("")

    const currencyInfo = useCurrencyInfo(from)
    console.log(currencyInfo,"info")

    const options = Object.keys(currencyInfo) || []

    const swap = () => {
      setFrom(to)
      setTo(from )
    }
    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieeO_U823M9XD50OxOp-y2_Zy4mPDInq_AHQfEkRfb2G4RZfwXbv7MAN1&s=10')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                              label="From"
                              
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Currency