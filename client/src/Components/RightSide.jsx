

const RightSide = () => {
  return (
    <div className=" h-screen flex flex-col justify-between border-r-gray-500 border-solid border-r-[1px] w-12 sm:w-16 md:w-20 lg:w-24 sm:hover:w-18 md:hover:w-32 lg:hover:w-52 transition-all duration-300">
    {/* Main Section */}
    <div className="flex flex-col gap-3 justify-center mt-32">
  
      <div className="relative group">
        <img
          alt="Battlefield 5"
          src="/images/side-menu/bf5.png"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Battlefield 5
        </span>
      </div>
     
      <div className="relative group">
        <img
          alt="Battlefield 1"
          src="/images/side-menu/bf1.png"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Battlefield 1
        </span>
      </div>
   
      <div className="relative group border-l-2 border-yellow-700">
        <img
          alt="Battlefield 4"
          src="/images/side-menu/bf4.png"
          className="ml-5 size-7 h-full opacity-70 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Battlefield 4
        </span>
      </div>
     
      <div className="relative group">
        <img
          alt="Hardline"
          src="/images/side-menu/hardline.png"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hardline
        </span>
      </div>
    
      <div className="relative group">
        <img
          alt="Career"
          src="/images/side-menu/career.png"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Career
        </span>
      </div>

    
      <div className="relative group">
        <img
          alt="watch"
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Watch
        </span>
      </div>

      <div className="relative group">
        <img
          alt="watch"
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg"
          className="ml-5 size-7 h-full opacity-50 hover:opacity-100"
        />
        <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          News
        </span>
      </div>

    </div>

    {/* Bottom Section */}
    <div className="flex flex-col gap-6 justify-center items-center mb-8">
      <div className="relative group">
        <img
          alt="Help"
          src="/images/question_mark.png"
          className="size-5 opacity-50 hover:opacity-100"
        />
        <span className="absolute left-7 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Help
        </span>
      </div>
      <div className="relative group">
        <img
          alt="Power Button"
          src="/images/power_button.png"
          className="size-5 opacity-50 hover:opacity-100"
        />
        <span className="absolute left-7 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Power Button
        </span>
      </div>
    </div>
  </div>
  )
}

export default RightSide