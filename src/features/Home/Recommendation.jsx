import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { TailSpin } from "react-loader-spinner";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './customCarousel.css';
const Recommendation = () => {

  //  const api_url = process.env.REACT_APP_API_URL;

    const[recommendations,Setrecommendations] = useState([])
   
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get('http://localhost:3000/recommendations');
              Setrecommendations(res.data);
              console.log(res)
          } catch (error) {
            
          }
      };
  
      fetchData();
  }, []);
  
  




  return (
<>
    {
      recommendations.length === 0 ? (
      <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    ) :
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center my-6">Recommendations</h1>
    <p className="text-center text-gray-500 mb-8">
      Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum.
    </p>
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      centerMode={true} 
      centerSlidePercentage={33.33}
      showArrows={true}
    >
      {recommendations.map((rec) => (
        <div key={rec.id} className="p-4">
          <div className="bg-white p-6 shadow rounded-lg mx-2">
            <div className="flex justify-center mb-4">
              <img src={rec.profilePic} alt={`Profile of ${rec.heading}`} className="h-32 w-16 rounded-full"/>
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">{rec.heading}</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${index < rec.starRating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.123a1 1 0 00.95.69h4.348c.969 0 1.371 1.24.588 1.81l-3.507 2.548a1 1 0 00-.364 1.118l1.342 4.123c.3.921-.755 1.688-1.538 1.118L10 15.708l-3.507 2.548c-.783.57-1.838-.197-1.538-1.118l1.342-4.123a1 1 0 00-.364-1.118L2.426 9.55c-.783-.57-.38-1.81.588-1.81h4.348a1 1 0 00.95-.69L9.049 2.927z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-center mb-4">{rec.review}</p>
            <div className="text-center">
              <span className="font-bold">{rec.name}</span>
              <p className="text-gray-500">{rec.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
    }
  </>
  )
}

export default Recommendation