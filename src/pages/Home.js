import React from 'react'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import penhome from '../img/penhome.png'
import { useState, useCallback, useEffect } from 'react'
import { useFetch } from '../Hooks/useFetch'

export default function Home() {

    const [newArray, setNewArray] = useState([])
    const [url, setUrl] = useState('http://127.0.0.1:8000/api/akifpenstore/')
    const {data : products, isPending, error} = useFetch(url, {type: "gen"})
  
    const fetchProducts = useCallback (async () => {
        const response = await fetch(url)
        const json = await response.json()
        setNewArray(json.products)
        console.log(newArray)
    }, [url])
  
    useEffect(() => {
          fetchProducts()
      }, [fetchProducts])

  return (
    <div className='bg-gray-100'> 
        <h3 className="text-sm font-normal text-gray-500 ml-7 py-1 text-center lg:text-sm dark:text-gray-400">EST. 1993</h3>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-yellow-700 text-center md:text-5xl lg:text-6xl dark:text-gray">Arslan <mark className="px-2 text-yellow-600 bg-yellow-600 rounded dark:bg-gray-200">Pen</mark> Store</h1>
        <p className="text-lg font-normal text-gray-500 text-center border border-gray lg:text-xl dark:text-gray-400">Arslan's Luxery Pens convey emotions and feelings through the written word.</p>
        <img className='object-fill h-full w-full rounded-lg mt-8' src={penhome} alt='Pen' />

        <Navbar />
        
        <Category />

        <ProductList newArray={newArray}  heading={'New Arrivals'} />

        <Footer />
    </div>
  )
}
