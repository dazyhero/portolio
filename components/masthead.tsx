import Image from "next/image";
import { useCallback, useContext, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <div ref={refContainer} style={{ transform: `translate-y(-${progress * 20}vh)` }} className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="assets/masthead-bg.mp4" type="video/mp4" />
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image src="/assets/pfp.jpeg" width={128} height={128} className="rounded-full" onLoad={handleImageLoaded} />
      </div>
      <div className="p-12 font-bold text-center z-10 text-white drop-shadow-md flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Zayets Mykyta</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">Software Developer</h2>
      </div>
      <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <Image src="/assets/down-arrow.svg" width={188 / 3} height={105 / 3} onLoad={handleImageLoaded} />
      </div>
    </div >
  )
}

export default Masthead;
