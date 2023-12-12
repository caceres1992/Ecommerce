import React from 'react'

type Props = {
}

const Products = (props: Props) => {
    console.log(props)
  return (
    <div className=' min-h-screen border p-20 justify-center items-center flex'>

        <div className=' border h-96 rounded-xl w-full flex justify-center items-center animate-pulse border-rose-800'>
            in process...
        </div>
    </div>
  )
}

export default Products