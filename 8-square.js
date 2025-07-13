const args = process.argv.slice(2);
const firstArgument = parseInt(args[0]);

if (!firstArgument){
 console.log("Missing size");
 return
} else if (firstArgument < 0){
    return
} 

for (let i = 0; i < firstArgument; i++){
    console.log("X".repeat(firstArgument))
}



