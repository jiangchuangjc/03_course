var  numbers = [5, 458 , 120 , -215 ]; 
var  maxInNumbers = Math.max.apply(this, numbers);  
console.log(maxInNumbers);  // 458
var maxInNumbers = Math.max.call(this,5, 458 , 120 , -215); 
console.log(maxInNumbers);  // 458
