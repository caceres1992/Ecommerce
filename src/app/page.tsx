import Hero from '@/components/hero'
import ListProduct from '@/components/listProduct'

export default async function Home() {
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
