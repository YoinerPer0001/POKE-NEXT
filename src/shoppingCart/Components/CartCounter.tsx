'use client'
import { useAppSelector } from "@/store";
import { addOne, subOne } from "@/store/counter/slice/CounterSlice";
import { useState } from "react"
import { useDispatch } from "react-redux";

export const CartCounter = () => {
    const valor = useAppSelector(state => state.Counter.count);
    const dispatch = useDispatch();
    return (
      <div className="p-2 flex flex-grow justify-center items-center">
        <div className=" flex flex-col text-center">
          <span>Productos en el carrito</span>
          <span className="text-9xl">{valor}</span>
          <div className="flex justify-center items-center">
            <button onClick={()=>dispatch(addOne())} className=" mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+1</button>
            <button onClick={()=>dispatch(subOne())} className="mx-1 bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">-1</button>
          </div>
        </div>
      </div>
    );
}
