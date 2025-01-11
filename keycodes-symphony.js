export const compose = () => {
    document.addEventListener("keydown", (event) => {
        let key = event.key
        switch (key) {
            case "Backspace":
                document.body.lastElementChild.remove()
                break
            case "Escape":
                document.body.querySelectorAll("div").forEach((e) => e.remove())
                break
            default:
                let div = document.createElement("div")
                div.className = "note"
                div.textContent = key
                const ascii = key.charCodeAt(0)
                div.style.backgroundColor = `rgb(${(ascii*2) % 256}, ${(ascii%50) % 256}, ${(ascii*3) % 256})`
                document.body.append(div)
        }
    })
}