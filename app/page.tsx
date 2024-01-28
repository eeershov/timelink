import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#AEDADA] flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className='bg-white rounded-3xl max-w-screen-2xl min-w-full h-auto flex justify-center items-center'>
        <div className='my-28'>
          <h1 className='font-normal text-9xl text-center'>LinkTimeZone</h1>
          <p className='text-2xl text-center'>Сервис позволяет делиться ссылкой на время с учетом каждого часового пояса</p>
        </div>
      </div>

      <div className='bottom__block flex gap-5 w-full min-h-72'>
        <div className='bg-white rounded-3xl py-8 px-10 w-1/4 flex flex-col'>
          <p className='text-2xl flex justify-between'>
            Ваше время
            <span className='text-2xl'>⚙️</span>
          </p> 
          <div className='h-full flex items-center justify-center'>
          <p className='text-9xl'>19:10</p>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full'>
        <div className='bg-white rounded-3xl py-8 px-10 flex gap-5 h-full'>
          <p className='text-2xl'>Время</p>
          <input></input>
          <p className='text-2xl'>Дата</p>
          <input></input>
        </div>

        <div>
          <button className='bg-[#006666] rounded-3xl h-auto w-full text-2xl uppercase text-white hover:bg-[#5AB9B9] py-8'>Сгенерировать ссылку</button>
        </div>
        </div>
      </div>
    </main>
  )
}
