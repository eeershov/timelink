'use client'

import { Urbanist } from 'next/font/google'
import UserTime from '@/app/ui/userTime'
import { Suspense } from 'react'
import { GetTimeFromLink } from '@/app/ui/getTimeFromLink'
import { useState } from 'react'

const urbanist = Urbanist({ subsets: ['latin'] })

export default function Page() {
  const [copiedLink, setCopiedLink] = useState(false)
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.toString())
    setCopiedLink(true)
  }

  return (
    <main className='m-auto flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-center gap-3 px-2 py-2 md:py-0 xl:px-12 2xl:gap-5 2xl:px-24'>
      <div className='flex h-auto min-w-full flex-col rounded-2xl bg-white px-6 py-8 md:px-10 2xl:rounded-3xl'>
        <div className='top__block w-full'>
          <UserTime tiny={true} />
        </div>
        <div className='my-11 md:my-28 2xl:my-32 '>
          <h2>Назначенные дата и время</h2>
          <p
            className={`${urbanist.className} text-left text-5xl font-normal text-[#5AB9B9] sm:text-7xl md:text-8xl 2xl:text-9xl`}
          >
            <Suspense fallback={<p>LinkTimeZone</p>}>
              <GetTimeFromLink />
            </Suspense>
          </p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className='h-auto w-full rounded-2xl bg-[#006666] py-8 text-2xl uppercase text-white  hover:bg-[#5AB9B9] 2xl:rounded-3xl'
      >
        {copiedLink ? 'Ссылка скопирована' : 'Скопировать ссылку'}
      </button>
    </main>
  )
}
