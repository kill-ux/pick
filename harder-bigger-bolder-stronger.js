export const generateLetters = () => {
    let str = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
    for (let index = 0; index < 120; index++) {
        const letter = document.createElement("div")
        const ranlet = str[Math.floor(Math.random() * str.length)]
        letter.textContent = ranlet
        letter.style.fontSize = 11+index + "px"
        letter.style.fontWeight = (index < 40) ? 300 :( index < 80) ? 400 : 600
        document.body.append(letter)
    }
} 