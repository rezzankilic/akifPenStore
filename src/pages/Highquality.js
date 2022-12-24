import React, {useState, useEffect, useCallback} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ProductList from '../components/ProductList'
import { useFetch } from '../Hooks/useFetch'

export default function Highquality() {

    const [newArray, setNewArray] = useState([])
    const [url, setUrl] = useState('http://127.0.0.1:8000/api/akifpenstore/')
    const {data : products, isPending, error} = useFetch(url, {type: "gen"})

    const fetchProducts = useCallback (async () => {
        const response = await fetch(url)
        const json = await response.json()
        setNewArray(json.products)    
    }, [url])

    useEffect(() => {
          fetchProducts()
      }, [fetchProducts])

    const filteredArray = newArray.filter(item => item.type.includes("Highquality"))

  return (
    <div>
        <BreadCrumb page='High Quality Designer Pens' />
        <ProductList newArray={filteredArray} heading={'High Quality Designer Pens'} />  
    </div>
  )
}
