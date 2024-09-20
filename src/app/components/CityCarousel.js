
"use client"; 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const CityCarousel = () => {
  const [cityData, setCityData] = useState([]);
  const [mergedData,setMergedData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const userComments = [
    {
      username: "John Doe",
      location: "New York, USA",
      description: "Found an amazing home with stunning views of the city!",
    },
    {
      username: "Jane Smith",
      location: "Los Angeles, USA",
      description: "Loved the vibrant culture and beautiful homes!",
    },
    {
        username: "Lonvala",
        location: "Visakhapatnam, India",
        description: "Found an amazing home with stunning views of the city!",
      },
      {
        username: "Waltair",
        location: "Vizag, India",
        description: "Found an amazing home with stunning views of the city!",
      },
  
  ];

 useEffect(()=>{
    const merging = cityData.map((city, id) => {
        const isLargeCard = (id === 0 || id % 5 === 0);
        const isTextCard = (id === 1 || id % 5 === 1);
        const isOtherCard = !isLargeCard && !isTextCard;
        return {
          id,
          city ,
           type : isLargeCard ? 'large' : isTextCard ? 'text' : 'other',
          
          style : isLargeCard ? 'h-[25rem]' : 'h-[12.5rem]', 
        };
      })

      setMergedData(merging) 
   },[cityData])
  
  const API = `https://api.unsplash.com/photos/random?query=city&count=20&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(API);
        setCityData(response.data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    fetchCities();
  }, [API]);

  
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 5 >= cityData.length ? 0 : prevIndex + 5
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 5 < 0 ? cityData.length - 5 : prevIndex - 5
    );
  };
  return (

<div className=" relative overflow-hidden ">
<div className="flex flex-nowrap gap-2 mt-2" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
  {mergedData.map((item, id) => {

    const user = userComments[id % userComments.length];
    const bgColors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const getRandomOrder = () => Math.random() > 0.5;

  return (
      <div key={id} className="flex gap-2 my-8">
              {item.type === "large" && 
              (<div className="bg-gray-200 relative overflow-hidden rounded-lg h-full w-[20rem]">
               <Image
                  src={item.city.urls.regular}
                  alt={item.city.alt_description || "City Image"}
                  className="w-full h-full object-fill" fill
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  <h2 className="text-lg">{item.city.user.location || "City Name"}</h2>
                </div>
              </div>)
              }

     {(item.type === "text" || item.type === "other" ) && (
                // <div className="flex flex-col gap-2 w-[20rem]">
                //     {getRandomOrder() ? (
                //         <>
                //             <div className={`w-[20rem] h-1/2 ${randomBgColor} p-4 rounded-lg shadow-lg`}>
                //             <h3 className="text-lg font-semibold">{user?.username}</h3>
                //             <p className="text-sm text-gray-500">{user?.location}</p>
                //             <p className="text-gray-700">{user?.description}</p>
                //             </div>
                            
                //             <div className="h-1/2 w-[20rem] bg-gray-100 rounded-lg shadow-lg">
                //             <img
                //             src={item.city.urls.small}
                //             alt={item.city.alt_description || "City Image"}
                //             className="w-full h-full object-fill rounded-t-lg" fill
                //             />
                //             <div className="p-2">
                //             <h3 className="text-center">
                //             {item.city.user.location || "City"}
                //             </h3>
                //             </div>
                //             </div></>
                //     ) :
                //                         (
                //     <>

                //     <div className="h-1/2 bg-gray-100 rounded-lg shadow-lg">
                //                 <img
                //                 src={item.city.urls.small}
                //                 alt={item.city.alt_description || "City Image"}
                //                 className="w-full h-40 object-fill rounded-t-lg"
                //                 />
                //                 <div className="p-2">
                //                 <h3 className="text-center">
                //                     {item.city.user.location || "City"}
                //                 </h3>
                //                 </div>
                //             </div>


                //     <div className={`h-1/2 ${randomBgColor} p-4 rounded-lg shadow-lg`}>
                //                     <h3 className="text-lg font-semibold">{user?.username}</h3>
                //                     <p className="text-sm text-gray-500">{user?.location}</p>
                //                     <p className="text-gray-700">{user?.description}</p>
                //                 </div>
                //     </>
                //                         )}
                                
                //                     </div>

                <div key={id} className="flex flex-col gap-2 w-[20rem]">
            {getRandomOrder() ? (
              <>
                {/* Text Card */}
                <div className={`h-1/2 ${randomBgColor} p-4 rounded-lg shadow-lg`}>
                  <h3 className="text-lg font-semibold">{user?.username || 'Username'}</h3>
                  <p className="text-sm text-gray-500">{user?.location || 'Location'}</p>
                  <p className="text-gray-700">{user?.description || 'Description'}</p>
                </div>
                {/* Image Card */}
                <div className="h-1/2 bg-gray-100 rounded-lg shadow-lg">
                  <Image
                    src={item.city.urls.small}
                    alt={item.city.alt_description || 'City Image'}
                    width={320} 
                    height={200} 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-center">{item.city.user.location || 'City'}</h3>
                  </div>
                  
                </div>
              </>
            ) : (
              <>
                {/* Image Card */}
                <div className="h-1/2 bg-gray-100 rounded-lg shadow-lg">
                  <Image
                    src={item.city.urls.small}
                    alt={item.city.alt_description || 'City Image'}
                    width={320} 
                    height={200} 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-center">{item.city.user.location || 'City'}</h3>
                  </div>
                </div>
                {/* Text Card */}
                <div className={`h-1/2 ${randomBgColor} p-4 rounded-lg shadow-lg`}>
                  <h3 className="text-lg font-semibold">{user?.username || 'Username'}</h3>
                  <p className="text-sm text-gray-500">{user?.location || 'Location'}</p>
                  <p className="text-gray-700">{user?.description || 'Description'}</p>
                </div>
              </>
            )}
          </div>
                                )}
                                </div>
    
    );
  })}
</div>

    
 


      {/* Carousel Wrapper */}
        

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CityCarousel;



