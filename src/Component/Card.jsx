import { useState, useEffect } from 'react'
import ListItem from './Listitem'
import { Grid } from '@chakra-ui/react'

const Card = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    console.log(data.length);
    async function getData() {
        let response = await fetch("https://gumstack-task-production.up.railway.app/api/v1/cities")
        let { data } = await response.json()
        console.log(data);
        setData(data)
    }
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {data.length && data.map((content, index) => (
                    <ListItem key={index} content={content} />
                ))}
            </Grid>
        </div>
    )
}

export default Card
