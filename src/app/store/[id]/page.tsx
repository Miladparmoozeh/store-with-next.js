
import Container from '@/components/container'
import React from 'react'

function Product() {
  return (
    <Container>

        <div className='grid grid-cols-12 mt-8 shadow-md '>

            <div className='col-span-9  rtl text-right p-4 '>

                <h2 className='font-bold text-2xl'> محصول اول </h2>

                <p className='text-gray-600 '> مهم تغلئذ اعننا منتهتمهت منتا کخهخاتغتلت نعغهعنعغ نهغنعا </p>

                <p className='font-bold '> قیمت: <span>23$</span> </p>

                <div className='mt-4'>
                    <button className='px-4 py-2 bg-sky-500 text-with rounded text-white' >+</button>
                <span className='mx-4'>5</span>
                <button className='px-4 py-2 bg-sky-500 text-with rounded text-white '>-</button>
                </div>

            </div>

            <div className='col-span-3 '>

                <img src="https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg" alt="" />

            </div>

            

        </div>


    </Container>
  )
}

export default Product
