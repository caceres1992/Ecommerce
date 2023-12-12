import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'

type Props = {
    src: string,
    alt: string,
    name:string,
    price: number,
    blurDataUrl: string,
    sizes?: string,
    width: Number,
    height: Number,
    description?: string
}

const CardProduct = ({ name,src,price }: Props) => {
    return (
        <Card className='  cursor-pointer rounded-xl overflow-hidden group relative  bg-gray-900 border-none'>
            <CardHeader className=' '>
                <Image
                    objectFit={'cover'}
                    className='  rounded-t-2xl shadow-md overflow-hidden'
                    src={src}
                    blurDataURL={src}
                    width={600} height={200}
                    placeholder={'blur'}
                    quality={75}
                    alt='image1'
                    priority
                    sizes="(max-width: 520px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </CardHeader>
            <CardContent>

                <CardTitle  className=' capitalize'>
                  {name}
                </CardTitle>
                <CardDescription className=' flex justify-between mt-4 text-base'>Price  <strong className=' text-lg'>$ {price.toFixed(2)}</strong> </CardDescription>
            </CardContent>
            <CardFooter className=' absolute -top-full  left-2.5   transition-all   group-hover:top-8  '>
                <Button className=' bg-gradient-to-t  h-12 w-12 from-rose-700 to-orange-600 hover:from-orange-600 opacity-0 group-hover:opacity-100  group-hover:delay-100 hover:to-rose-700  transition-all ease-in-out rounded-full ' variant={'secondary'}>
                      <Heart/>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardProduct