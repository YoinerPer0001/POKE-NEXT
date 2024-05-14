import { Sidebar } from '@/components/Sidebar'
import Link from 'next/link'

export default function NotFound() {
  return (



    <main className="w-full h-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Pokemon not found
      </div>
      <button className="mt-5 relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">

        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

      </button>
    </main>


  )
}