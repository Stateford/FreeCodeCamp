function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  test = test.split('');
  target = target.split('');
  for (var i = 0; i < test.length; i++) {
    var check = target.indexOf(test[i]);
    if (check < 0)
      return false;
  }
  return true;
 }



//    debugging


console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
