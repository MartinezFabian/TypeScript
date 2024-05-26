interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProducClothing extends Product {
  size: string;
}

interface Cart {
  products: (Product | ProducClothing)[];
  totalPrice: number;
}

const cart: Cart = {
  totalPrice: 30,
  products: [
    {
      id: 1,
      name: 'Tv 4k',
      price: 1000,
      quantity: 2,
      origin: 'Pakistan',
    },
    {
      id: 2,
      name: 'Hoodie',
      price: 60,
      quantity: 4,
      size: 'M',
      origin: 'China',
    },
  ],
};

interface CartOperations {
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clear: () => void;
}

interface Product {
  origin: string; // origin ahora es obligatorio
}
