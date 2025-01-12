class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Fondos insuficientes.");
        }
        this.balance -= amount;
    }
}

class SavingsAccount extends BankAccount {
    withdraw(amount) {
        throw new Error("No se permite retirar dinero de una cuenta de ahorros.");
    }
}

// Uso
const account = new SavingsAccount(100);
account.withdraw(50); // Error inesperado: No se permite retirar dinero.
