var attempt = 3;
function validate(){
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    if( email == "terap" && password == "1234"){
        alert("Acceso exitoso");
        window.location = "index.html";
        return false;
    }
    else{
        attempt --;
        alert("Te restan "+attempt+" intentos;");
        if( attempt == 0){
            document.getElementById("inputEmail").disabled = true;
            document.getElementById("inputPassword").disabled = true;
            document.getElementsByClassName("btn btn-primary").disabled = true;
            return false;
        

    }
}
}