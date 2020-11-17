let express = require('express')
// Express 웹서버 관리
let app = express()
let port = 3000
var path = require('path');
let host = '0.0.0.0'
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let page = require('./Router/page')
let user = require('./Router/user')
let board = require('./Router/board')


// http & https
let http = require('http')
let https = require('https')
let server = http.createServer(app).listen(3000,'localhost',()=>{
    console.log("server is on")
})
let mongo = require('./module/mongodb')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// 뷰 템플릿 엔진과 현재 view를 담을 path 지정
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');



app.get('/', ((req, res) => {
    mongo.connectCheck();
    res.send("this page")
}))


app.post('/')


// 파일 절대경로 관리
app.use('/data',express.static('public'))

// 해당부분은 페이지 라우팅이 아닌 ajax.post get or form action 처리를 위해 만들어진 
// 라우팅 그룹입니다.
app.use('/user',user)
app.use('/board',board)


// 실제 view가 렌더링 되고 처리되는 부분
app.use('/page', page)

let sockio = require('./module/socket')

sockio(server)



