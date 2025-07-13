const passedArguments  = process.argv.slice(2)

if(!passedArguments[0]){
    console.log("No argument");    
}  else {
    console.log(passedArguments[0]);
    
}