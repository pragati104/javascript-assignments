num = 15
let count = 0
for(let i = 2; i<5;i++){
    if(num%i !== 0){
         count = 1
    }else{
        count = 0
    }
}

if(count === 1){
    console.log("prime number")
}else{
    console.log("not prime number")}