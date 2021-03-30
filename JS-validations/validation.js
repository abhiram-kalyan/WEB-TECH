function validateForm(Form){
    
    
    let email = Form.email;
    let mobile = Form.mobile;

    console.log(email, mobile);

    var mobileFormat = /^\d{10}$/;
    if(mobile.value.match(mobileFormat)) {
        
    } else {
        alert("Not a valid Phone Number");
    }

    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mailFormat)) {
        
        
    } else {
        alert("You have entered an invalid email address!");
        document.registrationform.emailid.focus();
    }
}