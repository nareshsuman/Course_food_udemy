import axios from 'axios'

export default axios.create({
    baseURL:"https://lms-video-staging.tidbitlab.com/api/e-commerce/visit/courses",
    headers: {
        'Content-Type': 'application/json',
    }
})