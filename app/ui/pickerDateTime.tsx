'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function PickerDateTime() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [timeInput, setTimeInput] = useState('')
  const [dateInput, setDateInput] = useState('')

  const handleClick = () => {
    const params = new URLSearchParams(searchParams)
    const time = new Date(dateInput + ' ' + timeInput).getTime() / 1000
    if (time) {
      params.set('t', time.toString())
    } else {
      params.delete('t')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const timeAndDate = [
    {
      name: 'Время',
      type: 'time',
      setFunction: setTimeInput,
    },
    {
      name: 'Дата',
      type: 'date',
      setFunction: setDateInput,
    },
  ]
  return (
    <div className='flex grow flex-col gap-3 2xl:gap-5'>
      <div className='flex h-full flex-wrap justify-between gap-3 rounded-2xl bg-white px-10 py-8 md:flex-nowrap 2xl:gap-5 2xl:rounded-3xl'>
        {timeAndDate.map((item) => {
          return (
            <div key={item.name} className='w-full'>
              <p className='pb-5 text-2xl'>{item.name}</p>
              <input
                onChange={(event) => item.setFunction(event.target.value)}
                type={item.type}
                className='h-16 w-full rounded-2xl bg-white p-4 text-lg ring-1 ring-[#666666] hover:ring-2 hover:ring-[#5AB9B9]  focus:outline-[#006666] 2xl:rounded-3xl 2xl:text-2xl'
              ></input>
            </div>
          )
        })}
      </div>
      <div>
        <button
          onClick={handleClick}
          className='h-auto w-full rounded-2xl bg-[#006666] py-8 text-2xl uppercase text-white  hover:bg-[#5AB9B9] 2xl:rounded-3xl'
        >
          Сгенерировать ссылку
        </button>
      </div>
    </div>
  )
}
