function destroyer(arr) {
  var remove = Array.prototype.slice.call(arguments);
  remove.splice(0, 1);
  return arr.filter(function(element) {
    return remove.indexOf(element) === -1;
  });
}