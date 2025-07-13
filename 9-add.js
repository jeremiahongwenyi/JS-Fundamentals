const args = process.argv.slice(2)
const [a,b,] = args;
addIntegers(a,b)


function addIntegers (first,second){

    console.log(parseInt(first) + parseInt(second));
    
}
