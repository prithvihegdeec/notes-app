import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        const password2 = this.state.password2
        if (body.password === password2) {
            axios.post("/register", body)
                .then(response => {
                    if (response.data._id) {
                        console.log(response.data)
                        this.setState({
                            username: '',
                            email: '',
                            password: ''
                        }, () => {
                            this.props.history.push(``)
                        })
                    }
                    else {
                        window.alert('validation error,check your fields')
                    }
                }).catch(err => {
                    window.alert('something went wrong')
                })
        } else {
            window.alert(`Confirm password does not match with the password you entered.`)
        }

    }

    render() {
        return (
            <div className="row h-100 justify-content-center align-items-center">
                <form onSubmit={
                    this.handleSubmit
                } > <h3>Register</h3><hr />
                    <div className="form-group">
                        <label>
                            Username
                        < input type="text"
                                name="username"
                                className="form-control"
                                value={
                                    this.state.username
                                }
                                onChange={
                                    this.handleChange
                                }
                            /> </label> </div>
                    <div className="form-group">
                        <label >
                            Email < input type="email"
                                name="email"
                                className="form-control"
                                value={
                                    this.state.email
                                }
                                onChange={
                                    this.handleChange
                                }
                            /> </label> </div>
                    <div className="form-group">
                        <label>
                            Password < input type="password"
                                name="password"
                                className="form-control"
                                value={
                                    this.state.password
                                }
                                onChange={
                                    this.handleChange
                                }
                            /> </label></div>
                    <div className="form-group">
                        <label>
                            Confirm Password < input type="password"
                                name="password2"
                                className="form-control"
                                value={
                                    this.state.password2
                                }
                                onChange={
                                    this.handleChange
                                }
                            /> </label></div>
                    <input type="submit" className="btn btn-primary"
                        value="Register" />
                </form> </div>
        )
    }
}

export default Register