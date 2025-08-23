
const validPIn = 1234
// add monet feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt( document.getElementById('add-pin').value)
    const availableBalance = parseInt(document.getElementById('available-Balance').innerText)

    if(accountNumber.length <11 ){
        alert('please provide valid number')
        return;
    }
    if(pin != validPIn){
        alert('please provide valid pin number')
        return;
    }

    const totalNewAbleableBalance = amount + availableBalance
    document.getElementById('available-Balance').innerText = totalNewAbleableBalance
})

// cash out money feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt( document.getElementById('available-Balance').innerText)
    const totalNewAvailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalance)
})



// togging feture 
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})