import axios from "axios"

const endpointURL = "https://683ec9f41cd60dca33dd1782.mockapi.io/books"

export const getListOfBooks = async({onSuccess, onError}) => {
  try{
const response = await axios.get(endpointURL)
onSuccess && onSuccess(response.data)
  }catch(error){
console.log("---------error---------",error)
onError && onError(error)
  }
  
}
export const getBookByID = async() => {
  try{
    const response = await axios.get(`${endpointURL}/3`)
  }catch(error){
console.log("---------error---------",error)
  }
  
}

export const deleteBookByID = async({onSuccess, onError, itemID}) => {
  try{
    const response = await axios.delete(`${endpointURL}/${itemID}`)
    onSuccess && onSuccess(response.data)
  }catch(error){
    console.log("error is :",error)
    onError && onError(error)
  }
}

export const createBook = async({onSuccess, onError, body}) => {
  try{
    const response = await axios.post(endpointURL, body)
    onSuccess && onSuccess(response.data)
  }catch(error){
    console.log("error is :",error)
    onError && onError(error)
  }
}

export const updateBook = async({onSuccess, onError, body, itemID}) => {
  try{
    const response = await axios.put(`${endpointURL}/${itemID}`, body)
    onSuccess && onSuccess(response.data)
  }catch(error){
    console.log("error is :",error)
    onError && onError(error)
  }
}