"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import {useLang} from "./LangProvider"

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = async ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            rel="preload"
            src="/assets/folded-map.svg"
            alt="A map pattern"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="bold-18 text-white">{title}</h1>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              rel="preload"
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="member photos"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  const { getLang } = useLang();
  return getLang.then((lang:any) => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title={lang('campTitle')}
          subtitle={lang('campSubtitle')}
          peopleJoined={lang('peopleJoinedJson')}
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title={lang('campTitle2')}
          subtitle={lang('campSubtitle2')}
          peopleJoined={lang('peopleJoinedJson')}
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div id="DoYouWantToGetMarried" className="bg-green-50 p-8 lg:max-w-[500px) xl:max-w-[734px) xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl anothashadow">
          <h1 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
          {lang('campMotivation')} <strong>{lang('campMotivation2')}</strong> {lang('campMotivation3')}
          </h1>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
          {lang('campSubMotivation')} <strong className="text-black underline italic">{lang('campSubMotivation2')}</strong>, {lang('campSubMotivation3')}
          </p>
          <Image 
            rel="preload"
            src="/assets/quote.svg"
            alt="quote icon"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
})
}

export default Camp