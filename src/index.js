// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
     
	let coins = [50,  25,   10,  5,   1 ];
	let coinsCode = ['H', 'Q', 'D', 'N', 'P'];
	let result = {};
    

	if (currency > 10000) {
		return  { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
		
    }
    
	if (currency <= 0) {
        return {};
    }

    for(let i=0; i<=4; i++){
      let b = coins[i];
      let c = coinsCode[i];    

      while(Math.floor(currency/b) >= 1){ 
        result[c] = Math.floor(currency/b)
        currency = currency - b*result[c];
      }
    }
    return result;

}
