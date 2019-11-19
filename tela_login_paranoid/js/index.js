document.getElementById("submit").onclick = function(){

    var valoruse = document.getElementById("user_field").value;
    var valorpassword = document.getElementById("password_field").value;

    if (valoruse == "" && valorpassword == "") {
        document.getElementById("error_message").innerHTML = "Campo usuário não preenchido!\nCampo senha não preenchido!"
    } 
    if (valoruse == "" && valorpassword != "") {
        document.getElementById("error_message").innerHTML = "Campo usuário não preenchido!"
    }
    if (valorpassword == "" && valoruse != "") {
        document.getElementById("error_message").innerHTML = "Campo senha não preenchido!"
    } else {
        document.getElementById("success_message").innerHTML = "<p> Aguarde...</p>"
    }
}