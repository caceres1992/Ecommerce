'use client'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import ItemCartShop from './ItemCartShop'
import { useCartContext } from '@/context/CartContext'
import { Progress } from './ui/progress'


type Props = {}

const CartShop = (props: Props) => {

    const { cartItems } = useCartContext()
    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag />
            </SheetTrigger>
            <SheetContent className=' bg-black flex flex-col'>
                <SheetHeader>
                    <SheetTitle>My Cart</SheetTitle>
                    <SheetDescription className=''>
                    You could get free shipping for your purchases over $200.
                    </SheetDescription>
                    <Progress   className='bg-blue-950 w-[60%]'  value={40} max={100} />
                </SheetHeader>

                <div className="flex-1">
                    <div className=' space-y-5'>
                        {cartItems.map((item) => {
                            return <ItemCartShop item={item} key={item._id} />
                        })}
                    </div>
                </div>
                <SheetFooter>
                    <Button variant={'destructive'} className=' w-full rounded-xl'>Check out</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}

export default CartShop