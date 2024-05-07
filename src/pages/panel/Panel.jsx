import React from 'react'
import Navbarpro from '../../components/navbarpro/Navbarpro'
import { LiaOpencart } from "react-icons/lia";
import './Panel.css'
import Footer from '../../components/footer/Footer';

function Panel() {
  return (
    <div>
    <Navbarpro />
    <div className='cart-container w-11/12 max-w-[1100px] mx-auto my-20 h-auto shadow rounded-2xl grid grid-cols-12 gap-3 p-3'>
      <div className='col-span-12 flex justify-between'>
      <h1 className='Lamia my-3 mx-4 border-r-4 border-gray-700 px-2'>سبد خرید</h1>
      <iframe src="https://giphy.com/embed/WG66KksPH65sFeQvZh" width="60" height="60" className="rounded-s-full" ></iframe>
      </div>
      <div className='cart-item2 col-span-12 sm:col-span-8  grid grid-cols-12  p-10 gap-4'>
      <div className='col-span-12 sm:col-span-4'>
          <img src="https://4kwallpapers.com/images/walls/thumbs/13276.jpeg" className='rounded-sm hover:cursor-pointer transition-all hover:-translate-y-1' />
        </div>
        <div className='col-span-12 sm:col-span-5 flex justify-between items-center'>
          <h1 className='Lamia'>اسم محصول</h1>
          <p>لورم ایپس.ن متن ساختگی .....</p>
        </div>
        <div className='col-span-12 sm:col-span-3 flex justify-center items-center'>
          <button className='text-2xl transition-all hover:bg-lime-800 rounded-full p-3 bg-slate-200'>+</button>
          <h1 className='m-2 text-xl border p-3 rounded-md'>1</h1>
          <button className='text-2xl transition-all hover:bg-red-700 rounded-full p-3 bg-slate-200'>-</button>
        </div>
        <hr className='col-span-12' />
        <div className='col-span-12 sm:col-span-4'>
          <img src="https://4kwallpapers.com/images/walls/thumbs/13276.jpeg" className='rounded-sm hover:cursor-pointer transition-all hover:-translate-y-1' />
        </div>
        <div className='col-span-12 sm:col-span-5 flex justify-between items-center'>
          <h1 className='Lamia'>اسم محصول</h1>
          <p>لورم ایپس.ن متن ساختگی .....</p>
        </div>
        <div className='col-span-12 sm:col-span-3 flex justify-center items-center'>
          <button className='text-2xl transition-all hover:bg-lime-800 rounded-full p-3 bg-slate-200'>+</button>
          <h1 className='m-2 text-xl border p-3 rounded-md'>1</h1>
          <button className='text-2xl transition-all hover:bg-red-700 rounded-full p-3 bg-slate-200'>-</button>
        </div>
        <hr className='col-span-12' />
        <div className='col-span-12 sm:col-span-4'>
          <img src="https://4kwallpapers.com/images/walls/thumbs/13276.jpeg" className='rounded-sm hover:cursor-pointer transition-all hover:-translate-y-1' />
        </div>
        <div className='col-span-12 sm:col-span-5 flex justify-between items-center'>
          <h1 className='Lamia'>اسم محصول</h1>
          <p>لورم ایپس.ن متن ساختگی .....</p>
        </div>
        <div className='col-span-12 sm:col-span-3 flex justify-center items-center'>
          <button className='text-2xl transition-all hover:bg-lime-800 rounded-full p-3 bg-slate-200'>+</button>
          <h1 className='m-2 text-xl border p-3 rounded-md'>1</h1>
          <button className='text-2xl transition-all hover:bg-red-700 rounded-full p-3 bg-slate-200'>-</button>
        </div>
        <hr className='col-span-12' />
        <div className='col-span-12 sm:col-span-4'>
          <img src="https://4kwallpapers.com/images/walls/thumbs/13276.jpeg" className='rounded-sm hover:cursor-pointer transition-all hover:-translate-y-1' />
        </div>
        <div className='col-span-12 sm:col-span-5 flex justify-between items-center'>
          <h1 className='Lamia'>اسم محصول</h1>
          <p>لورم ایپس.ن متن ساختگی .....</p>
        </div>
        <div className='col-span-12 sm:col-span-3 flex justify-center items-center'>
          <button className='text-2xl transition-all hover:bg-lime-800 rounded-full p-3 bg-slate-200'>+</button>
          <h1 className='m-2 text-xl border p-3 rounded-md'>1</h1>
          <button className='text-2xl transition-all hover:bg-red-700 rounded-full p-3 bg-slate-200'>-</button>
        </div>
        <hr className='col-span-12' />
      </div>
      <div className='cart-item1 col-span-12 sm:col-span-4 sm:border-r-2 grid grid-cols-12m p-5'>
        <div className='col-span-12 flex flex-row-reverse justify-center items-start' >
          <h1 className='Lamia text-center mx-1'>صورت حساب</h1>
          <span><LiaOpencart size={20} /></span>
        </div>
        <div className='col-span-12'>
        <ul className='list-decimal '>
          <li className='Lalezar'>سرخکن</li>
          <li className='Lalezar'>هودی</li>
          <li className='Lalezar'>ماهی تابه </li>
          <li className='Lalezar'>میخکوب</li>
        </ul>
        </div>
        <div className='col-span-12'>
          <h1 className='Lamia'>  مجموع سفارش : <span>120$</span></h1>
        </div>
        <div className='col-span-12'>
          <button className='fine-btn w-full Lalezar'>نهایی کردن خرید</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  ) 
}

export default Panel
