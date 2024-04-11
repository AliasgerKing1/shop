import * as yup from "yup"

let msg = "Feild required!"
let productSchema = yup.object({
    name : yup.string().required(msg),
    price : yup.string().required(msg),
    bprice : yup.string().required(msg),
    size : yup.string().required(msg),
    category : yup.string().required(msg),
    root_category : yup.string().required(msg),
    quantity : yup.string().required(msg),
})

export default productSchema