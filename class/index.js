//generating random otp numbers
const otpKeys = '0123456789';
const optLen = 10;
let otpValue = '';
for(let i = 0; i < optLen; i++){
    otpValue += otpKeys[Math.floor(Math.random() * 10)];
}
console.log(otpValue);


//generating random alpha numerical values
const alphaNums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphanumsLen = 20;
let value = '';
for(let i = 0; i < alphanumsLen; i++){
    value += alphaNums[Math.floor(Math.random() * alphaNums.length)];
}
console.log(value);

//arranging an array in descending order with arrow function
const numb = [8,10,5,7,2,94,64,3,7,14,59,-2];
numb.sort((b,a)=> a - b);
console.log(numb);

//arranging in ascending order
const numbers = [8,10,5,7,2,94,64,3,7,14,59,-2];
numbers.sort((y,z)=>{
if (y > z) return 1;
if (y < z) return -1;
return 0;
});
console.log(numbers);

//counter
let startCounter = 0;
let stopCounter = 10;
//  setInterval(() => {
//     for(let i = 0; i <= stopCounter; i++){
//         startCounter++;
//         console.log(startCounter);
//     }
//     console.log('stop!');
//     }, 1000);


//realtime counter
let output = setInterval(() =>{
    startCounter++
    console.log(startCounter);
    if(startCounter === stopCounter){
        clearInterval(output)
        console.log(`interval clear at: ${startCounter}`);
    } 
}, 1);