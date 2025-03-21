// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button" 
// // import 'bootswatch/dist/THEME-HERE/bootstrap.min.css'
// import './App.css'

// // Refactor without Modal !!!!!

// function Image({ showQuote, handleClose, currentQuote, author }) {
//     // Fetch random image from Unsplash for the background
//     const [bgImage, setBgImage] = useState(null);

//     const fetchRandomImage = async () => {
//         const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS
//         try {
//             const response = await fetch(
//                 `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
//             );
//             const data = await response.json();
//             setBgImage(data.urls.regular);
//         } catch (error) {
//             console.error("Error fetching image:", error);
//         }
//     }

//     useEffect(() => {
//         if (showQuote) {
//             fetchRandomImage()
//         }
//     }, [showQuote])

//     return (
        
//         <div className="flex flex-col items-center max-w-4xl mx-auto">
//       {!showQuoteView ? (
//           // Selection buttons
//           <div className="w-full p-6">
//           <h2 className="text-2xl font-bold text-center mb-6">Choose a Quote Category</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {quotes.map((quote, index) => (
//                 <button
//                 key={index}
//                 onClick={() => selectQuote(index)}
//                 className="bg-secondary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//                 >
//                 Quote {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//           // Quote display view
//           <div className="w-full relative h-96 rounded-lg overflow-hidden">
//           {/* Background Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center" 
//             style={{ backgroundImage: `url(${bgImage})` }}
//             />
          
//           {/* Semi-transparent overlay to improve readability */}
//           <div className="absolute inset-0 bg-black bg-opacity-40" />
          
//           {/* Quote content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
//             <div className="max-w-xl">
//               <p className="text-white text-xl md:text-2xl font-medium mb-4 text-shadow">
//                 "{currentQuote?.text}"
//               </p>
//               <p className="text-white text-lg italic">
//                 — {currentQuote?.author}
//               </p>
//             </div>
//           </div>
          
//           {/* Back button */}
//           <button
//             onClick={handleClose}
//             className="absolute top-4 left-4 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
//             >
//             ← Back
//           </button>
//         </div>
//       )}

//     </div>

// )
// }
// export default Image

/////
/////
/////
/////
/////

import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button" 
// import 'bootswatch/dist/THEME-HERE/bootstrap.min.css'
import './App.css'

function Image({ showQuote, handleClose, currentQuote, author }) {
//   const [quotes, setQuotes] = useState([]);
//   const [currentQuote, setCurrentQuote] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [showQuoteView, setShowQuoteView] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

const [bgImage, setBgImage] = useState(null)

  // Fetch quotes from your API
//   useEffect(() => {
//     const fetchQuotes = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/api/quotes');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setQuotes(data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching quotes:', err);
//         setError('Failed to load quotes. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchQuotes();
//   }, []);

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

//   const selectQuote = async (quote) => {
//     setCurrentQuote(quote);
//     const image = await fetchRandomImage();
//     setImageUrl(image);
//     setShowQuoteView(true);
//   };

//   const goBack = () => {
//     setShowQuoteView(false);
//   };

//   if (loading) return <div className="text-center p-6">Loading quotes...</div>;
//   if (error) return <div className="text-center p-6 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      {/* {!showQuoteView ? (
        // Selection buttons
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Choose a Quote Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quotes.map((quote) => (
              <button
                key={quote.id}
                onClick={() => selectQuote(quote)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {quote.category || `Quote ${quote.id}`}
              </button>
            ))}
          </div>
        </div>
      ) : ( */}
        // Quote display view
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
          {/* Background Image */}
          {/* <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          /> */}
          
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
          <Button
            onClick={handleClose}
            className="absolute top-4 left-4 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            ← Back
          </Button>
        </div>
      {/* )} */}
    </div>
  )
}

export default Image


/////
/////
/////
/////
/////

// import React, { useState } from 'react';
// import 'bootswatch/dist/cyborg/bootstrap.min.css'
// import './App.css'



/////
/////
/////
/////
/////



// <Modal
//     show={showQuote}
//     onHide={handleClose}
//     centered
//     style={{
//         backgroundImage: bgImage ? `url(${bgImage})` : undefined,
//         backgroundSize: 'cover',
//         backgroundPosition: 'centered'
//     }}
// >
            
//     <Modal.Header closeButton className="bg-secondary">
//         <Modal.Title>Here is a quote for that...</Modal.Title>
//     </Modal.Header>

//     <Modal.Body className="bg-dark text-white-50">
//         <h2>{currentQuote}</h2>
//         <h4 className="text-end">- {author}</h4>
//     </Modal.Body>

//     <Modal.Footer className="bg-secondary">
//         <Button variant="dark" onClick={handleClose}>Close</Button>
//         {/* <Button variant="primary">Save changes</Button> */}
//     </Modal.Footer>
               
// </Modal>


/////
/////
/////
/////
/////



// const quotes = [
    //   { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    //   { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
//   { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
//   { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
//   { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
//   { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
//   { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
//   { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" }
// ];

// const QuoteDisplay = () => {
//   const [currentQuote, setCurrentQuote] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [showQuoteView, setShowQuoteView] = useState(false);

//   // Generate a random image when selecting a quote
//   const getRandomImage = () => {
//     // Using placeholder since we can't fetch from unsplash
//     // In your actual app, you would fetch from Unsplash API
//     return `/api/placeholder/1200/800`;
//   };

//   const selectQuote = (index) => {
//     setCurrentQuote(quotes[index]);
//     setImageUrl(getRandomImage());
//     setShowQuoteView(true);
//   };

//   const goBack = () => {
//     setShowQuoteView(false);
//   };

//   return (

//   );
// };

// export default QuoteDisplay;