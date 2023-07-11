import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, ListMusic, MonitorSpeaker, Volume1, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export function Footer(){
    return(
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
    )
}