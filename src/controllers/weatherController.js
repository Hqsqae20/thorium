let axios = require("axios")

const getWeather = async function (req, res) {
    try {
  
      let city = req.query.q
      let appId = req.query.appid
      let option = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
  
      }
  
      let result = await axios(option)
      console.log(result)
      res.status(200).send({ msg: result.data })
  
  
    } catch (err) { res.send({ Error: err.message }) }
  
  }

  const onlyTemp = async function (req, res) {
    try {
  
      let city = req.query.q
      let appId = req.query.appid
      let option = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
  
      }
  
      let result = await axios(option)
      console.log(result)
      res.status(200).send({ temp: result.data.main.temp })
  
  
    } catch (err) { res.send({ Error: err.message }) }
  
  }
  
  

let getcities = async function (req, res) {

    try {
        let cities= ["Bengaluru","Mumbai","Delhi","London","Chennai","Indore"]
        let cityArray=[]
        for(let i=0;i<cities.length;i++)
        {
            let obj={city:cities[i]}
            let res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=9ab4f0ff73b0c5638bfb9687410eea04`)
            console.log(res.data.main.temp)
            obj.temp=res.data.main.temp
            cityArray.push(obj)
        }

        let sorted=cityArray.sort( function(a,b){return a.temp - b.temp})

        console.log(sorted)
        res.status(200).send({ status: true ,data:sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status : false ,msg:  "server error" })
    }
}

module.exports.getWeather = getWeather
module.exports.onlyTemp = onlyTemp
module.exports.getcities = getcities