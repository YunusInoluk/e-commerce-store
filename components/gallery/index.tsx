"use client";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="hidden w-full mx-auto mt-6 max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full aspect-square">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative h-full w-full aspect-square overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={image.url}
                alt="Product Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
