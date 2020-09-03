//console.log(process.argv)
//console.log(process.argv.length)

var total = Number(0);

for(let i = 2; i < process.argv.length; i++){
    if(Number(process.argv[i])){
        total += Number(process.argv[i]);
    }
}

console.log(total);