const stripe = require('stripe') ('sk_test_51IVzFMEBSrwAYblKOrWDezFeLjLxnHi06osXTFAbi3g1LE4Dx9wc09ZkUQFPHsDxtd0miwO0OZ6Ne4lmLnILJspv00NWKygfNU')

export default async (req,res) => {
    const {items,email} = req.body;
    const transformedItems = items.map(item=>({
        price_data:{
            currency:"egp",
            unit_amount:item.price*100,
            product_data:{
                name:item.title,
                images:[item.image],

            },
        },
        description:item.description,
        quantity:1,
    }))
    const session = await stripe.checkout.sessions.create({
        shipping_address_collection:{
            allowed_countries:['GB','US','CA']
        },
        payment_method_types:["card"],
        line_items:transformedItems,
        mode:"payment",
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel',
        metadata :{
            email,
            images: JSON.stringify(items.map(item=>item.image)),

        }
    })
    res.status(200).json({id:session.id});
    
}