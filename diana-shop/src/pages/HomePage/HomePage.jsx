import dayjs from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import './HomePage.css'



const cart = [

    {
        "id": 8,
        "title": "Try again",
        "price": 280642,
        "pieces": 2,
    }
]


const HomePage = () => {

    const [productList, setProductList] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(json => {
                setProductList(json)
            })
    }, [])
 let productsInCart=0;
    const onClickToCart = function (addedProduct) {
        console.log("Added to cart  ", addedProduct)
        const existProduct = cart.find((cartProduct) => {
            return cartProduct.id === addedProduct.id;
        })

        console.log('existProduct', existProduct)
        if (existProduct) {
            existProduct.pieces++;
        } else {
            addedProduct.pieces = 1;
            cart.push(addedProduct);
        }
        console.log('Current cart = ', cart)
        productsInCart++;
        return productsInCart;
    }

    return (
        <>
            <div className="product-list">
                {productList.map((productObject) => {
                    return (
                        <div className="product">
                            <h1>{productObject.title}</h1>
                            <img src={productObject.images}></img>
                            <p>{productObject.price} RON</p>
                            <button onClick={() => {
                                onClickToCart(productObject)
                            }}>Add to cart</button>
                        </div>
                    )
                })

                }
            </div>
        </>)
}

export default HomePage;
