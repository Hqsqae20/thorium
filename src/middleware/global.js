let moment =require('moment')

const MiddleW=function(req,res,next)
{
    
    
    let date=new Date().toJSON().slice(0,10).replace(/-/g,'/')
    let time=moment().format('HH:mm:ss')
    let ip=req.socket.remoteAddress
    let url=req.originalUrl

    console.log(date,time,ip,url)
    next()
}
module.exports.GB=MiddleW