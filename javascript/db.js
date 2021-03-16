const users = JSON.parse(localStorage.getItem('users'));
//check the user is find in our array or no
function checkuser(user,pass){
    var result=false;
 for(var i=0;i<users.length;i++){
     var one=users[i];
    if (one.name===user&&one.password===pass)
    result=true;
 }
 return result;
}
//function creat a account
$("#subsigenup").unbind().click(function () {
    

    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    var y1=document.getElementById("conpass").value;

    if(checkuser(x,y)){
        alert("user name is exist try another one")

    }
    else if(y!==y1){
        alert("check your password again")
    }
    else{
        var user={}
        user.name=x;
        user.password=y;
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
    }
    });
    //function to login
    $("#sublogin").unbind().click(function () {
    

        var x = document.getElementById("username").value;
        var y = document.getElementById("userpass").value;
    
        if(checkuser(x,y)){
            location.replace("file:///C:/Users/AchrefPC/Desktop/my1proj/html/Home.html")
    
        }
        else {
            alert("check your user name / password or you are not sign up !")
        }
        });

        
         // move to enjoy page 
         function enjoys() {
            event.preventDefault();
            location.replace("file:///C:/Users/AchrefPC/Desktop/my1proj/html/face.html")
         }