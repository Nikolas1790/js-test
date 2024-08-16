console.log("first")
console.log("second")

setTimeout(function(){
    console.log("fourth")
}, 0)

Promise.resolve().then(()=>{
    console.log("fifth")
})

for(let i=0; i<1000; i++){
    console.log(i)
}

console.log("third")
