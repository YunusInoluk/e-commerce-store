"use client";
import PriviewModal from "@/components/priview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PriviewModal />
    </>
  );
};

export default ModalProvider;
