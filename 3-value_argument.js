const passedArguments  = process.argv.slice(2)
console.log(passedArguments);

if(!passedArguments[0]){
    console.log("No argument");    
}  else {
    console.log(`${passedArguments[0]}`);
    
}