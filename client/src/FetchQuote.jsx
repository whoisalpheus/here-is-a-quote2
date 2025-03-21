import { useState } from 'react'
// import 'bootswatch/dist/THEME-HERE/bootstrap.min.css'
import './App.css'
import { Alert } from "react-bootstrap" 
import Buttons from './Buttons'
import Image from './Image'

function FetchQuote() {
    const [showQuote, setShowQuote] = useState(false)
    const [currentQuote, setCurrentQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState('')
    const [category, setCategory] = useState('')

    // Handle modal
    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    // Handle closing the modal
    const handleClose = () => setShowQuote(false)

    const handleSubmit = async (e) => {
        // Get the button id to know which 'mood' was selected
        const category = e.target.id

        setCategory(category)

        // e.preventDefault()

        // ENV_VAR
        // 'http://localhost:5000/quote'
        try {
            const ENV_VAR = import.meta.env.VITE_ENV_VAR
            const response = await fetch(`${ENV_VAR}/quote/${category}`)
            console.log('Available endpoints: ', `${ENV_VAR}/quote/${category}`)
            console.log('Catgory value: ', category)
            if (!response.ok) {
                throw new Error('Failed to fetch quote.')
            }
            const data = await response.json()
            console.log('Received data: ', data)
            setCurrentQuote(data.quote_text)
            setAuthor(data.author)
            setShowQuote(true) // This will now show the modal
            setError('') // Clear any previous errors... is this needed ???
        } catch (err) {
            setError(`Error fetching quote: ${err.message}`)
            setShowQuote(false)
        }
    }

    return (
        <>
            <h1 className='bg-secondary rounded-4'>How are you feeling?</h1>
            
            <Buttons handleSubmit={handleSubmit} />
                
            {error && <Alert variant="danger" style={{ color: "red" }}>{error}</Alert>}

            <Image
                showQuote={showQuote}
                handleClose={handleClose}
                currentQuote={currentQuote}
                author={author}
                category={category}
            />        
                
        </>
    )
}

export default FetchQuote