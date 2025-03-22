import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button" 
// import 'bootswatch/dist/THEME-HERE/bootstrap.min.css'
import './App.css'

function Image({ showQuote, handleClose, currentQuote, author }) {

  const [bgImage, setBgImage] = useState(null)

  // Fetch random image from Unsplash
  const fetchRandomImage = async () => {
    const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS;
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
      )
      
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`)
    //   }
      
      const data = await response.json()
      setBgImage(data.urls.regular)

    } catch (error) {
      console.error("Error fetching image:", error);
      // Fallback image if the API call fails
    //   return "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80";
    }
  }

  useEffect(() => {
    if (showQuote) {
        fetchRandomImage()
    }
  }, [showQuote])

  // const containerClass = fullPage
  //   ? 'quote-image-container fullpage'
  //   : 'quote-image-container'

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Quote display view */}
        <div
            className="w-full relative h-96 rounded-lg overflow-hidden"
            show={showQuote}
            onHide={handleClose}
            centered
            style={{
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'centered'
            }}
        
        >
          
          {/* Semi-transparent overlay to improve readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          {/* Quote content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="max-w-xl">
              <h2 className="text-white text-xl md:text-2xl font-medium mb-4 text-shadow">
                {currentQuote}
              </h2>
              <h4 className="text-white text-lg italic">
                — {author}
              </h4>
            </div>
          </div>
          
          {/* Back button */}
          {/* {fullPage && (<Button
            onClick={handleClose}
            className="absolute top-4 left-4 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Back
          </Button>)} */}

        </div>

    </div>
  )
}

export default Image