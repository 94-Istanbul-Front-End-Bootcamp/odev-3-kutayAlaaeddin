function onayla() {
    var pw = document.getElementById("pw").value;
    var un= document.getElementById("un").value;
    var mail= document.getElementById("mail").value;
    var cb= document.getElementById("cb").value;

    if(pw === "") {
       document.getElementById("pwErrMsg").innerHTML='* Lütfen kontrol ederek tekrar girin'

    }
    if(un=== "") {
        document.getElementById("unErrMsg").innerHTML='* Lütfen kontrol ederek tekrar girin'
 
     }
     if(mail=== "") {
        document.getElementById("mailErrMsg").innerHTML='* Lütfen kontrol ederek tekrar girin'
 
     }
     if(cb.checked === false) {
        document.getElementById("cbErroMsg").innerHTML='* Lütfen kontrol ederek tekrar girin'
 
     }
//    //minimum password length validation
//     if(pw.length < 8) {
//        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
//        return false;
//     }
  
//   //maximum length of password validation
//     if(pw.length > 15) {
//        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
//        return false;
//     } else {
//        alert("Password is correct");
//     }
  }