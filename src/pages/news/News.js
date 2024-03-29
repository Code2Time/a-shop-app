import { useState } from 'react'
import Navbarpro from '../../components/navbarpro/Navbarpro'
import './News.css'
import Newsdata from './NewsData'

function News() {
  const [ndata , setNdata] = useState(Newsdata)
  return (
    <div>
      <Navbarpro />
      <div className='rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-2 shadow-md'>
      <h1 className='col-span-12 p-3 border-r-4 border-teal-800 Lamia' >شرکت های همکار </h1>

        {ndata.map((item) => (
          <div data-aos='fade-up' key={item.id} className='col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3  text-center py-1 px-3 row-auto rounded-md mt-4'>
           <img  data-aos='flip-right' src={item.img} className='w-full h-full rounded cursor-pointer transition-all hover:-translate-y-1' />
            </div>
        ))}
      </div>
    </div>
  )
}

export default News
