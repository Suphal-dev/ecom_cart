import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem,removeItem } from "../features/Cart/cart.js";
import { useNavigate } from "react-router";
import axios from "axios"



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [loggedIn,setLoggedIn]=useState(null)

  const url = import.meta.env.VITE_API_URL;

  const fetchLoggedinStatus=async()=>{
    try {
      const {data}=await axios.get(`${url}/api/v1/check-auth`,{withCredentials:true})
      
      setLoggedIn(data?.data?.loggedIn)
    } catch (error) {
      console.log(error)
      setLoggedIn(false)
      
    }
  }

  useEffect(()=>{
    ///clearing the address1 and address2
    localStorage.removeItem("address2")
    localStorage.removeItem("address1")
    fetchLoggedinStatus()

  },[])

  


    const handleAddtoCart=(product)=>{
      dispatch(addItem({id:product.id,title:product.title,price:product.price,image:product.image}))
    }


    const handleRemoveFromCart=(id)=>{
        dispatch(removeItem(id))
    }
  



  return (
    <>
     

      <section className="py-24 relative font-serif">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">
                Delivery Charge
              </span>
              <span className="w-full max-w-[260px] text-center">Quantity</span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          {cart.cartItems.map((item,i) => (
            <div key={i}  className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <div className="img-box">
                <img
                  src={item.image}
                  alt="product image"
                  className="xl:w-[140px] rounded-xl object-cover"
                />
              </div>
              <div className="pro-data w-full max-w-sm ">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                  {item.title}
                </h5>
                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                  {item.category}
                </p>
                <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                  ${item.price}
                </h6>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                $15.00{" "}
                <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                  (Delivery Charge)
                </span>
              </h6>
              <div className="flex items-center w-full mx-auto justify-center">
                <button  onClick={()=>handleRemoveFromCart(item.id)} className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                  placeholder={item.quantity}
                />
                <button  onClick={()=>handleAddtoCart(item)} className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                ${parseFloat(item.totalPrice).toFixed(2)}
              </h6>
            </div>
          </div>

          ))}

         














          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">


            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ${parseFloat(cart.totalAmount.toFixed(2))}
              </h6>
            </div>


            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Delivery Charge
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${cart.cartItems.length *15}
              </h6>
         
            </div>


            {cart.totalAmount >500  && 
              <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal  text-xl leading-8 text-red-400">
                Discount
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${cart.cartItems.length *15}
              </h6>
         
            </div>
            } 





            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                  {cart.totalAmount >500 ? parseFloat(cart.totalAmount.toFixed(2)) : parseFloat( (cart.totalAmount+ (cart.cartItems.length *15)).toFixed(2))}
              </h6>
            </div>
          </div>





          <div className="flex items-center flex-col  align-items gap-3 mt-8">
          
            <button  onClick={ ()=>{navigate("/checkout")}} className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700 disabled:bg-gray-300">
              Continue to Payment
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
             {!loggedIn && <p className="text-red-700">Please Login to checkout</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
