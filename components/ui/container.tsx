import React from "react";
interface Container {
  children: React.ReactNode;
}
const Container: React.FC<Container> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
