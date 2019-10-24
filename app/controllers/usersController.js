const User = require('../models/user')
const _ = require('lodash')

//localhost:3005/users/register
module.exports.register = function (req, res) {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function (user) {
            const { _id, username, email } = user
            res.send({
                _id, username, email
            })
        })
        .catch(function (err) {
            res.send(err)
        })
}

module.exports.login = function (req, res) {
    const body = req.body
    let user
    User.findByCredentials(body.email, body.password)
        .then(function (userFound) {
            user = userFound
            return user.generateToken()
        })
        .then(function (token) {
            //res.setHeader('x-auth', token).send({})
            user =
                _.pick(user, ['id', 'username', 'email'])
            res.json({
                token,
                user
            })
        })
        .catch(function (err) {
            res.send(err)
        })
}

module.exports.account = function (req, res) {
    const { _id, username, email } = req.user
    res.send({
        _id, username, email
    })
}

module.exports.logout = function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'Successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
}

module.exports.delete = function (req, res) {
    const { user, token } = req
    User.findByIdAndDelete(user._id)
        .then(function () {
            res.send({ notice: 'Successfully deleted your account' })
        })
        .catch(function (err) {
            res.send(err)
        })
}