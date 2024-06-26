'use client'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
import NextEventPopup from '@/modules/next-event/components/popup'

interface NextEventCountDownProps {
  date: string
}

export default function NextEventCountDown({date}: NextEventCountDownProps) {
  const [countDown, setCountDown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const updateCountDown = () => {
    const curDate = dayjs()
    const desDate = dayjs(date)

    const diffInMilliseconds = desDate.diff(curDate)
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000)
    const seconds = `${diffInSeconds % 60}`.padStart(2, '0')

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    const minutes = `${diffInMinutes % 60}`.padStart(2, '0')

    const diffInHours = Math.floor(diffInMinutes / 60)
    const hours = `${diffInHours % 24}`.padStart(2, '0')

    const days = `${Math.floor(diffInHours / 24)}`.padStart(2, '0')

    setCountDown({days, hours, minutes, seconds})
  }

  useEffect(() => {
    const timer = setInterval(updateCountDown, 1000)
    return () => clearInterval(timer)
  }, [date])

  return (
    <>
      <NextEventPopup date={date} countDown={countDown} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">{countDown.days}</div>
        <div className="text-2xl">DAY</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">{countDown.hours}</div>
        <div className="text-2xl">HOUR</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">{countDown.minutes}</div>
        <div className="text-2xl">MINUTE</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">{countDown.seconds}</div>
        <div className="text-2xl">SECOND</div>
      </div>
    </>
  )
}
