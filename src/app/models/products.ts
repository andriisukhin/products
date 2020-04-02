export interface ProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: Array<string>;
  variants: Variant[];
  images: Image[];
  options: Option[];
}

interface Variant {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: string;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

interface Image {
  id: string;
  created_at: string;
  position: number;
  updated_at: string;
  variant_ids: Array<number>;
  src: string;
  width: number;
  height: number;
}

interface Option {
  name: string;
  position: number;
  values: Array<string>;
}
