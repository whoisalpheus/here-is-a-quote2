import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col" 
import Container from "react-bootstrap/Container" 
// import 'bootswatch/dist/THEME-HERE/bootstrap.min.css'
// import './App.css'

function Buttons({ handleSubmit }) {

    return (
        <Container className="bg-secondary rounded-4">
            <Col>           
                <Button id="sad" className="m-3 text-black" onClick={ handleSubmit } type="submit">Sad</Button>
                <Button id="anger" className="m-3 text-black" onClick={ handleSubmit } type="submit">Anger</Button>
                <Button id="anxiety" className="m-3 text-black" onClick={ handleSubmit } type="submit">Anxiety</Button>
            </Col>
            <Col>
                <Button id="happiness" className="m-3 text-black" onClick={ handleSubmit } type="submit">Happiness</Button>
                <Button id="shame" className="m-3 text-black" onClick={ handleSubmit } type="submit">Shame</Button>
                <Button id="guilt" className="m-3 text-black" onClick={ handleSubmit } type="submit">Guilt</Button>
            </Col>
            <Col>
                <Button id="self_worth" className="m-3 text-black" onClick={ handleSubmit } type="submit">Self-Worth</Button>
                <Button id="resilience" className="m-3 text-black" onClick={ handleSubmit } type="submit">Resilience</Button>
                {/* <Button id="depression" className="m-3 text-black" onClick={ handleSubmit } type="submit">Depression</Button> */}
            </Col>
        </Container>
)}
export default Buttons