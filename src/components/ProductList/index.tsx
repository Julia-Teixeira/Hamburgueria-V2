import { UlProduct } from "./style";

interface iProductsListProps {
  children: React.ReactNode;
}
export const ProductList = ({ children }: iProductsListProps) => {
  return <UlProduct> {children} </UlProduct>;
};
