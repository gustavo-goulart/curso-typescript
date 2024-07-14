import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

let products: IProducts[] = [];

app.get("/produtos", (req: Request, res: Response) => {
  const newProducts: IProducts = {
    id: Math.random(),
    name: "Batedeira",
    price: 300,
    description: "Batedeira muito boa, boa mesmo",
    adress: {
      street: "Rua 1",
      number: 1,
      state: States.PR,
    },
  };

  products.push(newProducts);

  return res.json(products);
});

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
