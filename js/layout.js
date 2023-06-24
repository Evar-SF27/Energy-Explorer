function sortAccesor(data) {
    let value = data[state.selectedIndicator]
    if (isNaN(value)) { value = 0 }
    return value
}

function getSortedData(data) {
    let sorted

    if (state.selectedIndicator === 'country') {
        sorted = _.orderBy(data, 'name')
    } else {
        sorted = _.orderBy(data, sortAccesor, 'desc')
    }

    return sorted
}

function isVisible(data) { 
    return state.selectedIndicator === 'country' || data[state.selectedIndicator] > 0
}

function getTruncatedLabel(label) {
    return label.length > 10 ? label.slice(0, 10) + '...' : label
}

function getMaxRadius() {
    let cellWidth = config.width / config.numColumns
    let maxRadius = 0.35 * cellWidth
    
    return maxRadius
}

function layout(data) {
    let labelHeight = 20
    let cellWidth = config.width / config.numColumns
    let cellHeight = cellWidth + labelHeight
    let maxRadius = getMaxRadius()

    let radiusScale = d3.scaleSqrt().domain([0, 100]).range([0, maxRadius])

    let sortedData = getSortedData(data)
    let layoutData = sortedData.map(function(d, i) { 
        let column = i % config.numColumns
        let row = Math.floor(i / config.numColumns)

        let item = {}
        item.id = d.id
        item.x = column * cellWidth + 0.5 * cellWidth
        item.y = row * cellHeight + 0.5 * cellHeight
        item.visible = isVisible(d)
        item.labelText = getTruncatedLabel(d.name)
        item.labelOffset = maxRadius + labelHeight
        item.oilGasCoalRadius = radiusScale(d.oilgascoal)
        item.hydroelectricRadius = radiusScale(d.hydroelectric)
        item.nuclearRadius = radiusScale(d.nuclear)
        item.renewableRadius = radiusScale(d.renewable)

        item.popupOffset = -0.8 * maxRadius
        item.popupData = {
            name: d.name,
            renewable: d.renewable,
            oilgascoal: d.oilgascoal,
            hydroelectric: d.hydroelectric,
            nuclear: d.nuclear
        }

        return item
    })
        return layoutData
}
