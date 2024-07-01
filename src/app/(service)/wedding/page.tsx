import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import ClientCard from '../../../modules/card/template/client'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import Consultant from '@/modules/services/components/consultant'
import {iannDog} from '@/styles/fonts'
import {weddingService} from '@/lib/data/wedding.service'
import {IMenu} from '@/lib/data/models/navbar'
import FlasksIcon from '@/modules/common/images/flasks'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'
import {eventService} from '@/lib/data/event.service'

export default async function Page() {
  const panels = [
    '101 wedding guide',
    '',
    'our package',
    '',
    'quick consult',
    '',
    'our client’s review',
  ]

  const [{data: pageData}, {data: events}] = await Promise.all([
    weddingService.getPageData(),
    eventService.get({}),
  ])

  return (
    <>
      {/* <div className="max-w-[2040px] w-full flex-row flex flex-nowrap gap-4 justify-evenly items-center text-center mx-auto p-4">
          {panels.map((panel, i) =>
            i % 2 !== 0 ? (
              i !== panels.length - 1 && <div key={i} className="w-[2px] h-6 bg-black" />
            ) : (
              <div key={i}>{panel}</div>
            )
          )}
        </div> */}
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
      <div className="max-w-[2040px] w-full justify-center flex-col flex items-center mx-auto gap-4">
        <div className="w-full h-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-8">
          <div className="max-w-[90%] md:max-w-[60%] lg:h-full flex-col flex items-center text-3xl text-center gap-4">
            <div className="text-2xl md:text-3xl font-semibold uppercase">
              {pageData.header.heading}
            </div>
            <div className={`text-2xl md:text-3xl ${iannDog.className} w-full`}>
              {pageData.header.subheading}
            </div>
            <div className="flex-row flex items-center flex-nowrap gap-4 text-3xl md:text-4xl text-center my-16">
              <FlasksIcon className="max-w-[100px] max-h-[100px] w-full h-full" />
              {pageData.detailsTitle}
              <FlasksIcon className="max-w-[100px] max-h-[100px] w-full h-full" />
            </div>
          </div>
          <SmartPhoneImage className="max-w-[250px] flex-1 h-full" />
        </div>
        <div className="max-w-[90%] w-full flex-col flex xl:mt-[-8rem] 2xl:mt-[-10rem]">
          {pageData.details.map((e, i) => (
            <ServiceContentCard key={i} index={i} data={e} />
          ))}
        </div>
        <ContactFlasksButton
          title={pageData.packagesTitle.buttonTitle}
          linkTo={pageData.packagesTitle.linkTo}
          bgColor="#E8C85E"
        />
        <div className="w-full flex-row flex md:flex-nowrap flex-wrap gap-4 text-center my-8">
          {pageData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-1 min-w-[300px] flex-col flex items-center gap-8 relative"
            >
              <Image
                removeWrapper
                className="max-w-[400px] max-h-[300px] w-full h-full"
                src={pkg.mediaUrl}
                alt={pkg.alt}
              />
              <div className="font-bold text-2xl">{pkg.heading}</div>
              <div className={`${iannDog.className} text-xl max-w-[600px]`}>{pkg.subheading}</div>
            </div>
          ))}
        </div>
      </div>
      <Consultant />
      <div className="max-w-[2040px] flex flex-col w-full mx-auto px-10">
        <div className="uppercase text-4xl my-2 mt-8">our clients</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {events.map((c, i) => (
            <ClientCard data={c} key={i} withDetail />
          ))}
        </div>
      </div>
      <div className="mb-10" />
    </>
  )
}
