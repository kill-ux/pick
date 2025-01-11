import { styles } from "./pimp-my-style.data.js"

export const pimp = () => {
    let btn = document.getElementsByClassName("button")[0]
    if (!btn.classList.contains("unpimp")) {
        btn.classList.add(styles[btn.classList.length - 1])
        if (styles.length == btn.classList.length - 1) {
            btn.classList.add("unpimp")
        }
    } else {
        btn.classList.remove(styles[btn.classList.length - 3])
        if (btn.classList.length == 2) {
            btn.classList.remove("unpimp")
        }
    }
}