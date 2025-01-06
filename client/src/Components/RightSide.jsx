  const RightSide = () => {
    return (
      <div className=" h-screen text-white overflow-hidden group">
        <div>
          <div className="p-2 m-2 border-t-[1px] border-gray-600 border-solid mt-8">
            <div className="flex flex-row gap-2 text-[12px] ">
              <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" />
              <p className="hidden group-hover:block">SQUAD</p>
            </div>
            <div className="flex flex-row  group/1 mt-2">
              <div className="w-8 h-9 flex justify-center items-center bg-gray-600 text-black group-hover/1:bg-black group-hover/1:text-white ">
                +
              </div>
              <p className="pl-2 w-full hidden group-hover/1:text-black group-hover/1:bg-white group-hover:flex items-center text-sm ">
                Squad Join
              </p>
            </div>
          </div>

          <div className="p-2 m-2 border-t-[1px] border-gray-600 border-solid mt-2">
            <div className="flex flex-row gap-2 text-[12px] ">
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
                alt="Online Avatar"
              />
              <p className="hidden group-hover:block">ONLINE</p>
            </div>
            <div className="flex flex-row  group mt-2 border-l-[3px] group/2 border-green-600 border-solid">
              <img
                alt="online"
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
              />
              <div className="pl-2 w-full hidden group-hover/2:text-black group-hover/2:bg-white group-hover:flex flex-col justify-center items-start text-[12px] ">
                <p>MaryJane</p>
                <p className="text-[10px] text-gray-400 font-bold">Online</p>
              </div>
            </div>
          </div>


          <div className="p-2 m-2 border-t-[1px] border-gray-600 border-solid mt-2">
            <div className="flex flex-row gap-2 text-[12px] ">
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
                alt="offline Avatar"
              />
              <p className="hidden group-hover:block">OFFLINE</p>
            </div>
            <div className="flex flex-row  group mt-2 border-l-[3px] opacity-50 hover:opacity-100 group/3">
              <img
                alt="offline"
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
              />
              <div className="pl-2 w-full hidden group-hover/3:text-black group-hover/3:bg-white group-hover:flex flex-col justify-center items-start text-[12px] ">
                <p>420</p>
                <p className="text-[10px] text-gray-400 font-bold">Online</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  export default RightSide;
