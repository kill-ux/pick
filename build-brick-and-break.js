/**
 * 
 * @param {int} num 
 */
export const build = (num) => {
    let i = 1
    setInterval(() => {
        if (i > num) {
            return
        }
        const brick = document.createElement("div")
        brick.id = "brick-" + i
        brick.textContent = i
        if ((i + 1) % 3 == 0) {
            brick.dataset.foundation = true
        }
        document.body.append(brick)
        i++
    }, 100);
}

export const repair = (...ids) => {
    ids.forEach((id) => {
        let brick = document.getElementById(id)
        if (brick.dataset.foundation) {
            brick.dataset.repaired = "in progress"
        } else {
            brick.dataset.repaired = true
        }
    })
    console.log(ids)
}

export const destroy = () => { 
    document.body.lastElementChild.remove()
}