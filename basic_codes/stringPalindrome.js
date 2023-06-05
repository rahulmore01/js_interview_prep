// use this for strings ""

var named = "madam";

var check = named.split("").reverse().join("");

check === named ? (check = "its palindrome") : (check = "not palindrome");
console.log(check);
