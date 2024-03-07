var login = window.document.getElementById('ilogin')
var senha = window.document.getElementById ('isenha')
login.addEventListener('mouseenter', entrar )
login.addEventListener('mouseout', sair)
senha.addEventListener('mouseenter', entrarr )
senha.addEventListener('mouseout', sairr)
function entrar(){
    login.style.backgroundColor = '#dfddbd'
}
function sair(){
    login.style.backgroundColor = '#016FB9' 
}
function entrarr(){
    senha.style.backgroundColor = '#dfddbd'
}
function sairr(){
    senha.style.backgroundColor = '#016FB9'
}