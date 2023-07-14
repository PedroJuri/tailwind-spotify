import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
    return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className="hidden md:flex lg:flex items-center gap-2">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>
          
          <h1 className='font-semibold text-xl lg:text-3xl mt-2 lg:mt-10 md:text-2xl md:mt-5'>Good Afternoon</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-4 hover:bg-white/10 transition-colors'>
              <Image className='w-10 h-auto md:w-16 md:h-auto lg:w-28 lg:h-auto' src='./album.jpg' width={104} height={104} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='text-xs lg:text-base'>Quest For Fire</strong>
              <button className='hidden invisible group-hover:visible lg:w-12 lg:h-12 md:w-6 md:h-6 md:flex lg:flex items-center justify-center lg:pl-1 md:pl-0.5 rounded-full bg-green-400 text-black ml-auto lg:mr-8 md:mr-4'>
                <Play className='lg:w-6 lg:h-6 md:w-3 md:h-3' fill='black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-lg lg:text-2xl md:text-xl mt-10'>Made for Pedro Santos</h2>
          <div className='grid lg:grid-cols-5 grid-cols-2 gap-4 mt-4'>
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='./album.jpg' className='w-full md:w-auto md:h-auto' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold lg:text-base md:text-sm'>Daily Mix 1</strong>
              <span className='lg:text-sm md:text-xs text-zinc-400 truncate'>Zedd, Nora en Pure, Avicii and more</span>
            </a>
            <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='./album.jpg' className='w-full md:w-auto md:h-auto' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold lg:text-base md:text-sm'>Daily Mix 1</strong>
              <span className='lg:text-sm md:text-xs text-zinc-400 truncate'>Zedd, Nora en Pure, Avicii and more</span>
            </a>
            <a href='#' className="md:hidden lg:flex flex bg-white/5 p-2 rounded-md flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='./album.jpg' className='w-full md:w-auto md:h-auto' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold lg:text-base md:text-sm'>Daily Mix 1</strong>
              <span className='lg:text-sm md:text-xs text-zinc-400 truncate'>Zedd, Nora en Pure, Avicii and more</span>
            </a>
            <a href='#' className="md:hidden lg:flex flex bg-white/5 p-2 rounded-md flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='./album.jpg' className='w-full md:w-auto md:h-auto' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold lg:text-base md:text-sm'>Daily Mix 1</strong>
              <span className='lg:text-sm md:text-xs text-zinc-400 truncate'>Zedd, Nora en Pure, Avicii and more</span>
            </a>
            <a href='#' className="hidden lg:flex bg-white/5 p-2 rounded-md flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image src='./album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum 'Quest for Fire' de Skrillex"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='lg:text-sm text-zinc-400 truncate'>Zedd, Nora en Pure, Avicii and more</span>
            </a> 
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
