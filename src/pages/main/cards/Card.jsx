import React from "react";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = (props) => {
  return (
    <div className="w-96 max-h-64 relative overflow-hidden shadow-xl rounded-xl hover:shadow-2xl transition-all ease-in duration-150">
      <img
        className="w-full h-64 sm:h-56 rounded-t-xl object-cover -z-20"
        src={props.img}
        alt={props.name}
      />
      <div className="w-full h-36 absolute left-0 top-0 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="h-60 sm:h-52 px-3 py-2 absolute top-2 left-3 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-50 drop-shadow-xl">
            {props.name}
          </h1>
          <p className="text-xl font-semibold text-slate-50 drop-shadow-xl">
            € {props.price}
          </p>
        </div>
        <button
          className="w-min text-slate-100 flex items-center shadow-2xl bg-green-500 hover:bg-green-700 px-5 py-2 mt-2 rounded-full transition-all duration-200"
          onClick={() => props.addCart(props.pizza)}
        >
          <TbShoppingCartPlus />
          Order
        </button>
      </div>
    </div>
  );
};

export default Card;

// <div className="w-96 overflow-hidden shadow-xl rounded-xl hover:shadow-2xl transition-all ease-in duration-150">
//       <img
//         className="w-full h-64 rounded-t-xl object-cover"
//         src={props.img}
//         alt={props.name}
//       />
//       <div className="bg-gray-200 rounded-b-xl px-4 py-2">
//         <h1 className="font-bold text-2xl">{props.name}</h1>
//         <p className="text-xl font-medium">€ {props.price}</p>
//         <button
//           className="w-min text-slate-100 flex items-center bg-green-500 hover:bg-green-700 px-5 py-2 mt-2 rounded-full transition-all duration-200"
//           onClick={() => props.addCart(props.pizza)}
//         >
//           <TbShoppingCartPlus />
//           Order
//         </button>
//       </div>
//     </div>
