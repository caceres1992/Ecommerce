'use client'
import { useCartContext } from '@/context/CartContext'
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { LucideTrash2 } from 'lucide-react'
import Image from 'next/image'

type Props = {
    item: ICartItem
}

const RemoveItemFromCart = ({ item }: Props) => {
    const { removeItem } = useCartContext()

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <LucideTrash2 className=' text-red-600' size={16} />
            </AlertDialogTrigger>
            <AlertDialogContent className=' bg-black'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure you want to delete the <span className=' text-rose-500'> {item.name}?</span></AlertDialogTitle>
                    <AlertDialogDescription>
                   
                      {` This action cannot be undone. This will remove this item from your cart.`}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeItem(item)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default RemoveItemFromCart