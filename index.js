function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;
    localStorage.setItem('Username', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phonenumber);
  }
  
  module.exports=saveToLocalStorage;
