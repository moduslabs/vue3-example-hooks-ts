import useApi from "./api";
import { Ref, ref } from "vue";

export interface Variant {
  id: string;
  title: string;
  sku: string;
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  variants: Variant[];
  price: number;
  tags: string[];
}

export type UsableProducts = Promise<{ products: Ref<Product[] | undefined> }>;

export default async function useProducts(): UsableProducts {
  const { response: products, request } = useApi<Product[]>(
    "https://ecomm-products.modus.workers.dev/"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { products };
}
