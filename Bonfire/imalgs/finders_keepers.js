function findElement(arr, func) {
  var num = 0;
  let foo = arr.filter(func());
  console.log(foo);
  return num;
}

// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // should return 8.