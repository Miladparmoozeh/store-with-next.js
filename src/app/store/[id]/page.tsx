
import AddToCart from '@/components/AddToCart';
import Container from '@/components/container'
import { IProductItemProps } from '@/components/Productitem'
import React from 'react'

interface IProductProps{
    params: Promise<{id: string}>;
    seaechParams: Promise<{}>
}

async function Product({params}: IProductProps) {

    const {id} = await params


    const result= await fetch (`http://localhost:3004/products/${id}`)
    const data = await result.json() as IProductItemProps


  return (
    <Container>

        <div className='grid grid-cols-12 mt-8 shadow-md '>

            <div className='col-span-9  rtl text-right p-4 '>

                <h2 className='font-bold text-2xl'> {data.title}</h2>

                <p className='text-gray-600 '> {data.description}</p>

                <p className='font-bold '> قیمت: <span>{data.price}$</span> </p>

                <AddToCart id={id}/>

            </div>

            <div className='col-span-3 '>

                <img src={data.image} alt="" />

            </div>

            

        </div>


    </Container>
  )
}

export default Product
