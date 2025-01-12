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

class FixedDepositAccount extends BankAccount {
    constructor(balance) {
        super(balance);
        this.isWithdrawalAllowed = false;
    }

    withdraw(amount) {
        if (!this.isWithdrawalAllowed) {
            throw new Error("No se permite retirar dinero de un depósito fijo.");
        }
        super.withdraw(amount);
    }
}

const account = new FixedDepositAccount(100);
console.log(account.balance); // 100
