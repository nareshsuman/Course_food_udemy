import { useEffect, useState } from 'react'
import lmsApi from '../api/lms'

export default () => {
    const [courses, setCourses] = useState([])
    const [errMsg, setErrMsg] = useState(null)
    const Query = `?skip=0&limit=50&status=&status=Active&p_min=-1&p_max=30000&sort=createdAt&sortType=desc`
    const onTermSubmit = (searchString) => {
        lmsApi.get(Query + `&Search=${searchString}`).then(({ data }) => {
            setCourses(data.data)
        }).catch(err => {

            setErrMsg(`something went wrong${err}`)
        });
    }
    useEffect(() => {
        onTermSubmit('')
    }, [])

    return [courses, errMsg, onTermSubmit]
}