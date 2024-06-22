document.getElementById("submitBtn").addEventListener("click", function(event){
    var x = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(x)) {
        var errors = document.getElementsByClassName("error");
        for(var i = 0; i < errors.length; i++) {
            errors[i].style.display = "block";
        }
        event.preventDefault();
    }
});
