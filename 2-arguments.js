const argumentsPassed = ['a', 'b', 8];
arguments(argumentsPassed)

function arguments (argumentsPassed){
if(argumentsPassed.length  === 0){
     console.log("No argument");
} else if (argumentsPassed.length === 1){
    console.log("Argument found")

} else {
    console.log("Arguments found")
}
}



// switch(argumentLength){
//     case 0:
//         console.log("No argument");
//         break;
//         case 1:
//             console.log("Argument found");
//             break;
//             default :
//             console.log("Arguments found");
//         }