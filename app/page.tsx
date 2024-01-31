import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

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
    <main className='flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-[#AEDADA] px-2 py-2 md:py-0 xl:px-12 2xl:gap-5 2xl:px-24'>
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
        </div>
      </div>

      <div className='bottom__block flex min-h-72 w-full flex-wrap gap-3 md:flex-nowrap 2xl:gap-5'>
        <div className='flex grow flex-col rounded-2xl bg-white px-10 py-8 md:grow-0 2xl:rounded-3xl'>
          <p className='flex justify-between text-2xl'>
            Ваше время
            <span className='text-2xl'>⚙️</span>
          </p>
          <div className='flex h-full items-center justify-center'>
            <p className='text-8xl 2xl:text-9xl'>19:10</p>
          </div>
        </div>

        <div className='flex grow flex-col gap-3 2xl:gap-5'>
          <div className='flex h-full flex-wrap justify-between gap-3 rounded-2xl bg-white px-10 py-8 md:flex-nowrap 2xl:gap-5 2xl:rounded-3xl'>
            {timeAndDate.map((item) => {
              return (
                <div key={item.name} className='w-full'>
                  <p className='pb-5 text-2xl'>{item.name}</p>
                  <input
                    placeholder={item.placeholder}
                    type={item.type}
                    className='h-16 w-full rounded-2xl bg-white p-4 text-lg ring-1 ring-[#666666] hover:ring-2 hover:ring-[#5AB9B9]  focus:outline-[#006666] 2xl:rounded-3xl 2xl:text-2xl'
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
