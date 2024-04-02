"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imageSrc: "/images/shop/cart1.png",
      title: "Silver Heinz Ketchup 350 ml",
      price: "$298",
      quantity: 4,
      total: "$1,298",
    },
    {
      id: 2,
      imageSrc: "/images/shop/cart2.png",
      title: "Silver Heinz Ketchup 350 ml",
      price: "$298",
      quantity: 4,
      total: "$1,298",
    },
    {
      id: 3,
      imageSrc: "/images/shop/cart3.png",
      title: "Silver Heinz Ketchup 350 ml",
      price: "$298",
      quantity: 4,
      total: "$1,298",
    },
  ]);

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  if (cartItems.length === 0) {
    return <div className="p-5 h4">No items available</div>;
  }

  return (
    <>
      {cartItems.map((item) => (
        <tr key={item.id}>
          <th className="pl30" scope="row">
            <ul className="cart_list mt20">
              <li className="list-inline-item">
                <Link href="/shop-single">
                  <Image
                    width={70}
                    height={70}
                    quality={30}
                    src={item.imageSrc}
                    alt={`cart${item.id}.png`}
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="cart_title" href="/shop-single">
                  {item.title}
                </Link>
              </li>
            </ul>
          </th>
          <td>{item.price}</td>
          <td>
            <input
              className="cart_count text-center"
              placeholder={item.quantity}
              type="number"
            />
          </td>
          <td>{item.total}</td>
          <td className="pr25">
            <div
              className="pointer"
              title="Delete"
              onClick={() => handleDeleteItem(item.id)}
            >
              <span className="flaticon-trash" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItems;
