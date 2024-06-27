'use client'
import {useEffect, useState} from 'react'

import {Image} from '@nextui-org/react'
import {workshopService} from '@/lib/data/workshop.service'
import {iannDog} from '@/styles/fonts'

import Carousel from '../../../modules/carousel/template'
import Comments from '@/modules/services/components/comments'
import Way1O1Icon from '@/modules/common/images/service/way-1o1'
import WorkShopCard from '../../../modules/card/template/workshop'
import BeginnerFriendlyIcon from '@/modules/common/images/service/beginner-friendly'
import ExploreTastebudsIcon from '@/modules/common/images/service/explore-tastebuds'
import CreateWineProfileIcon from '@/modules/common/images/service/create-wine-profile'
import EnjoyBeingYourselfIcon from '@/modules/common/images/service/enjoy-being-yourself'
import {Workshop} from '@/lib/data/models/workshop'
import WineProfileWorkshopHeader from '@/modules/header/components/workshop'

export default function WineProfileWorkshop() {
  const banners = [
    <Image
      key="1"
      removeWrapper
      className="max-h-[70vh] w-full rounded-none object-cover"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
    <Image
      key="2"
      removeWrapper
      className="max-h-[70vh] w-full rounded-none object-cover"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
  ]
  const data = [
    {
      name: '101 beginner friendly',
      image: <BeginnerFriendlyIcon />,
      maxWidth: 440,
      description:
        'เหมาะสำหรับมือใหม่ Beginner Friendly ไม่เป็นก็เริ่มได้ เรียนรู้พื้นฐานไวน์ เริ่มจาก 0 ง่ายกว่านี้ไม่มีแล้ว',
    },
    {
      name: 'explore your tastebuds',
      image: <ExploreTastebudsIcon />,
      maxWidth: 600,
      description:
        'เพราะอร่อยแต่ละคนไม่เหมือนกัน เราจัดมาให้กับ ไวน์ 4 ประเภท 7 ขวด ต่างรส ต่างองุ่น จากหลากหลายประเทศ ให้ทุกคนได้ลองและค้นหาไวน์ที่ตัวเองชอบ',
    },
    {
      name: 'create your wine profile',
      image: <CreateWineProfileIcon />,
      maxWidth: 460,
      description: 'เลิกงงเวลาเลือกซื้อไวน์ ทำ wine profile ของตัวเอง ครั้งหน้ารู้เลยต้องสั่งยังไง',
    },
    {
      name: 'enjoy being yourself',
      image: <EnjoyBeingYourselfIcon />,
      maxWidth: 450,
      description:
        'บรรยากาศเหมือนนั่งชิมกับเพื่อน ปิดมู้ดการชิมไวน์แบบซีเรียส Workshop บรรยากาศ สนุก เป็นกันเอง',
    },
  ]

  const [pageData, setPageData] = useState<Workshop[]>([])

  const comments = [
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
    'คือมันกินที่งานแต่งพี่ช้างละชอบ บอกจะสั่งๆให้กุถามราคามึงแต่คือมันไม่สั่งซะที',
  ]

  const splitArray = (arr: string[]): string[][] => {
    return arr.reduce((acc, curr, index) => {
      if (index % 4 === 0) {
        acc.push(arr.slice(index, index + 4))
      }
      return acc
    }, [] as string[][])
  }

  const getData = async () => {
    const {data: workshop} = await workshopService.getWorkshop()
    if (data) {
      setPageData(workshop)
    }
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
      <div className="w-full justify-center flex-col flex items-center mx-auto">
        <Carousel elements={banners} slidesPerView={1} arrowColor="white" gap={0} />
        {pageData[0] && <WineProfileWorkshopHeader thumbnail={pageData[0].videos} />}
        <div className="w-[90%] flex-col flex mt-4">
          <Way1O1Icon className="mx-auto" />
          {data.map((e, i) => (
            <div
              key={i}
              className={`flex-row flex items-center gap-4 ${i % 2 !== 0 ? 'justify-end' : ''}`}
            >
              <div className="max-h-[280px]">{e.image}</div>
              <div className="flex-col flex">
                <div className="text-[44px] uppercase">{e.name}</div>
                <div className={`${iannDog.className} text-[27px]`} style={{maxWidth: e.maxWidth}}>
                  {e.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full pl-10">
          <div className="uppercase text-[36px] my-2">our workshop</div>
          <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
            {pageData.map((ws, i) => (
              <WorkShopCard key={i} data={ws} />
            ))}
          </div>
        </div>
        <div className="uppercase text-[60px] my-4">how people talk about us</div>
        <div className="w-[90%]">
          <Carousel
            elements={splitArray(comments).map((e, i) => (
              <Comments key={i} comments={e} />
            ))}
            slidesPerView={1}
            gap={0}
          />
        </div>
        <div className="mb-10" />
      </div>
  )
}
