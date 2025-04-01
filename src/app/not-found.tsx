import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <h2 className='font-bold text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className=''>
        <img className='h-[200px] sm:h-full' src='https://media.istockphoto.com/id/1042953166/pt/vetorial/broken-vacuum-cleaner-damaged-home-appliance-vector-illustration-on-a-white-background.jpg?s=170667a&w=0&k=20&c=248hz1RkIgCkrejaeXKLSyLbM4lxYlpJpbQF1I8QQbw='></img>
      </div>
      <Link className='border rounded-full px-4 py-1 border-black sm:-mt-16' href="/">Return Home</Link>
    </div>
  )
}