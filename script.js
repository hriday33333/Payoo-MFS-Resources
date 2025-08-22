// loging btn
document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 1234567810
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConbert = parseInt (mobileNumberValue)
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConbert = parseInt(pinNumberValue)

    if(mobileNumberValueConbert===mobileNumber && pinNumberValueConbert===pinNumber){
       window.location.href="./main.html"
    }
    else{
        alert('invalid credentials')
    }
})