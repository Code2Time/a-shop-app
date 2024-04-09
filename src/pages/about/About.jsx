import React from "react";
import Navbarpro from "../../components/navbarpro/Navbarpro";
import Footer from '../../components/footer/Footer'

function About() {
  return (
    <div data-aos='fade-up'>
      <Navbarpro />
      <div className="about-section-container w-11/12 max-w-[900px] h-auto shadow-sm mx-auto mt-10 grid grid-cols-12 my-9 ">
          <div className=" col-span-12 sm:col-span-6 sm:mt-10  grid grid-cols-12 ">
            <h1 className="col-span-12 Lamia border-b-2 border-red-600">داستان ما</h1>
            <p className="col-span-12 text-justify p-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
          <div className="col-span-12 sm:col-span-6  p-20">
            <img className="w-full h-full rounded shadow-sm transition-all hover:cursor-pointer hover:scale-110" src="https://img.freepik.com/free-photo/colleagues-office-holding-hands-each-other_171337-6883.jpg?t=st=1712659858~exp=1712663458~hmac=83ddb81fff05eb5d4ec6cf7eb2288955e52aa620bb0d52bc10ed7aeb0dc4a628&w=740" alt="team-work img" />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
