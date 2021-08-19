
function allWorksUpdate(products, price, trueOrFalse) {
     let productInput = document.getElementById(products + '-number');
     let productInputValue = parseInt(productInput.value);
     if(trueOrFalse) {
          productInputValue = productInputValue + 1;
     } else if(productInputValue > 0) {
          productInputValue = productInputValue - 1;
     }
     productInput.value = productInputValue;

     let productTotal = document.getElementById(products + '-total');
     productTotal.innerText = productInputValue * price;

     calculate();
}

function firstOrSecondTotal(products) {
     let productInput = document.getElementById(products + '-number');
     let productInputValue = parseInt(productInput.value);
     return productInputValue;
}


function calculate() {
     let phoneTotal = firstOrSecondTotal('phone') * 1219;
     let caseTotal = firstOrSecondTotal('case') * 59;
     let phoneOrCaseSub = phoneTotal + caseTotal;
     let tax = phoneOrCaseSub / 10;

     let allSumTotalHare = phoneOrCaseSub + tax;

     document.getElementById('sub-total').innerText = phoneOrCaseSub;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = allSumTotalHare;
}



//first Worls hare
document.getElementById('phone-plus').addEventListener('click', function() {
     allWorksUpdate('phone', 1219, true);
});

document.getElementById('phone-minize').addEventListener('click', function() {
     allWorksUpdate('phone', 1219, false);
});


//Second Works hare
document.getElementById('case-plus').addEventListener('click', function() {
     allWorksUpdate('case', 59, true);
});

document.getElementById('case-minize').addEventListener('click', function() {
     allWorksUpdate('case', 59, false);
});

