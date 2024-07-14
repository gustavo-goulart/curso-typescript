import { useState, useEffect } from "react";
import api from "./services/api";

export function App() {
  const [products, setProducts] = useState<IProducts[]>([]);

  enum States {
    MG = "Minas Gerais",
    SP = "São Paulo",
    PR = "Paraná",
  }

  interface IAdress {
    street: string;
    number: number;
    state: string;
  }

  interface IProducts {
    id: number;
    name: string;
    price: number;
    description?: string; //item opcional quando usa o ?:
    adress: IAdress;
  }

  useEffect(() => {
    async function getProducts() {
      const response = await api.get<IProducts[]>("/produtos");

      setProducts(response.data);
    }

    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>Nome: {product.name}</p>
          <p>R$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
