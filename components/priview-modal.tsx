"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "./gallery";
import ProductInfo from "./product-info";
import Modal from "./ui/modal";

const PriviewModal = () => {
  const priviewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={priviewModal.isOpen} onClose={priviewModal.onClose}>
      <div className="grid grid-cols-1 items-start w-full gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PriviewModal;
