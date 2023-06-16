function update() {
    let layoutData = layout(data)
    console.log("update")
    d3.select('#chart')
      .selectAll('circle')
      .data(layoutData)
      .join('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.radius)
}