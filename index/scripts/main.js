const login = document.querySelector('.login');
const modalLogin = document.querySelector('.modal-login');
const btnClose = document.querySelector('.btn-close');
const loginBlock = document.querySelector('.login-block')

console.dir(login);
login.addEventListener('click', () => {
    modalLogin.classList.remove('hide');
})

btnClose.addEventListener('click', () => {
    modalLogin.classList.add('hide');
})
loginBlock.addEventListener('click', (event) => {
    let target = event.target;
    if (target === modalLogin) {
        modalLogin.classList.add('hide');
    }
})

let foobar = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 !=0){
            console.log('foo');
        } else if (i % 5 == 0 && i % 3 != 0){
            console.log('bar');
        } else if (i % 5 == 0 && i % 3 == 0){
            console.log('foobar');
        } else {
            console.log(i);
        }
    }
}
foobar();