function test() {
var text;
var name = prompt("Please enter your name");
var pass = prompt("Please enter your password");

if (name == null || name == "" || pass == null || pass =="") {
        text = "you should write your name and password.";
    } 

else {
        text = "congratulation";
}
return text;
}
