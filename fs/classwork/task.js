 const file = require('fs');

file.writeFile('./classwork/task.txt', 'this is written into empty text file', (err)=>{
    if (err) throw err

    file.readFile('./classwork/task.txt', (err, result)=>{
        if (err) throw err

    console.log(result.toString());
    });
})