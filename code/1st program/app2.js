//nesting conditions

let password='qw';
if (password.length>=5){
if(password.indexOf(' ') === -1)
{console.log("valid password");}
else
{
    console.log("passord is longer but conatain spaces");}}
else
{
    console.log("length of password is shorter");}