import * as Yup from "yup";

const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export const signupSchema = Yup.object({
    UserName: Yup.string().min(3).required("Please enter your valid UserName."),
    Email: Yup.string().email("Please enter valid email").required("Please enter your email"),
    Password: Yup.string()
    .matches(passwordRegex, "Please enter valid password.")
    .required("Please enter your password."),
}); 