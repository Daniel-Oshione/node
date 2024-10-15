const file = require('fs');

//bellow takes in 3 value (file name, variable for error and variable for results)
// file.readFile('test.txt', (err, result)=>{
//     if(err) throw err

//     console.log(result.toString());
// });

//to write file
file.writeFile('test.txt', 'this is a test to edit the file', (err)=>{
    if (err) throw err

    console.log('successful edit!');
    
})