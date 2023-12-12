console.log("Hello World\nThe time is:",new Date().toLocaleString());
/*
const n = 5
let out = ""
for (i = 1; i <= 10; i++) {
    const num = n*i
    
    if (num < 9) out+="0"
    out+=`${num}`
    if (i < 10 ) out+="-"
}
console.log(out.slice(0,out.length))
*/

const lines = 5
const size = 13
for (i = 0  ; i < lines; i++) {
    let elem = i.toString().padStart(size,"0")+"-"
    let spacing = "-".repeat((lines-i-1)*(Math.round(size/2)))
    let elements = elem.repeat(i+1)
    console.log(spacing+elements)
}

//pascaluv trojuhelnik
