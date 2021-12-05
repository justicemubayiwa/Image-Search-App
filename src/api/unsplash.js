import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID OkKpSYwzSXjBWtIW6e6JaK82q4rsQWYdbG5-jXlNCPA'
    }  
})