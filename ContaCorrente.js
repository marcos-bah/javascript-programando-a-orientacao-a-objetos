import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novo){
        if(novo instanceof Cliente){
            this._cliente = novo;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor && valor > 0){
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}