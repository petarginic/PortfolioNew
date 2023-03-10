import * as yup from "yup"


export const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("email must be valid").required("Email is required"),
    message: yup.string().required("Message is required"),
})