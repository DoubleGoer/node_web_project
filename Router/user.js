let express = require('express');
let router = express.Router()
console.log("user 라우팅 파싱")
router.post('/join',((req, res) => {
    console.log(req)
    let data = {data : '성공',sys:'실패'}
    res.send(data)
}))

router.delete('/delete',((req, res) => {


}))

module.exports = router