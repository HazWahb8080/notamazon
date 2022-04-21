import Header from "../components/Header";
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from "../slices/cartSlice";
import Checkout_Item from "../components/Checkout_Item";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe('pk_test_51IVzFMEBSrwAYblK6BrdhhKsOwFlsJyFiPplHO1eYYt8niPLovd4sYtfhi02cRvCW0IXGk9LqBU7C7GHTRNozgDS00UmRBwEDT');

export default function checkout(){
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const {data:session} = useSession();
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items:items,
            email:session?.user?.email,
        })
        const result = await stripe.redirectToCheckout({
            sessionId:checkoutSession.data.id
        })
        if(result.error) 
        {
            alert(result.error.message)
        }

    }
    return(
        <div className="bg-neutral-100 w-full h-screen">
        <Header/>
        <div className=" w-full p-1 grid grid-cols-1 xl:grid-cols-6">
            <div className={`items-center ${items.length > 0 ? "col-span-5" : "col-span-full"} justify-center flex-1  p-2`}>
                <div className="items-center justify-center flex w-full">
                <img className="object-cover" src='https://ucarecdn.com/343db10e-531a-432d-9a38-f130a66279f0/Primedaybanner.png' />
                </div>
                <div className=" mt-5 pb-4 bg-white p-1">
                     <div className="border-b py-4">
                    <h1 className="xl:text-2xl text-md  font-medium text-gray-900 px-5 pt-3"> {items.length===0 
                    ? 'Your Shopping Cart is Empty' : 'Shopping Cart'}</h1>
                    <p className="text-xs text-gray-700 italic pt-1 px-5 self-center">{`you have ${items.length} Items in the Cart`}</p>
                   </div>
                    <div className="border border-gray-300 px-10 py-4 rounded-md my-4">
                        {items.map((item,i)=>(
                            <Checkout_Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            { items.length > 0 && <div className=" lg:mt-10 w-full bg-white shadow-sm xl:items-center items-start  justify-center flex shadow-gray-100 border rounded-md px-2 ">
                <div className="w-full  items-start justify-start flex flex-col py-4 px-4">
                 <h2 className="font-bold text-sm text-gray-800 mt-3">{`subtotal (${items.length} items) : ${total} EGP `}</h2>
                 <button onClick={createCheckoutSession} disabled={!session} className=" w-full shadow-md shadow-gray-200
                  disabled:bg-gray-300 bg-yellow-300 hover:bg-yellow-400 hover:scale-105 
                  hover:transition disabled:cursor-not-allowed px-3 py-3 rounded-md font-medium text-gray-700 my-3">
                     {!session? "please Signin First!":"Buy Now!"}</button>
                </div>

            </div>}

        </div>
        </div>
    )
}