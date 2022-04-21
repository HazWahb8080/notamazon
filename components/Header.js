import Image from "next/image";
import { signIn,signOut,useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

export default function Header(){
    const {data:session} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return(
    <>        
        <header className="bg-[#131921] flex items-center justify-between px-5">
            {/* Left side */}
            <div className="text-white flex py-5 mx-2 flex-grow sm:flex-grow-0">
                <img onClick={()=>router.push('/')}  className="sm:w-[150px]  cursor-pointer hover:opacity-90 self-center h-12 w-12 object-contain  sm:h-[40px]  object-center" src="https://ucarecdn.com/a278c601-b578-4709-b350-e2f7f24ad8ed/PngItem_12080.png"/>
                <span className="flex ml-4">
                    <svg
                    className="self-center h-5 w-5"
                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    
                    viewBox="0 0 172 172"
                    ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,14.33333c-33.59017,0 -60.91667,27.3265 -60.91667,60.91667c0,14.46233 5.19225,28.49825 14.66658,39.58867c1.08217,1.22908 26.61342,30.23975 35.14175,38.37033c3.11392,2.97058 7.10933,4.45767 11.10833,4.45767c3.999,0 7.99442,-1.48708 11.11192,-4.45767c9.91508,-9.45642 34.12767,-37.21292 35.18833,-38.43125c9.42417,-11.0295 14.61642,-25.06542 14.61642,-39.52775c0,-33.59017 -27.3265,-60.91667 -60.91667,-60.91667zM86,93.16667c-9.89358,0 -17.91667,-8.02308 -17.91667,-17.91667c0,-9.89358 8.02308,-17.91667 17.91667,-17.91667c9.89358,0 17.91667,8.02308 17.91667,17.91667c0,9.89358 -8.02308,17.91667 -17.91667,17.91667z"></path></g></g>
                    </svg>
                     <span className="self-center ml-1">
                    <p className="font-bold">Deliver to: </p>
                    <p className=" text-sm text-yellow-400 cursor-pointer hover:text-yellow-200">Egypt</p>
                    </span> 

                </span>
            </div>


            {/* center */}
            <div className=" flex-1 lg:px-12  px-1 lg:flex hidden">
                    
                <input
                className="w-full py-2 px-4 rounded-l-lg"
                 placeholder="search any products"
                 >
                 </input>
                <span class="bg-yellow-400 hover:bg-yellow-500 self-center p-2 pl-4 rounded-r-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" stroke-gray-900 hover:opacity-70 h-7 w-7 self-center mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>

            </div>


            {/* Right */}
            <div className="text-white  flex  items-center  justify-between p-1">
                <div onClick={!session ? signIn : signOut} className="cursor-pointer p-1 mx-1">
                    <p className="text-white text-xs md:text-sm hover:underline cursor-pointer">{session?`Hello,${session?.user?.name}`:'Create New Account'}</p>
                    <p className="text-xs md:text-sm hover:underline cursor-pointer font-bold">Accounts & Lists</p>
                    
                </div>
                <div className=" p-1 mx-1">
                    <p className=" text-xs md:text-sm hover:underline cursor-pointer">Orders </p>
                     <p className=" text-xs md:text-sm hover:underline cursor-pointer font-bold">& Returns</p>

                </div>
                <div onClick={()=> router.push('/checkout')} className=" p-1 flex mx-1 cursor-pointer ">
                    <div className="flex p-0  relative sm:mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-12 h-8 w-8 md:w-12 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div className="bg-yellow-400 md:h-6 text-xs md:text-lg h-4 w-4 md:w-6 items-center flex justify-center text-black absolute top-0 right-0 rounded-full text-center">
                            {items.length}</div>
                    </div>
                    <p className="self-center hidden md:block hover:underline cursor-pointer  md:font-medium">Basket</p>
                    
                </div>
            </div>

        </header>
        <div className="w-full mb-1 items-center space-x-5 justify-start flex py-3 px-4 bg-gray-700">
            <div className="flex cursor-pointer space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                <p className="text-white hover:scale-90 hover:text-gray-200 hover:transition text-sm self-center ">All Prime Videos</p>
            </div>
            
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition  cursor-pointer">Amazon Business</p>
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition cursor-pointer">Today's Deals</p>
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition lg:inline-flex hidden cursor-pointer">Electronics</p>
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition lg:inline-flex hidden cursor-pointer">Beauty</p>
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition lg:inline-flex hidden cursor-pointer">Health & Nutrition</p>
            <p className="text-white text-sm hover:scale-90 hover:text-gray-200 hover:transition lg:inline-flex hidden cursor-pointer">Tech</p>


        </div>
        </>
    )
}