'use client'
import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import FlasksIcon from '@/modules/common/images/flasks'
import AffordableFunIcon from '@/modules/common/images/service/affordable-fun'
import ExploreVarietyWinesIcon from '@/modules/common/images/service/explore-variety-wines'
import WineByGlassIcon from '@/modules/common/images/service/wine-by-glass'
import {iannDog} from '@/styles/fonts'
import {IEvent, PopUpBooth} from '@/lib/data/models/common'
import {useEffect, useState} from 'react'
import {popUpBoothService} from '@/lib/data/booth.service'
import {IMenu} from '@/lib/data/models/navbar'

export default function Booth() {
  const content = [
    {
      heading: 'Wine by the Glass',
      image: <WineByGlassIcon />,
      maxWidth: '70%',
      subheading: 'เปิดโลกไวน์ได้โดยไม่ต้องเปิดขวด เปิดแค่ใจแล้วชิมไวน์เป็นแก้วกับเรา',
    },
    {
      heading: 'Explore a Variety of Wines',
      image: <ExploreVarietyWinesIcon />,
      maxWidth: '600px',
      subheading:
        'จัดมาให้กับ ไวน์หลากหลายประเภท ทั้ง Sparkling , White , Rosé and Red ต่างรส ต่างองุ่น จากหลากหลายประเทศ ให้ทุกคนได้ค้นหาไวน์ที่ตัวเองชอบ',
    },
    {
      heading: 'Affordable Fun',
      image: <AffordableFunIcon />,
      maxWidth: '80%',
      subheading: 'ไวน์คุณภาพดี ราคาเป็นกันเอง สนุกกับไวน์ได้ สบายกระเป๋าด้วย ',
    },
  ]

  const [pageData, setPageData] = useState<PopUpBooth>()

  const getData = async () => {
    const {data: collaborations} = await popUpBoothService.getPopUpBooth()
    if (collaborations) {
      setPageData({
        ...collaborations,
        details: content.map((c, i) => ({
          ...c,
          subheading: collaborations.details[i].subheading,
          heading: collaborations.details[i].heading,
        })),
      })
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    pageData && (
      <>
        <div className="w-full justify-center flex-col flex items-center mx-auto">
          <Carousel
            elements={pageData.banner.map((b: IMenu) => (
              <Image
                key={b.id}
                removeWrapper
                className="max-h-[70vh] w-full rounded-none object-cover"
                src={b.mediaUrl}
                alt={b.alt}
              />
            ))}
            slidesPerView={1}
            arrowColor="white"
            gap={0}
          />
          <div className="w-full flex-col flex items-center justify-center mt-8 relative">
            <FlasksIcon width={100} height={100} className="absolute left-10 top-4" />
            <div className="text-[78px] font-semibold uppercase">{pageData.header.heading}</div>
            <div className={`text-[48px] ${iannDog.className}`}>{pageData.header.subheading}</div>
          </div>
          <div className="w-[90%] flex-col flex mt-8">
            {pageData.details.map((e, i) => (
              <div
                key={i}
                className={`flex-row flex items-center gap-4 ${
                  i === 1 ? 'justify-end ml-auto' : ''
                }`}
              >
                <div className="max-h-[270px]">{e.image}</div>
                <div className="flex-col flex">
                  <div className="text-[44px] uppercase">{e.heading}</div>
                  <div
                    className={`${iannDog.className} text-[27px]`}
                    style={{maxWidth: e.maxWidth}}
                  >
                    {e.subheading}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-row flex items-center justify-center gap-10">
            <div className={`text-[44px] max-w-[640px] ${iannDog.className}`}>
              {pageData.cta.heading}
            </div>
            <button className="uppercase border border-black bg-[#81CF8A] px-4 py-1 text-[48px] rounded-full">
              {pageData.cta.buttonTitle}
            </button>
          </div>
          <div className="mb-10" />
        </div>
      </>
    )
  )
}
