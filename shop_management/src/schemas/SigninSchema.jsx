import * as yup from "yup"

let msg = "Field required!"
let signinSchema = yup.object({
    username : yup.string().required(msg),
    password : yup.string().required(msg),
})

export default signinSchema