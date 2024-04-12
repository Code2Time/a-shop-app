import React from 'react'
import Navbarpro from '../../components/navbarpro/Navbarpro'
import './Panel.css'

function Panel() {
  return (
    <div>
    <Navbarpro />
    <div className='w-11/12 max-w-[1000px] h-auto grid grid-cols-12' >
     <h1 className='shop-title col-span-12 Lalezar mx-auto my-12 text-8xl p-2 px-4 '>چیا خریدی!؟</h1>
    </div>
    {/* <div className='shop-list w-11/12 max-w-[1000px] h-auto grid grid-cols-12'>
      <div className='shop-item col-span-12 grid grid-cols-12'>
        <img className='col-span-2' src="https://4kwallpapers.com/images/walls/thumbs_2t/15544.png" alt="shop-item" />
        <h1>اسم کالا </h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
    </div> */}
    </div>
  )
}

export default Panel
