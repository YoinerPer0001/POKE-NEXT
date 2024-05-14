'use client'
import { useState } from "react"

export const CartCounter = () => {
    const [counter, setcounter] = useState(0)

    const increment = () => {
      setcounter(counter + 1)
    }
    const decrement = () => {
      if(counter > 0) setcounter(counter - 1)
      else return
    }
    return (
      <div className="p-2 flex flex-grow justify-center items-center">
        <div className=" flex flex-col text-center">
          <span>Productos en el carrito</span>
          <span className="text-9xl">{counter}</span>
          <div className="flex justify-center items-center">
            <button onClick={increment} className=" mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+1</button>
            <button onClick={decrement} className="mx-1 bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">-1</button>
          </div>
        </div>
      </div>
    );
}
