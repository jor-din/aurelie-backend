import { Order } from "../models/order.js";

async function newOrder(req, res){
    const newOrder = new Order({
        orderItems: req.orderItems.map((x)=> ({
            ...x, product: x._id
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        user: req.user._id
    });

    const order = await newOrder.save()
    res.status(201).send({ message: 'New Order Created', order})
    
}

export { newOrder }