function saveTolocalStorage(event){
    event.preventDefault();
    let name=event.target.Username.value;
    let email=event.target.emailId.value;
    let phonenumber=event.target.phonenumber.value;
    let dob=event.target.dob.value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phonenumber",phonenumber); 
    localStorage.setItem("dob",dob);



}
