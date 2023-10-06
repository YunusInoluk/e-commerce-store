"use client";

import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import IconButton from "./icon-button";

interface ProductCard {
  data: Product;
}
const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();
  const priviewModal = usePreviewModal();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    priviewModal.onOpen(data);
  };
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl p-3 space-y-4 border"
    >
      <div className="relative aspect-square bg-gray-100 rounded-xl">
        <Image
          alt="Product Image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute w-full px-6 bottom-5 opacity-0 group-hover:opacity-100 transition">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={(e) => onPreview(e)}
              icon={<Expand size={20} className="text-gray-600" />}
              className=""
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className=""
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="font-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
