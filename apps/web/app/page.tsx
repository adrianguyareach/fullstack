import Image from "next/image"

export default function Home() {

  
  return (
    <div className="px-16 py-16 bg-gray-100 md:col-span-2">
      <div className=" flex justify-center md:justify-end ">
        <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white">Log in</a>
        <a href="#" className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white">Sign up</a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className=" font-bold mt-12 border-b border-gray-200">Latest Recipes</h4>
  
        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          {/* <!-- cards go here --> */}
          <div className="card hover:shadow-lg"> 
            <Image src="/stew.jpg" 
                  alt="stew"
                  height={250}
                  width={250}
                  className=" w-full h-32 sm:h-48"
                  />
            <div className="m-4">
              <span className=" font-bold ">5 Bean Chili Stew</span>
              <span className=" block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg"> 
            <Image src="/noodles.jpg" 
                  alt="noodles"
                  height={250}
                  width={250}
                  className=" w-full h-32 sm:h-48"
                  />
            <div className="m-4">
              <span className=" font-bold ">Veg noodles</span>
              <span className=" block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-lg"> 
            <Image src="/curry.jpg" 
                  alt="curry"
                  height={250}
                  width={250}
                  className=" w-full h-32 sm:h-48"
                  />
            <div className="m-4">
              <span className=" font-bold ">Tofu Curry</span>
              <span className=" block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>25 mins</span>
            </div>
          </div>
        </div>

        <h4 className=" font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className="mt-8">
          {/* <!-- cards go here --> */}
        </div>
      </div>

      <div className=" flex justify-center ">
        <div className=" btn bg-secondary-100 text-secondary-200 hover:shadow-inner cursor-pointer">Load more</div>
      </div>
    </div>    
    )
}
