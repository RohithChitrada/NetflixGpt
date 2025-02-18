export const checkValidData=(email,password)=>{

    const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid";

    if(!isPasswordValid) return "Password is not Valid";

    // if(isEmailValid && isPasswordValid) return "correct";
}
