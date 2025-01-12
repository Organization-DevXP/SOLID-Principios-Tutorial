# Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)

## Definición

El **Principio de Sustitución de Liskov (LSP)** establece que los objetos de una clase derivada deben poder sustituir a los de la clase base **sin alterar el comportamiento esperado** del programa. Este principio promueve la compatibilidad entre clases en una jerarquía de herencia.

### Ejemplo básico

Un sistema que maneja cuentas bancarias con la funcionalidad de retiro de dinero. Las subclases deben mantener el comportamiento esperado de la clase base.

## Problema

### Código sin LSP (antes):

Consulta el archivo [`Antes/example.js`](./Antes/example.js).

```javascript
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

const account = new SavingsAccount(100);
account.withdraw(50); // Error inesperado: No se permite retirar dinero.
```

### Problema detectado:

1. La clase SavingsAccount rompe la funcionalidad de la clase base BankAccount, ya que redefine el método withdraw con un comportamiento incompatible.
2. Esto viola el principio LSP, causando que el programa no funcione correctamente al sustituir una subclase por su clase base.

## Solución

Código con LSP (después):
Consulta el archivo [`Despues/example.js`](./Despues/
example.js).

```javascript
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
```

### Ventajas:

1. Mantiene el comportamiento esperado de la clase base.
2. Mejora la confiabilidad y predictibilidad del código en jerarquías de herencia.
3. Reduce errores al sustituir subclases por la clase base.
