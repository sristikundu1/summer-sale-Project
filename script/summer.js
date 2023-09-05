total = 0.00;

function handleClickBtn(target) {
    const items = document.getElementById('selectedItems');
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const count = items.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}.  ${itemName}`
    items.appendChild(p);

    const price = target.childNodes[5].childNodes[3].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total.toFixed(2);

    const totalValue = total;

    if (totalValue > 0) {
        document.getElementById("btn-purchase").disabled = false;
        const discountPrice = 0.00;
        document.getElementById('discount').innerText = discountPrice;
        const grandPayment = finalPayment(totalValue, discountPrice);
        document.getElementById('finalTotal').innerText = grandPayment;

    }

   


    if (totalValue >= 200) {
        document.getElementById("buttonApply").disabled = false;

        document.getElementById('buttonApply').addEventListener('click', function () {
            const cuponValueElement = cuponFieldValue('cuponName');
            if (cuponValueElement == 'SELL200') {

                const discountPrice = getDiscount(totalValue).toFixed(2);
                document.getElementById('discount').innerText = discountPrice;
                const grandPayment = finalPayment(totalValue, discountPrice);
                document.getElementById('finalTotal').innerText = grandPayment;

            }
        })
    }

}

function finalPayment(payment, discountAmount) {
    const finalPay = payment - discountAmount;
    const finalPaymentstring = finalPay;
    const finalPayment = parseFloat(finalPaymentstring).toFixed(2);
    return finalPayment;
}

function cuponFieldValue(id) {
    const cuponField = document.getElementById(id);
    const cupon = cuponField.value;
    return cupon;
}




function getDiscount(totalPayment) {
    const discountPaymentValue = 0.20 * totalPayment;
    const discountPaymentstring = discountPaymentValue.toFixed(2);
    const discountPayment = parseFloat(discountPaymentstring)
    return discountPayment;
}



document.getElementById('btn-home').addEventListener('click', function () {
    window.location.href = 'index.html'

})