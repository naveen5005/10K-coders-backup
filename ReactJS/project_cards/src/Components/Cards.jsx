import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { } from "../CSS/Cards.css";

const Cards = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await (await fetch("http://localhost:3000/products")).json();
        // console.log(response);
        setProducts(response);
    }
    return (
        <div className='main-cards'>
            {
                products.map((data, i) => {
                    return <div className='card' key={i} style={{ width: "12rem" }}>
                        <img src={data.thumbnail}
                            className="card-img-top" alt="Image"></img>
                        <div className="card-body">
                            <h5 className='card-title'>{data.title}</h5>
                            <div className="price rating details">
                                <div className="price-details">Price : {data.price}</div>
                                <div className="rating-details">Rating : {data.rating}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>




    )
}

export default Cards
