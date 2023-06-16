let data
function dataIsReady(csv) { 
    data = csv
    update()
}

function transformRow(data) {
    return {
        id: data.id,
        name: data.name,
        oilgascoal: parseFloat(data.oilgascoal),
        nuclear: parseFloat(data.nuclear),
        hydroelectric: parseFloat(data.hydroelectric),
        renewable: parseFloat(data.renewable)
    }
}

data = d3.csv('data/data.csv', transformRow)
    .then(dataIsReady)





  
