const obj = {
    math:50,
    science:60,
    gk:40
}

let total = 0;

for (const key in obj) {
    total += obj[key] 
       }
   
       console.log(total)

//OR


// let marks = Object.values(obj)

// marks.forEach((item)=>{
//     total += item
// })
// console.log(total)





