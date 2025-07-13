const args = process.argv.slice(2)
const startingNumber = args[0];
let factorialValue = 1;
factorial(startingNumber);


function factorial (fact){

    if(fact === NaN){
        factorialValue = 1
        console.log(factorialValue);       
    } else {
        for (let i = startingNumber; i > 0; i--){
            factorialValue = factorialValue * i
        }

        console.log(factorialValue);
        
    }
    
}