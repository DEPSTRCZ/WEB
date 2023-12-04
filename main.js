console.log("Hello World\nThe time is:",new Date().toLocaleString());

const n = 5
let out = ""
for (i = 1; i <= 10; i++) {
    const num = n*i
    
    if (num < 9) out+="0"
    out+=`${num}`
    if (i < 10 ) out+="-"
}
console.log(out.slice(0,out.length))
