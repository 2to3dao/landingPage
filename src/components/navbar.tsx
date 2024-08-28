export default function Navbar(){
    return(
        <>
        <nav>
      <div className='w-full py-3 border-b'>

        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 className="text-2xl">2TO3DAO</h1>
          </div>
          <div className='flex xl:gap-10 md:gap-8  gap-2'>
            <a href="#">Home</a>
            <a href="#">Events</a>
            <a href="#">About Us</a>
            <a href="#">Our Why</a>
            <a href="#">Academy</a>
          </div>
          <div>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold'>Contact Us</button>
          </div>
        </div>

      </div>
    </nav>
        </>
    )
}
