// view 대한 처리 렌더링을 담당하는 부분입니다.

let express = require('express')
let router = express.Router()


    router.get('/login',((req, res) => {
        res.render('login')
    }))
    router.get('/join',((req, res) => {
        res.render('join')
    }))

    router.get('/home',((req, res) => {
        res.render('home')
    }))



    // router.get('/chat',((req, res) => {
    //     res.render('chatclient')
    // }))





module.exports = router