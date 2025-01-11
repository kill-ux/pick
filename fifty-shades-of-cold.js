import { colors } from "./fifty-shades-of-cold.data.js"


export const generateClasses = () => {
    let sty = document.createElement("style")
    colors.forEach((color) => {
        sty.append(`.${color} { background : ${color}; }`)
    })
    document.head.append(sty)
}
export const generateColdShades = () => {
    let reg = /aqua|blue|turquoise|green|cyan|navy|purple/
    colors.forEach((color) => {
        if (reg.test(color)) {
            let divColor = document.createElement("div")
            divColor.textContent = color
            divColor.className = color
            document.body.append(divColor)
        }
    })
}
export const choseShade = (shade) => {
    let cls = document.body.querySelectorAll("div")
    cls.forEach((color) => {
        color.classList.replace(color.className, shade)
    })
}