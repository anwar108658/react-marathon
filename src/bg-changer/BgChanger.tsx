import { useState } from "react";

const colorBtn = [
{ id: 1,  btnName: "red", color: "#FF0000" },
{ id: 2,  btnName: "green", color: "#00FF00" },
{ id: 3,  btnName: "blue", color: "#0000FF" },
{ id: 4,  btnName: "yellow", color: "#FFFF00" },
{ id: 5,  btnName: "orange", color: "#FFA500" },
{ id: 6,  btnName: "purple", color: "#800080" },
{ id: 7,  btnName: "pink", color: "#FFC0CB" },
{ id: 8,  btnName: "cyan", color: "#00FFFF" },
{ id: 9,  btnName: "magenta", color: "#FF00FF" },
{ id: 10, btnName: "brown", color: "#A52A2A" },
{ id: 11, btnName: "teal", color: "#008080" },
{ id: 12, btnName: "navy", color: "#000080" },
{ id: 13, btnName: "lime", color: "#32CD32" },
{ id: 14, btnName: "gold", color: "#FFD700" },
{ id: 15, btnName: "coral", color: "#FF7F50" }
];


const BgChanger = () => {
    const [color,setColor] = useState('#000')
  return (
    <div className="relative w-full h-screen bg-gray-250 text-white flex justify-center" style={{backgroundColor:color}}>
        <div className="w-full h-fit max-w-7xl sticky top-0 p-2 rounded-lg bg-cyan-950">
            {
                colorBtn && colorBtn.length > 0 && colorBtn.map((btn) => (
                    <button onClick={() => setColor(btn.color)} className="bg-black px-3 py-1 mx-1 rounded-lg transition hover:scale-105 hover:opacity-80 cursor-pointer" style={{color:btn.color}}>{btn.btnName}</button>
                ))
            }
        </div>
    </div>
  )
}

export default BgChanger