'use client'

import { useState, useEffect } from 'react'

const UserTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex grow flex-col rounded-2xl bg-white px-10 py-8 md:grow-0 2xl:rounded-3xl'>
      <p className='flex justify-between text-2xl'>
        Ваше время
        {/* <span className='text-2xl'>⚙️</span> */}
      </p>
      <div className='flex h-full items-center justify-center'>
        <p className='font-mono text-7xl sm:text-8xl 2xl:text-9xl'>
          {time.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  )
}

export default UserTime
