import Link from 'next/link'
import React from 'react'
import LinkCollection from './LinkCollection'
import UserCard from './userCard'
import DarkMode from '../darkMode'
import { MenuIcon, ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import CartShop from '../cartShop'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className=' w-full bg-black z-50 fixed top-0 px-10 py-5 flex justify-between'>
            <div className='flex items-center gap-1'>
                <p className=' font-extrabold text-xl'>RUN|RUN.COM</p>
                <MenuIcon className=' cursor-pointer' />
                {/* <DarkMode /> */}
            </div>

            <nav className='  justify-center   items-center gap-4 flex-1 hidden lg:flex'>
                <LinkCollection />

            </nav>

            <div className=' flex'>
                <div className=' hidden md:block '>
                    <UserCard title='JASSON' href='https://github.com/shadcn.png' />
                </div>

                    <CartShop />
              
            </div>
        </header>
    )
}

export default Navbar