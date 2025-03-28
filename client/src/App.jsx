import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import './App.css'
import Buttons from './Buttons'
import Display from './Display'

function App() {
  const [showDisplay, setShowDisplay] = useState(false)
  // const [quoteData, setQuoteData] = useState(null)
  const [currentQuote, setCurrentQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState('')
  const [category, setCategory] = useState('')
  
  
  const handleButtonClick = async (e) => {
    const category = e.target.id
    setCategory(category)
    setShowDisplay(true)

    console.log('handleButtonClick called. showDisplay set to:', showDisplay)

    Promise.resolve().then(() => {
      console.log('handleButtonClick called. showDisplay set to (after microtask):', showDisplay)
    })

    try {
      const ENV_VAR = import.meta.env.VITE_ENV_VAR
      const response = await fetch(`${ENV_VAR}/quote/${category}`)
      console.log('showDisplay before fetch:', showDisplay)
      console.log('Available endpoints: ', `${ENV_VAR}/quote/${category}`)
      console.log('Catgory value: ', category)
      if (!response.ok) {
        throw new Error('Failed to fetch quote.')
      }
      const data = await response.json()
      console.log('Received data: ', data)
      setCurrentQuote(data.quote_text)
      setAuthor(data.author)
      console.log('showDisplay after fetch:', showDisplay)
      // setShowDisplay(true) // This will now show the modal
      setError('') // Clear any previous errors... is this needed ???
      
    } catch (err) {
      setError(`Error fetching quote: ${err.message}`)
      // setShowQuote(false)
      setShowDisplay(false)
      // console.error(err)
    }
  }
  
  const handleCloseDisplay = () => {
    setShowDisplay(false)
    console.log('handleCloseDisplay called. showDisplay is now:', showDisplay)
    // setQuoteData(null)
  }
  
  return (
    <div>
      {!showDisplay && <Buttons onClick={handleButtonClick} />}
      {showDisplay && (
        <Display
          showDisplay={showDisplay} // Make sure this prop name matches the one in Display
          onClose={handleCloseDisplay}
          currentQuote={currentQuote}
          author={author}
          category={category}
          error={error}
        />
      )}
    </div>
  )
}

export default App
