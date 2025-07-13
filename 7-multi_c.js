const args = process.argv.slice(2)
const toNumber = parseInt(args[0])
let i = 0

if(!toNumber){
    console.log("Missing number of occurrences");   
} else {
    while (i<toNumber){
        console.log("C is fun");
        i++;
    }
}