//prc para crear componente
import { CartCounter } from "@/shoppingCart/Components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "El mejor shopping cart",
};

export default function CounterPage() {
 
  return (
    <CartCounter/>
  );
}