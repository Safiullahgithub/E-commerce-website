

import { Difference } from '../../components/section/Difference'
import { Hero } from '../../components/section/Hero'
import Newsletter from '../../components/section/Newsletter'
import { Prodpage } from '../../components/section/Prodpage'
import Products from '../../components/section/Products'
import Promotion from '../../components/section/Promotion'


export default async function Home() {

   
  return (
    <>
    
    <Hero/>
    <Promotion/>
    {/* <Prodpage /> */}
    {/* <Products/> */}
    <Difference />
    <Newsletter />
    
    </>
  )
}
