import { HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, Repeat, SkipForward, Mic2, ListMusic, MonitorSpeaker, Maximize2, Volume1 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
    return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search/>
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library/>
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Mix Melancólico</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Relaxing Songs</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">De Cria</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Musicas que Resgatei do Relacionamento Antigo</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-2">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>
          
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong>Quest For Fire</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Pedro Santos</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src='/album.jpg' width={56} height={56} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>Inhale Exhale</strong>
            <span className='text-xs text-zinc-400'>Skrillex, Aluna, Kito</span>
          </div>
          <Heart className='ml-3' width={20} height={20}/>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play fill='black'/>
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:38</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className='bg-zinc-200 w-24 h-1 rounded-full hover:bg-green-400'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:25</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <ListMusic size={20}/>
          <MonitorSpeaker size={20}/>
          <div className='flex items-center gap-1'>
            <Volume1 size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className='bg-zinc-200 w-8 h-1 rounded-full hover:bg-green-400'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  )
}
