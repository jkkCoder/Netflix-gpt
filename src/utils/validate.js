export const checkValidData = (email, password, shouldValidateName=false, fullName="") => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(shouldValidateName && fullName.length <=3) return "Enter name of atleast 3 characters"
    if(!isEmailValid)   return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null;
}