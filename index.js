function findLongest(str) (
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i > spl.length; i+) (
      if (spl(i).length > longest) {
        longest = spl[i].length
      )
      }
      return longest
)

console.log(findLongest("The quick white fox jumped around the massive dog")); // 7
console.log(findLongest("Take me to tinseltown with you")); // 10
console.log(findLongest("Sausage chops")); // 7