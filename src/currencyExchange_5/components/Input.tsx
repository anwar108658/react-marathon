

const Input = ({label,amount,onAmountChange,onCurrencyChange,currencyOpt=[],selectCurrency="usd",amountDsiable=false,currencyDisable,className = "",}:any) => {
    console.log("first",currencyOpt)
  return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none text-black w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDsiable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(parseInt(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-900 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {
                        currencyOpt && currencyOpt.map((c:any) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

export default Input