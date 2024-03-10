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
function mostrarsenha(){
   var senha = window.document.getElementById('isenha')
   var mostrar = window.document.getElementById ('mostrar')
   
   if (senha.type === 'password'){
    senha.setAttribute('type', 'text')
    mostrar.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
   } else {
    senha.setAttribute('type', 'password')
    mostrar.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
   }
}



// window.alert("funcionou")

/*var senhaoculta = window.document.getElementById ('isenha')
   if( senhaoculta.type == 'password'){
    senhaoculta.type = 'Text'
   } else {
    senhaoculta.type = 'password'
   }
}
function mudaricon(){
    var imagem = window.document.getElementsByClassName ('material-symbols-outlined')
    imagem.setAttribute('Visibility')*/