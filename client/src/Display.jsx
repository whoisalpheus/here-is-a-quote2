import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import './App.css'

function Display({showDisplay, onClose, currentQuote, author}) {
    console.log('Display component rendered with showDisplay:', showDisplay)
    // Fetch random image from Unsplash for the background
    const [bgImage, setBgImage] = useState(null);
    const [photographerName, setPhotographerName] = useState(null)
    const [photographerPage, setPhotographerPage] = useState(null)

    const fetchRandomImage = async () => {

        // Using Unsplash image generator:
        const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS
        // const unsplashIt = 'https://unsplash.it'
        try {
            const response = await fetch(
                `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
                // unsplashIt
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            console.log('Unsplash API Response:', data)
            console.log('Image URLs:', data.urls)
            console.log('Image URL:', data.urls.regular)
            setBgImage(data.urls.regular);
            setPhotographerName(data.user.name);
            setPhotographerPage(data.user.links.html);
            console.log('This should be the photog page:', data.user.links.html);
            console.log('Image URL set to state:', data.urls.regular)
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }

    useEffect(() => {
        console.log('Display useEffect triggered. showDisplay:', showDisplay)
        if (showDisplay) {
            fetchRandomImage()
        }
    }, [showDisplay])

    console.log('Display component rendered with showDisplay:', showDisplay)
    // console.log('Current bgImage value:', bgImage)

    return (
        
        <div
            style={{
                backgroundPosition: 'center',
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
                backgroundColor: 'black',
                margin: 0,
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{
                    textShadow: '2px 2px 4px rgba(241, 238, 238, 0.7)',
                    // WebkitTextStroke: '1px grey'
                }}
                className="shimmer-text"
            >Here's a quote:</h1>
            <h2 style={{
                    textShadow: '2px 2px 4px rgba(241, 238, 238, 0.7)',
                    // WebkitTextStroke: '1px grey'
                }}
                className="shimmer-text"
            >{currentQuote}</h2>
            <h4 style={{
                    textShadow: '2px 2px 4px rgba(241, 238, 238, 0.7)',
                    // WebkitTextStroke: '1px grey'
                }}
                className="text-end shimmer-text"
            >- {author}</h4>
            <Button onClick={onClose}>Close</Button>
            {photographerName && (
                <footer style={{
                        textShadow: '2px 2px 4px rgba(241, 238, 238, 0.7)',
                        // WebkitTextStroke: '1px grey'
                    }}
                    className="fs-6 shimmer-text"
                >
                    <p>Photo by <a href={`${photographerPage}`}>{photographerName}</a> on <a href="https://unsplash.com/?utm_source=Here's_a_quote&utm_medium=referral">Unsplash</a></p>
                </footer>
            )}
        </div>
    )
}
export default Display