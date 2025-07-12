const argumentsPassed = ['a', 'b', 8];
const argumentLength = argumentsPassed.length

if(argumentLength === 0){
     console.log("No argument");
} else if (argumentLength === 1){
    console.log("Argument found")

} else {
    console.log("Arguments found")
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