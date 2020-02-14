const myAccount = {
  name: 'Junior',
  expense: 0,
  income: 0
};

const addExpense = (account, amount) => {
  account.expense += amount;
};

const addIncome = (account, amount) => {
  account.income += amount;
};

const resetAccount = account => {
  account.expense = 0;
  account.income = 0;
};

const getAccountSummery = account => {
  return `${account.name} has $${account.income - account.expense}. $${
    account.income
  } in income. $${account.expense} in expenses`;
};

addExpense(myAccount, 2.5);
addIncome(myAccount, 204);
console.log(getAccountSummery(myAccount));

console.log(myAccount);
resetAccount(myAccount);
console.log(myAccount);
console.log(getAccountSummery(myAccount));
