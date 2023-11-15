class Produto {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cliente {
    constructor(name, CPF) {
        this.name = name;
        this.CPF = CPF;
    }
}

class Venda {
    constructor(client, products) {
        this.client = client;
        this.products = products;
    }

    total () {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total
    }
}

const ClientStringJson = '[{"Name":"Client 1", "CPF":"12345678901"},'+ '{"Name":"Client 2","CPF":"12345678901"},'+ '{"Name":"Client 3","CPF":"12345678901"},'+ '{"Name":"Client 4","CPF":"12345678901"},'+ '{"Name":"Client 5","CPF":"12345678901"},'+ '{"Name":"Client 6","CPF":"12345678901"},'+ '{"Name":"Client 7","CPF":"12345678901"},'+ '{"Name":"Client 8","CPF":"12345678901"},'+ '{"Name":"Client 9","CPF":"12345678901"},'+ '{"Name":"Client 10","CPF":"12345678901"}]';

const ProductStringJson = '[{"Name":"Product 1", "price":1.00},'+ '{"Name":"Product 2", "price":2.00},'+ '{"Name":"Product 3", "price":3.00},'+ '{"Name":"Product 4", "price":4.00},'+ '{"Name":"Product 5", "price":5.00},'+ '{"Name":"Product 6", "price":6.00},'+ '{"Name":"Product 7", "price":7.00},'+ '{"Name":"Product 8", "price":8.00},'+ '{"Name":"Product 9", "price":9.00},'+ '{"Name":"Product 10", "price":10.00}]';

const clients = JSON.parse(ClientStringJson);
const produtos = JSON.parse(ProductStringJson);

const venda = new Venda(clients[0], produtos);
console.log(venda.total());