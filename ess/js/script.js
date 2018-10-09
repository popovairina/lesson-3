'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let budget = +prompt('Ваш бюджет на месяц?', ''),
        date = new Date(prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD')),
        appData = {
          budget: budget,
            timeData: date,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
        };

    // Цикл for //
    for (let i = 0; i < 2; i++) {
        let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
            expensesCost =  +prompt('Во сколько обойдется?', '');
        if (typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesCost) != null
            && expensesItem != '' && expensesCost != '' && expensesItem.length < 50) {
            console.log("done");
            appData.expenses[expensesItem] = expensesCost;
        } else if (i >= 0) {i--}
    }

    // Цикл while //
    // let j = 0;
    // while (j < 2) {
    //     let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         expensesCost =  +prompt('Во сколько обойдется?', '');
    //     if (typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesCost) != null
    //         && expensesItem != '' && expensesCost != '' && expensesItem.length < 50) {
    //         console.log("done");
    //         appData.expenses[expensesItem] = expensesCost;
    //         j++;
    //     } else {
    //         console.log("error");
    //     }
    // }


    // Цикл do while //
    // var j = 0;
    // do {
    //     let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         expensesCost =  +prompt('Во сколько обойдется?', '');
    //     console.log("done");
    //     appData.expenses[expensesItem] = expensesCost;
    //     j++;
    // } while (j < 2);


    console.log(appData);

    let budgetMonth = appData.budget;
    document.getElementById('budgetMonth').value = budgetMonth / 30;

});