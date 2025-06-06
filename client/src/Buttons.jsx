import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col" 
import Container from "react-bootstrap/Container" 
import 'bootswatch/dist/sketchy/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Buttons({ onClick }) { // onClose

    return (
        <Container style={{ width: '80vw', height: '80vh' }} className="bg-transparent rounded-4">
            <h1>Pick a topic</h1>
            <Col>           
                <Button id="sad" className="m-4 shadow text-danger" onClick={ onClick } type="submit">Sadness</Button>
                <Button id="anger" className="m-4 shadow text-white" onClick={ onClick } type="submit">Anger</Button>
                <Button id="anxiety" className="m-4 shadow text-warning" onClick={ onClick } type="submit">Anxiety</Button>
            </Col>
            <Col>
                <Button id="happiness" className="m-4 shadow text-info" onClick={ onClick } type="submit">Happiness</Button>
                <Button id="shame" className="m-4 shadow text-success" onClick={ onClick } type="submit">Shame</Button>
                <Button id="guilt" className="m-4 shadow text-info" onClick={ onClick } type="submit">Guilt</Button>
            </Col>
            <Col>
                <Button id="self_worth" className="m-4 shadow text-danger" onClick={ onClick } type="submit">Self-Worth</Button>
                <Button id="resilience" className="m-4 shadow text-white" onClick={ onClick } type="submit">Resilience</Button>
                {/* <Button id="depression" className="m-4 shadow text-black" onClick={ onClick } type="submit">Depression</Button> */}
            </Col>
        </Container>
)}
export default Buttons