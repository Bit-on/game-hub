import axios from "axios"; 

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '71d507e3c92a4eccbbc881a6ee65ccac'
    }
})