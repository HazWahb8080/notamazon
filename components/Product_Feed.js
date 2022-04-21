
import Product_Item from './Product_Item';
import Product_Item2 from './Product_Item2';


export default function Product_Feed({products}){
    return(
        <div className="flex justify-center items-center bg-gray-100">
        <div className="items-center justify-center flex flex-col py-3 ">
            <div className=" mx-auto p-1 md:-mt-40 z-50 grid gap-3 place-items-start justify-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 w-full">
            {products.slice(0,4).map(({title,id,category,price,description,image}) => (
                <Product_Item
                key={id}
                title={title}
                id={id}
                category={category}
                price={price}
                description={description}
                image = {image}
                />
            ))}
            </div>
            <img className="w-full object-cover my-3 px-2" src='https://ucarecdn.com/9e00af10-5a4e-4895-bab4-ed75a0e20aab/tttttttttttt.png'/>
        <div className=" mx-auto p-1  z-50 grid gap-3 place-items-start justify-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 w-full">
            {products.slice(4,50).map(({title,id,category,price,description,image}) => (
                <Product_Item2
                key={id}
                title={title}
                id={id}
                category={category}
                price={price}
                description={description}
                image = {image}
                />
            ))}
            </div>
        </div>
        </div>
    )
}