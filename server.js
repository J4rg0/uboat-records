const express = require('express')
const app = express()
const PORT = 8000

const uboats = {
    'u-1': {
        'launched': '15 Jun 1935',
        'career': '2 patrols',
        'successes': 'No ships sunk or damaged',
        'fate': 'Sunk 6 April 1940 in the North Sea north of Terschelling by a mine. 24 dead (all hands lost).'
    },
    'u-2': {
        'launched': '1 Jul 1935',
        'career': '2 patrols',
        'successes': 'No ships sunk or damaged',
        'fate': 'Sank 8 April 1944 in the Baltic Sea north of Pillau after a collision with the German steam trawler Helmi Söhle. 17 dead and 18 survivors.'
    },
    'unknown': {
        'launched': 'Unknown',
        'career': 'Unknown',
        'successes': 'Unknown',
        'fate': 'Unknown'
    }
}
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const uboatName = request.params.name.toLowerCase()
    if( uboats[uboatName]){
        response.json(uboats[uboatName])
    }else{
        response.json(uboats['unknown'])
    }
    
})