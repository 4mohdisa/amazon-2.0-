import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import Currency from "react-currency-formatter";
import {
    addToBasket,
    removeFromBasket,
} from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
    id,
    title,
    price,
    description,
    rating,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();
    const addItemToBasket = () =>{
        const product = {
    id,
    title,
    price,
    description,
    rating,
    category,
    image,
    hasPrime,
        }
     dispatch(addToBasket(product));
    };

    const removeitemFromBasket = () =>{
        dispatch(removeFromBasket({ id }))
    }
  return (
    <div className="grid grid-cols-5">
        <img 
       src={image}
       width={200}
       height={200}
       objectFit="contain"
       />
       {/* Middle */}
       <div className="col-span-3 mx-5">
       <p className="text-lg mb-1 text-gray-800 font-medium">{title}</p>
         <div className="flex">
             {Array(rating)
             .fill()
             .map((_,i) => (
                 <StarIcon key={i} className="h-5 text-yellow-500"/>
             ))}
         </div>
         <p className="text-xs my-2 line-clamp-3">{description}</p>
         <Currency quantity={price} currency="USD"/>
         {hasPrime && (
             <div className="flex items-center space-x-2">
              <img src="https://links.papareact.com/fdw" alt="" className="w-12" loading="lazy" />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
             </div>
         )}
       </div>
       {/* Right add/Remove button */}
       <div className="flex flex-col space-y-2 my-auto justify-self-end">
       <button className="button" onClick={addItemToBasket}>
                    Remove from Basket
                </button>
                <button className="button" onClick={removeitemFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
  );
}

export default CheckoutProduct