// import Image from 'next/image'

export default function Home() {
  const timeAndDate = [
    {
      name: 'Время',
      placeholder: '12:34:56',
      type: 'time',
    },
    {
      name: 'Дата',
      placeholder: '25 . 01 . 2024',
      type: 'date',
    },
  ]

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-3 bg-[#AEDADA] 2xl:gap-5 2xl:p-24'>
      <div className='flex h-auto min-w-full max-w-screen-2xl items-center justify-center rounded-2xl bg-white 2xl:rounded-3xl'>
        <div className='my-28 w-min 2xl:my-32'>
          <h1 className='text-center text-8xl font-normal text-[#5AB9B9] 2xl:text-9xl'>
            LinkTimeZone
          </h1>
          <p className='text-wrap text-center text-lg 2xl:text-2xl'>
            Сервис позволяет делиться ссылкой на время с учетом каждого часового
            пояса
          </p>
        </div>
      </div>

      <div className='bottom__block flex min-h-72 w-full gap-3 2xl:gap-5'>
        <div className='flex w-1/4 flex-col rounded-2xl bg-white px-10 py-8 2xl:rounded-3xl'>
          <p className='flex justify-between text-2xl'>
            Ваше время
            <span className='text-2xl'>⚙️</span>
          </p>
          <div className='flex h-full items-center justify-center'>
            <p className='text-8xl 2xl:text-9xl'>19:10</p>
          </div>
        </div>

        <div className='flex w-full flex-col gap-3 2xl:gap-5'>
          <div className='flex h-full justify-between gap-3 rounded-2xl bg-white px-10 py-8 2xl:gap-5 2xl:rounded-3xl'>
            {timeAndDate.map((item) => {
              return (
                <div key={item.name} className='w-full'>
                  <p className='pb-5 text-2xl'>{item.name}</p>
                  <input
                    placeholder={item.placeholder}
                    type={item.type}
                    className='h-16 w-full rounded-2xl bg-white p-4 text-lg ring-1 ring-black 2xl:rounded-3xl 2xl:text-2xl'
                  ></input>
                </div>
              )
            })}
          </div>
          <div>
            <button className='h-auto w-full rounded-2xl bg-[#006666] py-8 text-2xl uppercase text-white  hover:bg-[#5AB9B9] 2xl:rounded-3xl'>
              Сгенерировать ссылку
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
