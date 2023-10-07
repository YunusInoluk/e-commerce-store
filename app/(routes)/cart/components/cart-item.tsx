import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
interface CartItemProps {
  data: Product;
}
const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex px-6 border-b">
      <div className="relative w-24 h-24 sm:w-48 sm:h-48 rounded-md overflow-hidden">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:pr-0 sm:grid sm:grid-cols-2 sm:gap-x-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="flex text-sm mt-1">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 border-l border-gray-200 pl-4 ml-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
