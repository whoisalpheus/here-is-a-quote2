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
                <Button size="lg" id="sad" className="m-5 shadow text-danger" onClick={ onClick } type="submit">Sadness</Button>
                <Button size="lg" id="anger" className="m-5 shadow text-white" onClick={ onClick } type="submit">Anger</Button>
                <Button size="lg" id="anxiety" className="m-5 shadow text-warning" onClick={ onClick } type="submit">Anxiety</Button>
            </Col>
            <Col>
                <Button size="lg" id="happiness" className="m-5 shadow text-info" onClick={ onClick } type="submit">Happiness</Button>
                <Button size="lg" id="shame" className="m-5 shadow text-success" onClick={ onClick } type="submit">Shame</Button>
                <Button size="lg" id="guilt" className="m-5 shadow text-info" onClick={ onClick } type="submit">Guilt</Button>
            </Col>
            <Col>
                <Button size="lg" id="self_worth" className="m-5 shadow text-danger" onClick={ onClick } type="submit">Self-Worth</Button>
                <Button size="lg" id="resilience" className="m-5 shadow text-white" onClick={ onClick } type="submit">Resilience</Button>
                {/* <Button size="lg" id="depression" className="m-5 shadow text-black" onClick={ onClick } type="submit">Depression</Button> */}
            </Col>
        </Container>
)}
export default Buttons