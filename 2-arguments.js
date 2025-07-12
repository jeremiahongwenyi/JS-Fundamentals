const args = process.argv.slice(2); // slice off node and script path

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
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