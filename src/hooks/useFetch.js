import { useEffect, useState } from "react"
import axios from "axios"

export default function fetch (URL) {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    
    return data
}
