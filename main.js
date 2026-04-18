const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let idCounter = 0;

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    idCounter += 1;

    const obj = {
      id: idCounter,
      amount: amount,
      type: type,
    };

    return obj;
  },

  deposit(amount) {
    const tr = this.createTransaction(amount, Transaction.DEPOSIT);

    this.balance = this.balance + amount;
    this.transactions.push(tr);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('не вистачає грошей');
      return;
    }

    const tr = this.createTransaction(amount, Transaction.WITHDRAW);

    this.balance = this.balance - amount;
    this.transactions.push(tr);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      const one = this.transactions[i];

      if (one.id === id) {
        return one;
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      const el = this.transactions[i];

      if (el.type === type) {
        sum = sum + el.amount;
      }
    }

    return sum;
  },
};