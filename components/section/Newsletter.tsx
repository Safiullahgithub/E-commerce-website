

export default function Newsletter() 
{
  return (
    <div className="mx-20">
        <div className="relative">
            <h2 className="flex justify-center text-black pt-20 text-4xl font-bold ">Subscribe Our Newsletter</h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-8xl inset-0 font-bold opacity-10 mt-20">NEWS LETTER</span>
            </div>
              <p className="flex justify-center mt-5 mb-3">Get the latest information and promo offers directly</p>
              <div className="flex  w-full justify-center items-center space-x-3 mt-8">
              <input type="email"  className="border-2 border-gray-400  rounded-none w-72 h-8" required placeholder="   Type your email here" /> 
              <button className=" bg-black text-white items-center w-28 h-8 hover:bg-gray-500 ">Get Started</button>
            </div>
        </div>
    </div>
  )
}
