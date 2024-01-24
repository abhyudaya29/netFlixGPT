export const checkValidateData = (email, password,userName) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{8,}$/.test(password);
    const isUserName=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName)
  
    // const errors = {};
  
    if (!isEmailValid) {
      return "email is not valid"
    }
  
    if (!isPasswordValid) {
      
        return "Password should be at least 8 characters long and include at least one digit, one lowercase letter, and one uppercase letter";
    }
    if(!isUserName){
        return "User name can only contain letters,numbers _ &- "
    }
  
    return  null;
  };
  