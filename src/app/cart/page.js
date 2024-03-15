"use client";

import React, { useContext } from "react";
import { CartContext, cartProductPrice } from "../../components/AppContext";
import Image from "next/image";
import DeleteIcon from "../../components/icons/DeleteIcon";
import Link from "next/link";
import CheckoutBox from "../../components/layout/CheckoutBox";
import { useProfile } from "../../components/UserProfile";

const CartPage = () => {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const { data: profileData, loading } = useProfile();
  //   console.log(cartProducts);
  const cartProductsSize = cartProducts?.length;

  let totalPrice = 0;
  const delivery = 5;

  let subTotal = 0;
  for (const product of cartProducts) {
    subTotal += cartProductPrice(product);
  }
  totalPrice = subTotal + delivery;

  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-16">
        <div>
          {cartProducts?.length === 0 && (
            <div className="text-center mt-9">
              <h2 className="text-center">
                No products in your shopping cart!{' '}
                <Link
                  className="underline font-semibold text-fuchsia-800"
                  href={"/menu"}
                >
                  Add Cart
                </Link>
              </h2>
            </div>
          )}
          {cartProducts.length > 0 &&
            cartProducts.map((product, index) => (
              <div
                className="flex items-center gap-4 mb-2 border-b py-2"
                key={product._id}
                >
                <div className="w-28">
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    alt="pizza guru"
                  />
                </div>
                <div className="grow">
                  <h3 className="mb-1 text-lg">{product.itemName}</h3>
                  <div className="text-sm text-gray-800">
                    {product.size ? (
                      <h3>Size : {product?.size?.name}</h3>
                    ) : (
                      <h3>Small size</h3>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {product?.extras?.length > 0 ? (
                      <>
                        {product.extras.map((extra) => (
                          <h3 key={extra._id}>
                            {extra.name} ${extra.price}
                          </h3>
                        ))}
                      </>
                    ) : (
                      <h3>No extra</h3>
                    )}
                  </div>
                </div>
                <div className="text-lg font-semibold">
                  ${cartProductPrice(product)}
                </div>
                <div className="ml-10">
                  <button
                    type="button"
                    onClick={() => removeCartProduct(index)}
                    className="text-white bg-red-500 hover:bg-red-600 p-2 border-gray-300 rounded-xl"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          {subTotal > 0 && (
            <div>
              <h3 className="text-lg pt-2 pr-24 text-right">
                <span className="text-gray-600">Sub Total : </span>
                <span className="font-semibold pl-2">${subTotal}</span>
              </h3>
              <h3 className="text-lg py-2 pr-24 text-right">
                <span className="text-gray-600">Delivery : </span>
                <span className="font-semibold pl-6">${delivery}</span>
              </h3>
              <h3 className="text-lg pr-24 text-right">
                <span className="text-gray-600">Total price : </span>
                <span className="font-semibold pl-2">${totalPrice}</span>
              </h3>
            </div>
          )}
        </div>

        <div className="">
          <CheckoutBox
            profileData={profileData}
            loading={loading}
            totalPrice={totalPrice}
            cartProductsSize={cartProductsSize}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
