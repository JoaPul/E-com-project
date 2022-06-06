import axios from 'axios'

const allItemsUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'

const getItems = async () => {
  const req = await axios.get(allItemsUrl)
  return req
}

export { getItems }
