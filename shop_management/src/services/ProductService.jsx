import axios from "axios"

let apiUrl = "http://localhost:4019/api/product/"

let addProduct = async (prod) => {
return await axios.post(apiUrl, prod)
}
let updateProduct = async (id, prod) => {
return await axios.put(`${apiUrl}${id}`, prod)
}
let getProducts = async () => {
return await axios.get(apiUrl)
}
let getProductById = async (id) => {
return await axios.get(`${apiUrl}${id}`)
}
let setProductQty = async (id, qty) => {
return await axios.put(`${apiUrl}qty/${id}`, qty)
}

let deleteProduct = async (id) => {
    return axios.delete(`${apiUrl}${id}`)
}
export { addProduct, getProducts, getProductById, updateProduct, setProductQty, deleteProduct}