const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Shèyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'j cole':{
        'age': 37,
        'birthName':'Jermaine Cole',
        'birthLocation': 'Frankfurt, Germany'
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylon':{
        'age': 29,
        'birthName':'Dylon Dylon',
        'birthLocation': 'Dylon'
    }
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylon'])
    }
    // response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})