import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/userAction'

function Settings(props) {
    localStorage.clear()
    props.dispatch(deleteUser(props.user._id))
    return (
        <Redirect to="/login" />
    )
}

export default connect()(Settings)