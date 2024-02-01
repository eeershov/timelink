'use client'

import { useSearchParams } from 'next/navigation'

export function GetTimeFromLink() {
  const searchParams = useSearchParams()
  const dateString = searchParams.get('t')

  if (!dateString) {
    return
  }

  const regex = /-?\d{0,12}/
  const matchedString = dateString.match(regex)

  if (!matchedString) {
    return
  }

  const date = new Date(parseInt(matchedString[0]) * 1000)

  return (
    <>
      {`${date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      })} • ${date.toLocaleDateString('ru-RU')}`}
    </>
  )
}
