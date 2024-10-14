// function display(){
//     console.log("hello")
// }
// let x=14;
// console.log(typeof x);
// display();

function validate()
{
    let un = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    if(un=='admin' && pass== "admin"){
        alert("login success");
    }
    else{
        alert("invalid username or password");
    }
}