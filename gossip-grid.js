import { gossips } from "./gossip-grid.data.js"

export const grid = () => {
    let form = document.createElement("form")
    form.className = "gossip"
    let textarea = document.createElement("textarea")
    textarea.id = "textarea"
    textarea.placeholder = "Got a gossip to share?"
    // textarea.
    let button = document.createElement("button")
    button.type = "submit"
    button.textContent = "Share gossip!"

    //
    let ranges = document.createElement("div")
    ranges.className = "ranges"

    let range1 = document.createElement("input")
    range1.type = "range"
    range1.className = "range"
    range1.id = "width"
    range1.min = "200"
    range1.max = "800"

    let range2 = document.createElement("input")
    range2.type = "range"
    range2.className = "range"
    range2.id = "fontSize"
    range2.min = "20"
    range2.max = "40"

    let range3 = document.createElement("input")
    range3.type = "range"
    range3.className = "range"
    range3.id = "background"
    range3.min = "20"
    range3.max = "75"

    ranges.append(range1, range2, range3)

    form.append(textarea, button)
    document.body.append(ranges, form)
    gossips.forEach((block) => {
        let div = document.createElement("div")
        div.className = "gossip"
        div.textContent = block
        document.body.append(div)
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let div = document.createElement("div")
        div.className = "gossip"
        div.textContent = textarea.value
        document.body.insertBefore(div, document.querySelector("div.gossip"))
    })

    range1.addEventListener("input", (event) => {
        let gos = document.querySelectorAll(".gossip")
        const newWidth = event.target.value + "px"
        gos.forEach((element) => {
            element.style.width = newWidth
        })
    })
    range2.addEventListener("input", (event) => {
        let gos = document.querySelectorAll(".gossip")
        const newWidth = event.target.value + "px"
        gos.forEach((element) => {
            element.style.fontSize = newWidth
        })
    })

    range3.addEventListener("input", (event) => {
        let gos = document.querySelectorAll(".gossip")
        const newWidth = event.target.value
        gos.forEach((element) => {
            element.style.background = `hsl(280, 50%, ${newWidth}%)`
            console.log(element)
        })
    })
}