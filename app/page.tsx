import { Urbanist } from 'next/font/google'
import UserTime from './ui/userTime'
import { Suspense } from 'react'
import PickerDateTime from './ui/pickerDateTime'

const urbanist = Urbanist({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='m-auto flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-center gap-3 px-2 py-2 md:py-0 xl:px-12 2xl:gap-5 2xl:px-24'>
      <div className='flex h-auto min-w-full items-center justify-center rounded-2xl bg-white 2xl:rounded-3xl'>
        <div className='my-11 w-min md:my-28 2xl:my-32'>
          <h1
            className={`${urbanist.className} text-center text-5xl font-normal text-[#5AB9B9] sm:text-7xl md:text-8xl 2xl:text-9xl`}
          >
            LinkTimeZone
          </h1>
          <p className='text-wrap text-center text-lg 2xl:text-2xl'>
            Сервис позволяет делиться ссылкой на время с учетом каждого часового
            пояса
          </p>
          <span className='absolute right-10 top-7 text-center text-base font-black uppercase text-slate-700 opacity-70'>
            beta!
          </span>
        </div>
      </div>

      <div className='bottom__block flex min-h-72 w-full flex-wrap gap-3 md:flex-nowrap 2xl:gap-5'>
        <UserTime />
        <Suspense fallback={<div>Please pick a date and time</div>}>
          <PickerDateTime />
        </Suspense>
      </div>
    </main>
  )
}
