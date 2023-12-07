import CardProduct from '@/components/cardProduct'
import Hero from '@/components/hero'
import ListProduct from '@/components/listProduct'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className=' max-h-screen   snap-y snap-mandatory scroll-smooth' >
        <section  id='#hero' className=' snap-center '>
          <Hero />
        </section>
        <section id='#listProduct' className=' snap-center'>
          <ListProduct />
        </section>
      </div>

    </main>
  )
}
