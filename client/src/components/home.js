import React from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Container } from 'reactstrap';
import { image } from '../Notes.jpg'

function Home(props) {
    return (
        <Jumbotron>
            <Container>
                <img src={image} alt="Notes image" />
            </Container>
        </Jumbotron>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Home)


