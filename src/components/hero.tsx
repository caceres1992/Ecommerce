'use client'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import {motion} from 'framer-motion'
type Props = {}

const Hero = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
      duration:.2
    }}
    className=' min-h-screen py-20 mx-auto flex justify-center items-center overflow-hidden '>
      <div
      className=' container rounded-lg  h-[560px] w-full   overflow-hidden'>
        <div
          style={{ backgroundImage: 'url(/assets/__shoes_running.png)', backgroundPositionX: '-20%' }}
          className='bg-gradient-to-tr p-5 flex justify-center items-center bg-no-repeat bg-left bg-gray-950 h-full  overflow-hidden  rounded-xl w-full'>
          <div className=' flex-col md:flex-row   flex  justify-between items-center '>

            <div className='max-w-2xl w-full text-center  md:text-left '>

              <h1 className='  text-4xl lg:text-5xl  font-bold '>Are you looking for the better <span className=' text-rose-600'>run shoes?</span></h1>
              <p className=' text-gray-400 pt-5'>We have the solution that you can achieve your goals.</p>
              <Button className='  rounded-xl  space-x-2  mt-10'>
                <Link href={'#listProduct'} className='flex items-center gap-2'>
                  <span className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>Let's do shopping</span>
                  <ShoppingBag className=' text-rose-600' />
                </Link>
              </Button>
            </div>

            <div className=' relative'>
              <img className=' relative z-10  h-52 object-contain w-full ' src='/assets/__shoes__running.png' />
              <div className=' absolute   top-0 md:-top-10 -right-52 h-52 md:h-80 w-[500px]  shadow-lg shadow-inner shadow-rose-900/40 bg-[#000]  rounded-l-full'>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Hero