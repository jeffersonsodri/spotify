
import { ChevronLeftCircle, ChevronRightCircle, Home as HomeIcon, Library, Play, Search } from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col" >
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-6'>
            <a href="" className="flex items-center gap-3 text-xs font-semibold ">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold">
              <Library />
              Library
            </a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-r-zinc-800 flex flex-col gap-3">
            <a href="" className='text-sm text-zinc-600' >PlayList 1</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 2</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 3</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 4</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 5</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 6</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 7</a>
            <a href="" className='text-sm text-zinc-600' >PlayList 8</a>
          </nav >

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <ChevronLeftCircle className='w-6 h-6 rounded-full bg-black'></ChevronLeftCircle>
            <ChevronRightCircle className='w-6 h-6 rounded-full bg-black'></ChevronRightCircle>
          </div>

          <h1 className='font-bold text-4xl mt-8'>Good Afternoon</h1>
          <div className='grid grid-cols-3 mt-5 gap-4'>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
              <button className='rounded-full bg-green-600 border-r-amber-500 text-black'>
                <Play/>
              </button>

            </a>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
            </a>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
            </a>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
            </a>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
            </a>
            <a href="#" className='flex flex-row bg-white/10 rounded overflow-hidden  hover:bg-white/20 transition-colors'>
              <Image  
              src="/Tardizinha.jpg" 
              width={80}
              height={80}
              alt='Capa do album Tardizinha' />
              <span className=' pl-5 flex  content-center items-center flex-1 font-bold' >Tardizinha</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
