//웹 소켓 IO
let sockIO = (server) => {
    let WebSocketServer = require('ws')
    let wss = new WebSocketServer.Server({server})
    let user = new Object();
    let userlist = new Array();
    var i = 0
    wss.on('connection', (connetion) => {
        if(userlist)
        user['no'] = i++;
        user['conn'] = connetion;
        console.log('conectServer')
        userlist.push(user)
        console.log(userlist)
        connetion.on('message', (message) => {
            let data;
            try {
                data = JSON.parse(message)
            } catch (e) {
                data = {}
                console.log("데이터가 정상적인 형식으로 들어오지 않았습니다.")
            }
            let sendMessage = new ArrayBuffer()
            switch (data.type) {
                case "open" :
                    console.log("여기까지 들어옴")
                    sendMessage['type'] = 'resend'
                    sendMessage['message'] = 'Is This True????'
                    console.log(sendMessage)
                    connetion.send(JSON.stringify(sendMessage))
                    console.log("성공")
                case "chat":
                    for(var d = 0 ; d < userlist.length ; d++){
                        sendMessage['type'] = 'chat'
                        sendMessage['message'] = 'Chat Success?'
                        userlist[d].conn.send(JSON.stringify(sendMessage))
                    }
            }
        })
    })
}

module.exports = sockIO