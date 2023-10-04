// Code your solutions in this file
function writeCards(name, event){
    const thankYouMessage = [];
    for(let i = 0; i < name.length; i++) {
     thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessage;
}

function countDown(number){
 while(number>=0){
 console.log(number)
 number--;
 }
}