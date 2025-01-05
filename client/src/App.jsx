import {useState,useEffect} from "react";
import Sidebar from "./Components/Sidebar";




function App() {
  const [serverData,setServerData]=useState(null);
  useEffect(()=>{
    fetch("https://fog-1-backend.vercel.app/server-info")
    .then((res)=>res.json())
    .then((data)=>setServerData(data))
    .catch((err)=>console.log("There was an error while fetching the data: " + err.message));
  },[]);

  console.log(serverData);

  
  if (!serverData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-center h-screen font-rajdhani">
      <div className="bg-black bg-opacity-60 w-full h-screen flex flex-row">
        <div className="w-[4%]">
        <Sidebar/>
        </div>
        <div className="w-full">
          <div className="mt-5 ml-10">
            <p className="flex flex-row gap-3 text-white text-[12px]"><img alt="back" src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg" className="opacity-60 hover:opacity-100"/><span className="hover:font-bold ">MULTIPLAYER</span> / <span className="hover:font-bold">SERVER BROWSER</span> /</p>
            <p className="text-white text-3xl font-bold">SERVER INFO</p>
          </div>

          <div className="text-white ml-10 mt-14 w-4/6 ">
            <h3 className="text-2xl font-bold">! RC3-BASEMAPS</h3>
            <p className="flex gap-3 text-sm text-gray-300 font-bold">
              <img alt="flag" src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg"/>
             <span>conquest large</span>-<span>Lancang Dam</span>-<span>Custom</span>-<span>60 hz</span>
            </p>
            <p className="text-sm text-gray-200 font-bold">Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br/> https://discord.gg/3r5NK4d</p>

            <div className="flex flex-row gap-2 flex-wrap mt-7  ">
              <div className="w-[23%] h-10  flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                JOIN
              </div>
              <div className="w-[23%] h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                SPECTATE
              </div>
              <div className="w-[23%] h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                JOIN AS COMMANDER
              </div>
              <div className="w-[12%] h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
              ★ 13672
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-start gap-28 mt-3 font-bold">
                <div className="text-sm" >
                PLAYERS
                <p className="text-xl">{serverData.players} </p>
                </div>
                <div  className="text-sm">
                PING
                <p className="text-xl">{serverData.ping} </p>
                </div>
                <div  className="text-sm">
                TICKRATE
                <p className="text-xl">{serverData.tickrate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
