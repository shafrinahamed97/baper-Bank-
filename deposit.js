// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function()
{
    // step-2: get the deposit amount from the deposit input field
    // For input field use value to the value inside the input field 
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current deposit total
    // for non-input (element other input, textarea) use innerText to get the text
     const depositTotalElement = document.getElementById('deposit-total') ;
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);
     
     //step-4: add number to set the total deposit

     const currentDepositTotal = previousDepositTotal+newDepositAmount;
     // step-4.1: set the deposit total

     depositTotalElement.innerText = currentDepositTotal;

     // step-5: get balance current total
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousDepositTotalString);

     //step-6: calculate current total balance
     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

     // 6.1: set the balance total
     balanceTotalElement.innerText = currentBalanceTotal; 




     //step-7: clear the deposit field
     depositFiled.value = '';
     
    
})