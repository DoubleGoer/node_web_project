let mongoClient = require('mongodb').MongoClient
let objectId = require('mongodb').ObjectID
let assert = require('assert')
let url = 'mongodb://192.168.1.11:2727';
let mongodb = "test"
let mondb = ""
//Mongo mainDB명
function connMongo (callback){
    mongoClient.connect(url,(err,db)=>{
        // assert.equal(null,err);
        console.log("Connect Succes to Server")
        db.close()
    })

}

let mongo = {
    connectCheck :async ()=>{
        connMongo();
    },
    insertUser : (id,pwd,name,email,address,check,option,res)=>{
        mongoClient.connect(url,(err,db)=>{
            assert.equal(null,err);
            // console.log("Connect Succes to Server")
            if(err){
                db.close()
                res.send(err)
            }
            mondb = db.db(mongodb);
            mondb.collection('users').insertOne({
              id : id,
              pwd : pwd,
              name: name,
              email : email,
              address : address,
              check : check,
              option : option
            },(err)=>{
                if(err){
                    console.log(err)
                    throw err
                    db.close()
                    res.send(err)
                }
                db.close()
                res.send("1")
            })
        })
    },
    checkUser:(id,res)=>{
        mongoClient.connect(url,(err,db)=>{
            assert.equal(null,err);
            // console.log("Connect Succes to Server")
            if(err){
                res.send(err)
            }
            mondb = db.db(mongodb);
            let data = mondb.collection('users').count({
                id : id,
            },(err,result)=>{
                if(err){
                    console.log(err)
                    throw err
                    res.send("database error")
                }
                if(result!=0) {
                    db.close()
                    res.send('0')
                }else{
                    db.close()
                    res.send("1")
                }
            })
        })
    },
    loginCheck:(id,pwd,res)=>{
        mongoClient.connect(url,(err,db)=>{
            assert.equal(null,err);
            // console.log("Connect Succes to Server")
            if(err){
                res.send(err)
            }
            mondb = db.db(mongodb);
            let data = mondb.collection('users').count({
                id : id,
                pwd : pwd
            },(err,result)=>{
                if(err){
                    console.log(err)
                    throw err
                    res.send("database error")
                }
                if(result!=1) {
                    res.send('0')
                }else{
                    res.send("1")
                }
            })
        })
    }
}

module.exports = mongo;
