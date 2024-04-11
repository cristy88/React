import axios from 'axios'

export const getGoods = () => {
  return axios.get('https://zyxcl.xyz/exam_api/goods')
}