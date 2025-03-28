import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col" 
import Container from "react-bootstrap/Container" 
import 'bootswatch/dist/sketchy/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Buttons({ onClick }) { // onClose

    return (
        <Container className="bg-secondary rounded-4">
            <h1>How are you feeling?</h1>
            <Col>           
                <Button id="sad" className="m-3 shadow text-black" onClick={ onClick } type="submit">Sad</Button>
                <Button id="anger" className="m-3 shadow text-black" onClick={ onClick } type="submit">Anger</Button>
                <Button id="anxiety" className="m-3 shadow text-black" onClick={ onClick } type="submit">Anxiety</Button>
            </Col>
            <Col>
                <Button id="happiness" className="m-3 shadow text-black" onClick={ onClick } type="submit">Happiness</Button>
                <Button id="shame" className="m-3 shadow text-black" onClick={ onClick } type="submit">Shame</Button>
                <Button id="guilt" className="m-3 shadow text-black" onClick={ onClick } type="submit">Guilt</Button>
            </Col>
            <Col>
                <Button id="self_worth" className="m-3 shadow text-black" onClick={ onClick } type="submit">Self-Worth</Button>
                <Button id="resilience" className="m-3 shadow text-black" onClick={ onClick } type="submit">Resilience</Button>
                {/* <Button id="depression" className="m-3 shadow text-black" onClick={ onClick } type="submit">Depression</Button> */}
            </Col>
        </Container>
)}
export default Buttons