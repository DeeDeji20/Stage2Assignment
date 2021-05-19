
function convertFarhToCelsius(num){
  //check
  if(num || typeof num ==='number' || typeof num === 'string'){
       const conversion= Number((num - 32) * 5/9).toFixed(4);
        console.log(conversion);
        return conversion;
  }else{
     console.log(`${num} is not a valid number but a/an ${typeof num}`);
     return `${num} is not a valid number but a/an ${typeof num}`;
  }
}
convertFarhToCelsius('100')