let elInputUsername = document.querySelector('#username')
let elInputPw = document.querySelector('#pw')
let elWrongIdMessage = document.querySelector('.failure_message.wrong_id')
let elNoneIdMessage = document.querySelector('.failure_message.none_id')
let elWrongPwMessage = document.querySelector('.failure_message.wrong_pw')
let elNonePwMessage = document.querySelector('.failure_message.wrong_pw')
let elPwRequires = document.querySelector('.pw_requires')
let elPwRequiresDigitsC = document.querySelector('.digitsC')
let elPwRequiresDigitsK = document.querySelector('.digitsK')
let elPwRequiresNumC = document.querySelector('.numC')
let elPwRequiresNumK = document.querySelector('.numK')
let elPwRequiresUppercaseC = document.querySelector('.uppercaseC')
let elPwRequiresUppercaseK = document.querySelector('.uppercaseK')
let elPwRequiresSpecialC = document.querySelector('.specialC')
let elPwRequiresSpecialK = document.querySelector('.specialK')

elInputUsername.onkeyup = function() {

    if(emailFormat(elInputUsername.value)){
        elWrongIdMessage.classList.add('hide')
    }else{
        if(elInputUsername.value){
            elNoneIdMessage.classList.add('hide')
            elWrongIdMessage.classList.remove('hide')

        }else{
            elNoneIdMessage.classList.remove('hide')
            elWrongIdMessage.classList.add('hide')

        }
    }
}

elInputPw.onkeyup = function(){
console.log(elInputPw.value)
    if(elInputPw.value){
        elNonePwMessage.classList.add('hide')
        elPwRequires.classList.remove('hide')

    }else{
        elNonePwMessage.classList.remove('hide')
        elPwRequires.classList.add('hide')

    }

    if(pwFormatLeastNum(elInputPw.value)){
        elPwRequiresNumK.classList.remove('hide')
        elPwRequiresNumC.classList.add('hide')
    }else{
        elPwRequiresNumK.classList.add('hide')
        elPwRequiresNumC.classList.remove('hide')
    }
    if(pwFormatLength(elInputPw.value)){
        elPwRequiresDigitsK.classList.remove('hide')
        elPwRequiresDigitsC.classList.add('hide')
    }else{
        elPwRequiresDigitsK.classList.add('hide')
        elPwRequiresDigitsC.classList.remove('hide')
    }
    if(pwFormatUppercase(elInputPw.value)){
        elPwRequiresUppercaseK.classList.remove('hide')
        elPwRequiresUppercaseC.classList.add('hide')
    }else{
        elPwRequiresUppercaseK.classList.add('hide')
        elPwRequiresUppercaseC.classList.remove('hide')
    }
    if(pwFormatSpecial(elInputPw.value)){
        elPwRequiresSpecialK.classList.remove('hide')
        elPwRequiresSpecialC.classList.add('hide')
    }else{
        elPwRequiresSpecialK.classList.add('hide')
        elPwRequiresSpecialC.classList.remove('hide')
    }
}

function emailFormat(value){
    return value.includes('@'&&'.') 
}

function pwFormatLength(value){
    return 8 <= value.length && value.length <= 32
}

function pwFormatLeastNum(value){
    if(value.match(/[0-9]/g)){
        return true
    }else{
        return false
    }
}

function pwFormatUppercase(value){
    if(value.match(/[A-Z]/g)){
        return true
    }else{
        return false
    }
   
}

function pwFormatSpecial(value){
    if(value.match(/[@#$%^&+!=]/g)){
        return true
    }else{
        return false
    }}