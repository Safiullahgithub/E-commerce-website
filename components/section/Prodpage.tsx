import { Image as IImage} from 'sanity'
import {client } from "@/lib/sanityClients" ;
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';

export const getProducts = async () =>{
     const res = await client.fetch(`*[_type=="Product"]{
      image,
      title,
      category ->{
        name
      },
      price,
      _id

     }`);
     return res
}

interface IProduct{
  title: string,
  description: string,
  _id: string,
  price: number
  image: IImage,
  category: {
    name : string
  }
}

export const Prodpage = async () => {

    const data : IProduct[] = await getProducts();
    // console.log(data);
  return (
    
        <div id="productspage">
        {data.map((item) =>(

            // eslint-disable-next-line react/jsx-key
            <div>
                <Image src={urlForImage(item.image).url()} alt="products" width={200} height={200}  className='object-cover object-top'/>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                <button className='bg-blue-700 border py-2 rounded-sm px-5 items-center text-white'>Add to cart</button>

            </div>

        ))}
        </div>
    
  )
}
