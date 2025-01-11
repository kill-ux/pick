export const pick = () => {
    //
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    //
    const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line")
    lineX.setAttribute("y1", "0")
    lineX.setAttribute("y2", "100%")
    lineX.id = "axisX"
    //
    const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line")
    lineY.setAttribute("x1", "0")
    lineY.setAttribute("x2", "100%")
    lineY.id = "axisY"
    //
    const hsl = document.createElement("div")
    hsl.className = "hsl"
    //
    const hue = document.createElement("div")
    hue.classList.add("text", "hue")
    //
    const luminosity = document.createElement("div")
    luminosity.classList.add("text", "luminosity")
    //
    svg.append(lineX, lineY)
    document.body.append(svg, hsl, hue, luminosity)
    document.addEventListener("mousemove", (event) => {
        lineX.setAttribute("x1", event.clientX)
        lineX.setAttribute("x2", event.clientX)
        lineY.setAttribute("y1", event.clientY)
        lineY.setAttribute("y2", event.clientY)
        let x = Math.round(event.clientX) % 360 + 1
        let y = Math.round(event.clientY) % 100 + 1
        hsl.textContent = `hsl(${x}, 50%, ${y}%)`
        hue.textContent = `hue\n${x}`
        luminosity.textContent = `${y}\nluminosityue`
        document.body.style.background = `hsl(${x}, 50%, ${y}%)`
    })
    document.addEventListener("click", () => {
        navigator.clipboard.writeText(hsl.textContent)
    })
}