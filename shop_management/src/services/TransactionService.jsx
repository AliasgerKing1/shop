import axios from "axios"

let apiUrl = "http://localhost:4019/api/transaction/"

let addTransaction = async (trans) => {
  return await axios.post(apiUrl, trans)
}

export {addTransaction}