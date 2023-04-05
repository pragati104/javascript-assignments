//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileName  = "pragti.js";
let h = 0;
for(let i = 0; i<fileName.length;i++){
    if(fileName[i] === "."){
        h = i
    }
}
console.log(fileName.slice(h+1,));