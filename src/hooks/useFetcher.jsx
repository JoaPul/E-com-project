import useSWR from 'swr'
import axios from 'axios'
// checa documentacion de swr, link en google sheets

const fetcher = (url) => axios.get(url).then(res => res.data).catch(error => console.log(error))

const useFetcher = (baseUrl) => {
  return useSWR(baseUrl, fetcher, { suspense: true })
}

export default useFetcher
