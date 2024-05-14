import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboards("82d78fc3-2248-432b-ba5f-759cca7cfd30");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 gap-y-4">
        <ProductList title={"Featured Products"} items={products} />
      </div>
    </Container>
  );
};
export default HomePage;
