import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';


export default function Checkout_Item({ title, id, category, price, description, image }) {
    
    const dispatch = useDispatch();
    const additemtocart2 = ()=>{
        const product = {
            title, id, category, price, description, image
        }
        dispatch(addToCart(product))
    }

    const removeitemfromcart = ()=>{
        dispatch(removeFromCart({id}))
    }


    return (
        <div className="lg:flex  mb-10">
            <div className="my-2 px-3 border-b border-gray-200 flex-grow items-center justify-center py-4 flex">
                <img src={image} className=" w-[150px] h-[150px] object-contain mx-1 rounded-lg" />
                <div className=" py-3 px-4 flex-grow">
                    <h1 className="text-left font-bold break-words text-gray-800 text-md">{title}</h1>
                    <p className=" text-sm text-gray-500 py-1 break-words line-clamp-2">{description}</p>
                    <p className="font-medium my-2">{`${price} EGP`}</p>
                </div>
            </div>
            <div className="lg:flex flex-col justify-start lg:py-5 lg:justify-center lg:items-center items-start">
                <button onClick={additemtocart2}
                 className="my-2 border-yellow-200 py-2 px-9 border bg-yellow-300 rounded-lg mx-3
                hover:border-green-400 hover:bg-green-200 hover:border">
                    +1</button>
                <button
                onClick={removeitemfromcart}
                 className="my-2 border-yellow-200 border py-2 px-5 bg-yellow-300 rounded-lg 
                hover:border-red-400 hover:bg-red-200 hover:border mx-3">Remove</button>
            </div>
        </div>
    )
}