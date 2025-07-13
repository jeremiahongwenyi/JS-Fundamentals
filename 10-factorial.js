const args = process.argv.slice(2)
const startingNumber = parseInt(args[0]);

let factorialValue  = factorial(startingNumber);


function factorial (fact){
    if(isNaN(fact) || fact === 0){
            return 1
    }  else {
        return fact * factorial(fact-1)   
    }    
}

console.log(factorialValue);
