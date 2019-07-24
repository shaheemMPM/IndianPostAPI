const express   = require('express'),
      data_json = require('./postalcode.json')

app = express()

app.get('/api/postcode/:code', (req, res)=>{
    let code = req.params.code
    let data = PostName(code)
    if(data){
        res.send(data)
    }else{
        res.send("No Post Office Found in this code")
    }
})

app.get('/api/postname/:name', (req, res)=>{
    let name = req.params.name
    let data = PostCode(name)
    if(data){
        res.send(data)
    }else{
        res.send("No Post office found with Matching name, Enter Currect name. Eg: Achalapur B.O")
    }
})

app.get('*', (req, res)=>{
    res.send("No Such EndPoint")
})

app.listen(8080)

function PostName(code) {
    for (var i = 0; i < data_json.length; i++) {
      if (data_json[i].pincode == code) {
        return data_json[i]
      }
    }
    return false
}

function PostCode(name) {
    for (var i = 0; i < data_json.length; i++) {
      if (data_json[i].officename == name) {
        return data_json[i]
      }
    }
    return false
}