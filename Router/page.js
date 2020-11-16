let express = require('express')
let router = express.Router()

    router.get('/',((req, res) => {
        res.render('login')
    }))
    router.get('/join',((req, res) => {
        res.render('join')
    }))

    router.get('/chat',((req, res) => {
        res.render('chatclient')
    }))



    // router.get('/chat',((req, res) => {
    //     res.render('chatclient')
    // }))





module.exports = router