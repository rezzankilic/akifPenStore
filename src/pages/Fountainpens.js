import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import ProductList from '../components/ProductList';
import { useFetch } from '../Hooks/useFetch';

export default function FountainPens(){

    const [title, setTitle] = useState();
    const [selectedOptionId, setSelectedOptionId] = useState('1')
    const [newProducts, setNewProducts] = useState([]);
    const [url, setUrl] = useState('http://127.0.0.1:8000/api/akifpenstore/');
    const {data : products, isPending, error} = useFetch(url, {type: "gen"});

    const navigate = useNavigate();
 
    const fetchProducts = useCallback (async () => {
            const response = await fetch(url);
            const json = await response.json();
            setNewProducts(json.products);
            
    }, [url]);
  
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);


    const filteredArray = newProducts.filter(item => item.description.includes("Fountain"));

    function handleChange(e){
        e.preventDefault();
        if (e.target.value == "1") {
                navigate('/fountainpens');
            } else if (e.target.value == "2") {
                navigate('/rollerballpens');  
            } else if (e.target.value == 'A') {
                navigate('/pens')
            }
        }


  return (
    <>
        <div>
        <BreadCrumb page='Pens' productType='Fountain Pens' />
        </div>

        <div className='grid grid-cols-1 gap-2 place-items-center my-2 object-center'>
            <label className="block text-sm font-medium text-black-900 dark:text-black">Select an option</label>
            <select defaultValue={selectedOptionId} className= "bg-stone-50 border border-gray-500 text-gray-500 text-sm rounded-md border-gray-500 " 
                title={title} onChange={handleChange}>
                <option value="A">All</option>
                <option value="1">Fountain Pens</option>
                <option value="2">Rollerball Pens</option>
            </select>
        </div>

        <div>
            <ProductList newArray={filteredArray} heading={'Fountain Pens'} />
        </div>
    </>
  );
}