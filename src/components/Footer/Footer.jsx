import Image from "next/image";
import { Icons } from "@/components/Icons";

export default function Footer(){
  return(
    <section className="bg-gradient-to-bl !min-h-fit from-[#002349] to-[#00a9e9] z-10 relative flex flex-col gap-5 pb-10 justify-center items-center">
      <div className="flex justify-center items-center">
        <Image 
          src={'/logo-white.png'}
          width={500}
          height={100}
          priority quality={75}
          className="w-full max-w-[350px] my-10 h-auto"
        />
      </div>
      <div className="flex items-center gap-2">
        <Icons.Instagram className={'size-6 text-white'}/>
        <Icons.FacebookFill className={'size-6 text-white'}/>
        <Icons.YouTubeFill className={'size-6 text-white'}/>
        <Icons.TikTokFill className={'size-6 text-white'}/>
      </div>
      <hr className="w-full h-[1px] bg-white"/>
      <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 text-sm py-10 px-5">
        <div className="w-full h-fit flex gap-5 justify-center">
          <div className="flex flex-col gap-1 border-l border-white pl-3">
            <p>Cultura</p>
            <p>Tendencias</p>
            <p>Salud</p>
            <p>Bienestar</p>
          </div>
          <div className="flex flex-col gap-1 border-l border-white pl-3">
            <p>Hablemos de...</p>
            <p>Nutrición</p>
            <p>Entrevista con...</p>
            <p>TI/Innovación</p>
          </div>
          <div className="flex flex-col gap-1 border-l border-white pl-3">
            <p>Ciencia Lo-K</p>
            <p>Top News</p>
            <p>Top Guía</p>
          </div>
        </div>
        <div className="w-[500px] flex flex-col justify-center gap-5 items-start">
          <div className="flex gap-2 w-full items-start">
            <Icons.LocationFill className={'size-6 text-white'}/>
            <div className="flex flex-col gap-1 w-full">
              <p>5 Sur 3112,</p>
              <p>Col. Chulavista</p>
              <p>C.P. 72420,Puebla, Pue.</p>
            </div>
          </div>
          <div className="flex gap-2 w-full items-start">
            <Icons.EmailFill className={'size-6 text-white'}/>
            <div className="flex flex-col gap-1 w-full">
              <a href="mailto:hola@topschool.mx">hola@topschool.mx</a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-xs w-full text-center max-w-[1000px] mx-auto">
        © 2024 TOP SCHOOL, LLC. All Rights Reserved. Use of this site constitutes acceptance of our Terms of Service, Privacy Policy (Your Privacy Rights) and Do Not Sell or Share My Personal Information. TOP SCHOOL may receive compensation for some links to products and services on this website. Offers may be subject to change without notice.
      </p>
    </section>
  )
}