'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useCartContext } from '@/context/CartContext'
import { LucideTrash2 } from 'lucide-react'
import RemoveItemFromCart from './removeItemFromCart'

type Props = {
    item: ICartItem
}

const ItemCartShop = ({ item }: Props) => {
    const { updateQuantity, removeItem } = useCartContext()


    const onChangeQuantity = (e: React.ChangeEvent<HTMLSelectElement>, item: ICartItem) => {
        updateQuantity(Number.parseInt(e.target.value), item)
    }

    return (
        <div className=' flex gap-2'>
            <Image
                width={80}
                height={100}
                alt='item image'
                blurDataURL={item.images[0]}
                className=' rounded-xl'
                src={item.images[0]} />
            <div className=' flex items-center gap-4 w-full'>

                <div className=' flex-1 w-full ' >
                    <div className=' flex items-center gap-2'>
                        <p className=' font-medium w-full'>{item.name}</p>
                        <RemoveItemFromCart item={item} />
                    </div>


                    <div className='flex items-center  gap-2  text-sm pt-1'>
                        <span className=''>Size L</span>
                        <div className='  border-r border-l px-1 '>
                            <label htmlFor="quantity">Quantity</label>
                            <select value={item.quantity}
                                onChange={(e) => onChangeQuantity(e, item)}
                                className='  pl-3 text-center  rounded   bg-transparent'>
                                {Array(10).fill(0).map((_, index) => {
                                    return <option className=' text-center' key={index + 1} value={index + 1}>{index + 1}</option>
                                })}
                            </select>
                        </div>
                        <span className='  font-extrabold'>x $ {(item.quantity * item.price).toFixed(2)} </span>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default ItemCartShop