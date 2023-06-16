function getTruncatedLabel(label) {
    return label.length > 10 ? label.slice(0, 10) + '...' : label
}

function layout(data) {
    let labelHeight = 20
    let cellWidth = config.width / config.numColumns
    let cellHeight = cellWidth + labelHeight
    let maxRadius = 0.35 * cellWidth
    console.log(data)

    let radiusScale = d3.scaleSqrt().domain([0, 100]).range([0, maxRadius])
    let layoutData = data.map(function(d, i) { 
        let column = i % config.numColumns
        let row = Math.floor(i / config.numColumns)

        let item = {}
        item.x = column * cellWidth + 0.5 * cellWidth
        item.y = row * cellHeight + 0.5 * cellHeight
        item.labelText = getTruncatedLabel(d.name)
        item.labelOffset = maxRadius + labelHeight
        item.oilGasCoalRadius = radiusScale(d.oilgascoal)
        item.hydroelectricRadius = radiusScale(d.hydroelectric)
        item.nuclearRadius = radiusScale(d.nuclear)
        item.renewableRadius = radiusScale(d.renewable)

        console.log(item)
        return item
    })
        return layoutData
}
