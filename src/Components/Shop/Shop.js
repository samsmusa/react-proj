import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import Alert from '../Alert/Alert';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [produc, setProduc] = useState({name:"You haven't select one",img:''});

    useEffect( () =>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product)=> {
        const checkprod = cart.find(item => item.id === product.id)
        if (cart.length !== 4){
        if (checkprod){
            const newCart = [...cart];
            setCart(newCart)
        }
        else {
        const newCart = [...cart, product];
        setCart(newCart)
        }
    }
    }

    const removeCart = () =>{
        setCart([])
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const randomSelect = () =>{
        if (!isEmpty(cart)){
            const NewCart = [...cart]
            shuffleArray(NewCart);
            setProduc(NewCart[0])
        }
        else {
            setProduc({name:"You haven't select one",img:''})
        }

    }

    const removeItemCart = (product) =>{
        let newitem = cart.filter((item)=>{
            return item.id !==product.id
        }
        )
        setCart(newitem)
    }


    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                products.map(product => <Products key={product.id} product={product} addToCart={addToCart}></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart key='12345' cart={cart} removeCart={removeCart} randomSelect={randomSelect} removeItemCart={removeItemCart}></Cart>
            </div>
            <div>{
                    <Alert produc={produc}></Alert>
                }
            </div>
        </div>
    );
};

export default Shop;