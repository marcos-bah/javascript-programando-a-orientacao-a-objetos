import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 32232332);

const contaCorrente1 = new ContaCorrente(cliente1, 1003);

console.log(contaCorrente1);