// Code your solutions in this file
function writeCards(array, string){
    let thankArray = [];
    array.forEach(element =>{
        const card = `Thank you, ` + element +`, for the wonderful ${string} gift!`;
        thankArray.push(card);
    });
    return thankArray;
}

function countDown(num){
    let count = num;
    while(count>=0){
        console.log(count);
        count--
    }
}