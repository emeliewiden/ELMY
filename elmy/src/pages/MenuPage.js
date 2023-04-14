import { useState, useEffect } from 'react'
import MenuProps from '../components/MenuProps'

function ListSection() {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch('test.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    //

    // Kollar om data har någon data innan rendering
    if (!data.length) {
        return <div>Loading data...</div>
    }

    return (
        <div>
            <ol>
                <h1 className='MenuText'>MENU</h1>
                {data.map((item) => (
                    <li key={item.id}>
                        <div>
                            <div className='ListName'>{item.name}</div>
                            {item.infotext}
                            <div className='ListPrice'>{item.price}</div>
                        </div>
                    </li>
                ))}
            </ol>
            <MenuProps text="Our burgers are always made with 100% prime rib and are served as a meal" />
        </div>
    )
}

export default ListSection
