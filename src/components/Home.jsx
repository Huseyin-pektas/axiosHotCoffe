import axios from "axios"
import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"


const Home = () => {

    const [coffe, setCoffe] = useState([])

    useEffect(() => {
        axios.get("https://api.sampleapis.com/coffee/hot")
            .then((res) => setCoffe(res.data))

    }, [])

    
    return (
        <div className='user-list'>
      <ul>
        {coffe.map((coffe) => (
          <li>
            <ProductDetail coffe={coffe} key={coffe.id} />
          </li>
        ))}
      </ul>
    </div>
    )
}

export default Home