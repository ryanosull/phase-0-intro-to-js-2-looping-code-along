/*function writeCards(name, event){
    const newArray = []
    for(let i = 0 ; i < name.length; i++){
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
*/
//  
function countDown(n){
    while (n >= 0){
    console.log(n--)
    }
}
//
function writeCards(name, event){
    const newArray = []
    for(let i = 0; i < name.length; i++)
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    return newArray
}

///////////////////

// function writeCards(names, party){

//     const surprise = [];
//     for (let i = 0; i < names.length; i++) {
//     const newString = (`Thank you, ${names[i]}, for the wonderful ${party} gift!`)
//     surprise.push(newString);
    
//     }
//     return surprise;
// }
