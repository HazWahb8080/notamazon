import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";


export default function Product_Item({title,id,category,price,description,image}){
     const router = useRouter();
     const dispatch = useDispatch();
     const additemtoCart =  () => {
         const product = {
             title,
             id,
             category,
             price,
             description,
             image
         }
         dispatch(addToCart(product))

     }

    return(
        <div className="flex-1  align-middle">
            <div className= "p-10 rounded-md hover:scale-105 hover:transition hover:ease-in-out hover:duration-200 border border-gray-200 flex flex-col items-center justify-center bg-white flex-1 pb-12 ">
                <div className="justify-end w-full flex  mt-2 mb-5">
                <p className="self-center text-xs italic text-gray-500">{category}</p>
                </div>
                <img src={image} className="w-48 object-contain h-48 mb-3 md:mx-24 mx-0" />
                <h5 className="break-words w-full text-lg mb-4 text-left line-clamp-1 ">{title}</h5>
                <p className="text-sm break-words text-gray-800 line-clamp-2">{description}</p>

                <p className="text-left w-full my-3 font-bold text-lg text-gray-800">{`${price} EGP`}</p>

                <button onClick={additemtoCart} className="bg-gradient-to-t my-3 w-full active:to-yellow-500  from-yellow-300 to-yellow-400 border border-yellow-400  rounded-md px-4 py-2 text-md text-gray-900
                 hover:scale-105 hover:transition hover:ease-in-out hover:bg-yellow-300"> Add to Cart</button>

            </div>
            
        </div>
    )
}