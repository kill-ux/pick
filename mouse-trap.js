
// let isInside = false;
// export const createCircle = () => {
//     document.addEventListener("click", (e) => {
//         let div = document.createElement("div")
//         div.style.left = e.clientX - 25 + "px"
//         div.style.top = e.clientY - 25 + "px"
//         div.classList.add("circle", "move")
//         div.style.pointerEvents = "none"
//         //
//         let boxRect = document.getElementsByClassName("box")[0].getBoundingClientRect()
//         const isEntering =
//             e.clientX - 25- 1 > boxRect.left  &&
//             e.clientY - 25 -1 > boxRect.top  &&
//             e.clientX + 25 < boxRect.right +1 &&
//             e.clientY + 25 < boxRect.bottom +1    ;
//         if (isEntering) {
//             div.style.backgroundColor = "var(--purple)"
//         } else {
//             div.style.backgroundColor = "white"
//         }
//         //
//         document.body.append(div)
//         isInside = false
//     })
// }

// export const moveCircle = () => {
//     document.addEventListener("mousemove", (e) => {
//         const circles = document.querySelectorAll(".circle")
//         if (circles.length > 0) {
//             let lastcircle = circles[circles.length - 1]
//             if (lastcircle.classList.contains("move")) {
//                 lastcircle.style.left = e.clientX - 25 + "px"
//                 lastcircle.style.top = e.clientY - 25 + "px"
//             }
//         }
//     })
// }


// export const setBox = () => {
//     const box = document.createElement("div");
//     box.className = "box";
//     document.body.append(box);
//     document.addEventListener("mousemove", (e) => {
//         const boxRect = box.getBoundingClientRect();
//         const circles = document.querySelectorAll(".circle");
//         if (circles.length > 0) {
//             const lastCircle = circles[circles.length - 1];
//             const circleRect = lastCircle.getBoundingClientRect();
//             const isEntering =
//                 circleRect.bottom + 2 < boxRect.bottom &&
//                 circleRect.right + 1 < boxRect.right &&
//                 circleRect.left - 1 > boxRect.left &&
//                 circleRect.top - 2 > boxRect.top;
//             if (isEntering) {
//                 isInside = true;
//                 lastCircle.style.backgroundColor = "var(--purple)";
//             }
//             if (isInside && isEntering) {
//                 lastCircle.classList.add("move");
//             }
//             if (isInside && !isEntering) {
//                 lastCircle.classList.remove("move");
//                 lastCircle.style.left = `${Math.max(
//                     boxRect.left + 1,
//                     Math.min(boxRect.right - 50 - 1, e.clientX - 25 - 1)
//                 )}px`;
//                 lastCircle.style.top = `${Math.max(
//                     boxRect.top + 2,
//                     Math.min(boxRect.bottom - 50 - 2, e.clientY - 25 - 1)
//                 )}px`;
//             }
//         }
//     })
// }


export const createCircle = () => {
    document.addEventListener("click", (event) => {
        const lastCircle = document.querySelector(".move")
        if (lastCircle !== null) {
            lastCircle.classList.remove("move")
        }
        const circle = document.createElement("div")
        circle.classList = ["circle move"]
        const boxInfo = document.querySelector(".box").getBoundingClientRect()
        if (((event.clientY + 25)<Math.floor(boxInfo.bottom) && (event.clientY - 25)>Math.ceil(boxInfo.top)) && ((event.clientX + 25)<Math.floor(boxInfo.right) && (event.clientX - 25)>Math.ceil(boxInfo.left))){
            circle.style.background = "var(--purple)"
        }else{
            circle.style.background = "white"

        }
        circle.style.left = event.clientX - 25 + "px"
        circle.style.top = event.clientY - 25 + "px"
        document.body.append(circle)
    })

}
export const moveCircle = () => {
    document.addEventListener("mousemove", (event) => {
        const lastCircle = document.querySelectorAll(".circle")[document.querySelectorAll(".circle").length - 1]
        if (lastCircle != null) {
            const lastCircleInfo = lastCircle.getBoundingClientRect();
            const boxInfo = document.querySelector(".box").getBoundingClientRect()
            if (((event.clientY + 25)<Math.floor(boxInfo.bottom) && (event.clientY - 25)>Math.ceil(boxInfo.top)) && ((event.clientX + 25)<Math.floor(boxInfo.right) && (event.clientX - 25)>Math.ceil(boxInfo.left))){
                lastCircle.style.background = "var(--purple)"
                lastCircle.classList.remove("move")
            }
    
        }
        if (lastCircle != null) {
            if (lastCircle.classList.contains("move")) {
                lastCircle.style.left = event.clientX - 25 + "px"
                lastCircle.style.top = event.clientY - 25 + "px"
            } else {
                const boxInfo = document.querySelector(".box").getBoundingClientRect()
                const lastCircleInfo = lastCircle.getBoundingClientRect();
                let newTop = event.clientY - 25; 
                let newLeft = event.clientX - 25; 

                if (newLeft < Math.ceil(boxInfo.left)+1) {
                    newLeft = Math.ceil(boxInfo.left)+1; 
                } else if (newLeft + lastCircleInfo.width > Math.floor(boxInfo.right)-1) {
                    newLeft = Math.floor(boxInfo.right)-1- lastCircleInfo.width; 
                }

                if (newTop < Math.ceil(boxInfo.top)+1) {
                    newTop = Math.ceil(boxInfo.top)+1;
                } else if (newTop + lastCircleInfo.height > Math.floor(boxInfo.bottom)-1) {
                    newTop = Math.floor(boxInfo.bottom)-1 - lastCircleInfo.height; 
                }

                lastCircle.style.top = newTop+"px";
                lastCircle.style.left = newLeft+"px";
            }
        }
    })

}

export const setBox = () => {
    const box = document.createElement("div")
    box.className = "box"
    document.body.append(box)
}