
const mapData = [
    {
      title: "CONQUEST LARGE",
      map: "DAWNBREAKER",
      img: "images/map-rotation/map-rotation-1.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "PROPAGANDA",
      img: "images/map-rotation/map-rotation-2.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "OPERATION LOCKER",
      img: "images/map-rotation/map-rotation-3.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "LANCANG DAM",
      img: "images/map-rotation/map-rotation-4.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "SIEGE OF SHANGHAI",
      img: "images/map-rotation/map-rotation-5.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "GOLMUD RAILWAY",
      img: "images/map-rotation/map-rotation-6.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "DAWNBREAKER",
      img: "images/map-rotation/map-rotation-1.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "PROPAGANDA",
      img: "images/map-rotation/map-rotation-2.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "OPERATION LOCKER",
      img: "images/map-rotation/map-rotation-3.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "LANCANG DAM",
      img: "images/map-rotation/map-rotation-4.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "SIEGE OF SHANGHAI",
      img: "images/map-rotation/map-rotation-5.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "GOLMUD RAILWAY",
      img: "images/map-rotation/map-rotation-6.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "SIEGE OF SHANGHAI",
      img: "images/map-rotation/map-rotation-5.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "GOLMUD RAILWAY",
      img: "images/map-rotation/map-rotation-6.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "DAWNBREAKER",
      img: "images/map-rotation/map-rotation-1.png",
    },
    {
      title: "CONQUEST LARGE",
      map: "PROPAGANDA",
      img: "images/map-rotation/map-rotation-2.png",
    }
  ];
  
  const Map = () => {
    return (
      <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-x-10 gap-y-4 mt-3">
      {mapData.map((map, key) => (
        <div
          key={key}
          className="group h-[125px] w-[210px]  relative overflow-hidden"
        >
          <img
            alt="map"
            src={`${map.img}`}
            className="h-[125px] w-[210px] transform transition-transform group-hover:-translate-y-2"
          />
          <div className="bg-black bg-opacity-90 absolute bottom-0 w-full h-1/2 px-4 py-2 text-[12px] font-bold text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <p>{map.title}</p>
            <p>{map.map}</p>
          </div>
        </div>
      ))}
    </div>
    
    );
  };
  
  export default Map;
  