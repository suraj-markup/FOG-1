import {useState,useEffect} from "react";
import Sidebar from "./Components/Sidebar";
import Map from "./Components/Map"
import RightSide from "./Components/RightSide";


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
    return <div><img alt="loading" src="./images/loading.jpg" className="w-full h-screen"/></div>;
  }
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-center h-auto font-rajdhani overflow-hidden">
      <div className="bg-black bg-opacity-60 w-full h-screen flex flex-row">
        <div className="w-[13%] sm:w-[10%] md:w-[7%] lg:w-[6%] xl:w-[5%]">
        <Sidebar/>
        </div>
        
        <div className="flex-1">
       

          <div className="mt-5 ml-5 md:ml-10">
            <p className="flex flex-row gap-3 text-white text-[12px]"><img alt="back" src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg" className="opacity-60 hover:opacity-100"/><span className="hover:font-bold ">MULTIPLAYER</span> / <span className="hover:font-bold">SERVER BROWSER</span> /</p>
            <p className="text-white text-3xl font-bold">SERVER INFO</p>
          </div>

          <div className="scrollbar-w-5 scrollbar scrollbar-thumb-white scrollbar-track-slate-700  overflow-y-scroll  text-white ml-5 md:ml-10 mt-14 w-5/6 md:w-3/4 h-[80vh]  ">
            <h3 className="text-2xl font-bold">! RC3-BASEMAPS</h3>
            <p className="flex gap-1 md:gap-3 text-sm text-gray-300 font-bold">
              <img alt="flag" src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg"/>
             <span>conquest large</span>-<span>Lancang Dam</span>-<span>Custom</span>-<span>60 hz</span>
            </p>
            <p className="text-sm text-gray-200 font-bold">Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br/> https://discord.gg/3r5NK4d</p>

            <div className="flex flex-row gap-2 md:gap-2 flex-wrap mt-7  ">
              <div className="w-1/3 md:w-1/4 h-10  flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                JOIN
              </div>
              <div className="w-1/3 md:w-1/4 h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                SPECTATE
              </div>
              <div className="w-1/3 md:w-1/4 h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
                JOIN AS COMMANDER
              </div>
              <div className="w-1/3 md:w-1/6 h-10 flex items-center font-bold justify-center hover:bg-white hover:text-black border-solid border-[1px] border-gray-600 text-[12px]">
              ★ 13672
              </div>
            </div>
            <div className="flex flex-row justify-start gap-10 sm:gap-20 md:gap-28 mt-3 font-bold">
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
              {/* settings advanced and rules */}
            <div className="flex flex-col md:flex-row gap-10 flex-wrap mt-5 font-bold ">
              <div className="w-full md:w-[25%] lg:w-[20%] ">
 
                  <p className="text-[12px]  font-bold">SETTINGS</p>
                  {Object.entries(serverData.settings).map(([key, value]) => (
                    <div key={key} className="px-2 py-1 border-b-[1px] border-gray-600 hover:bg-white hover:text-black" >
                      <p className="flex justify-between"><span>{key}</span><span>{value}</span></p>
                    </div>
                  ))}
              </div>

              <div className="w-full md:w-[25%] lg:w-[20%]  ">
                  <p className="text-[12px]  font-bold">ADVANCED</p>
                  {Object.entries(serverData.advanced).map(([key, value]) => (
                    <div key={key} className="px-2 py-1 border-b-[1px] border-gray-600 hover:bg-white hover:text-black" >
                      <p className="flex justify-between"><span>{key}</span><span>{value}</span></p>
                    </div>
                  ))}
              </div>
              <div className="w-full md:w-[25%] lg:w-[20%] ">
                  <p className="text-[12px]  font-bold">RULES</p>
                  {Object.entries(serverData.rules).map(([key, value]) => (
                    <div key={key} className="px-2 py-1 border-b-[1px] border-gray-600 hover:bg-white hover:text-black" >
                      <p className="flex justify-between"><span>{key}</span><span>{value}</span></p>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold mt-5">MAP ROTATION</p>
              <Map/>
            </div>

          </div>
       

        </div>


        <div className="relative">
        <div className="h-full w-14 sm:w-16 md:w-20 lg:w-20 hover:bg-black hover:bg-opacity-70 hover:w-28 sm:hover:w-32 md:hover:w-52  transition-all duration-300 absolute top-0 right-0">
          <RightSide />
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
