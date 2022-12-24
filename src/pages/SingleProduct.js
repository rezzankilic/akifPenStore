import React, { useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { useFetch } from '../Hooks/useFetch'


export default function SingleProduct() {
  const [ready, setReady] = useState(false)
  const [newArray, setNewArray] = useState([])
  const [url, setUrl] = useState('http://127.0.0.1:8000/api/akifpenstore/')
  const {data : products, isPending, error} = useFetch(url, {type: "gen"})
  const [singleProduct, setSingleProduct] = useState()

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchProducts = useCallback (async () => {
      const response = await fetch(url)
      const json = await response.json()
      setNewArray(json.products)
      setSingleProduct(newArray[id-1])
      setReady(true)
  })

  useEffect(() => {
        fetchProducts()
    }, [ready])

  if(typeof singleProduct !== 'undefined') {
    const product = {
        name: singleProduct.name,
        price: singleProduct.price,
        href: singleProduct.id,
        type: singleProduct.type,
        heading: singleProduct.description,
        images: [
          {
            src: singleProduct.image,
            alt: 'Luxerious Pen.',
          },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          'Hand cut and sewn locally',
          'Dyed with our proprietary colors',
          'Pre-washed & pre-shrunk',
          'Ultra-soft 100% cotton',
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
      }

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      function handleClose(){
        if(product.heading.includes('Fountain')){
            navigate('/fountainpens')
        } else if(product.heading.includes('Rollerball')){
            navigate('/rollerballpens')
        } else if(product.heading.includes('Ink')){
            navigate('/acsessories')
        }
      }

    return (  
      <div>
        <BreadCrumb page={product.type} productType={product.heading} product={product.name} />
        <div className="bg-white">
          <div className="pt-6">
        
              {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        
              {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
        
              {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
    
              {/* Reviews */}
    
              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleClose}
                >
                  Close
                </button>
              </form>
            </div>
        
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
    
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
        
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
    
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
        
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
    
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
        )  
    } else {
        return <p>Loading</p>
    };  
}



