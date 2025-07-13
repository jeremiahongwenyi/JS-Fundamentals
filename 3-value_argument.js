const passedArguments  = process.argv.slice(2)
console.log(passedArguments);

if(passedArguments===0){
    console.log("No argument");    
} else if (passedArguments.length === 1){
    console.log("Argument found");    
} else {
    console.log("Arguments found");
    
}