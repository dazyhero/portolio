import { useContext, useRef } from 'react'
import s from '../styles/information.module.css'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Information: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight + halfH,
      Math.max(-screenH, scrollY - offsetTop) + halfH
    ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return <div ref={refContainer} className="bg-black text-white">
    <div className="min-h-screen max-w-5xl mx-auto px-10 md:px-20 py-24 lg:py-28 xl:py-36 flex flex-col items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
      <div className="leading-[1.15]">
        <div className={s.informationText} style={{
          opacity: opacityForForBlock(progress, 0)
        }}>
          I have 5+ years of development experience
        </div>
        <span className={`${s.informationText} inline-block after:content-['_']`} style={{
          opacity: opacityForForBlock(progress, 1)
        }} >
          Including frontend, backend and devops
        </span>
        <span className={`${s.informationText} inline-block`} style={{
          opacity: opacityForForBlock(progress, 2)
        }}>
          I have worked on highloaded projects with Facebook partners and worldwide companies
        </span>
      </div>
    </div>
  </div >
}

export default Information;
