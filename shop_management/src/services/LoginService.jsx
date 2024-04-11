import axios from "axios"

let apiUrl = "http://localhost:4019/api/admin/"

let Login = async (credentials) => {
return await axios.post(apiUrl, credentials)
}
// let currentAdmin = async (id) => {
// return await axios.get(`${apiUrl}${id}`)
// }
let currentAdmin = async (token) => {
return await axios.get(apiUrl, {headers : {token}})
}

export { Login, currentAdmin}