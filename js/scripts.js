$(document).ready(function(){


//FUNÇOES


//Pegar o conteúdo de um ID  

 //var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
 //console.log(conteudo_caixa);

//Colocar o conteúdo pego e colocando em outro ID
//colocando o sinal de =

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;


//  document.getElementById("caixa_amarela").innerHTML= '<h1>' + 'Caixa amarela' + '</h1>';

//  var conteudo = document.getElementById("caixa_azul").innerHTML;

//  document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';

// function soma_numeros(){
//     var x = 5;
//     var y = 2;
//     var soma = x + y;
//      return soma;
// }



// function soma_args(num1,num2){
//    var soma = num1 + num2;
//      return soma;
// }

// console.log("O resultado da soma é: " + soma_args(10,25));

// function valor_imc(peso,altura) {
    
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// console.log(typeof meu_peso);
// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);
// // var conteudo_peso = getElementById("peso").innerHTML = meu_peso;
// // var conteudo_altura = getElementById("altura").innerHTML = minha_altura;


// var meu_imc = valor_imc(meu_peso,minha_altura);
// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);


//ARRAYS

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1].categorias[0]); 
// cursos[2].categorias[1]="Administração de Empresas";
// console.log(cursos);

//METODOS

// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     'ano_nasc': 1995,
//     'nome_completo': function() {
//         var nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return nomeCompleto;
//     },
//     'idade': function (){
//         var idade_aluno = 2020 - this.ano_nasc;
//         return idade_aluno;
//     }
// };

// console.log(aluno.idade());

//Aula 16 - Eventos

// document.getElementById("click-me").onclick = function(){
//     alert("Você clicou no botão");
// }

// document.getElementById("hover-me").onmouseover = function(){
//     alert("Você passou com o cursor no botão");
// }

// document.getElementById("leave-me").onmouseout = function () {
//     alert("Você saiu com o cursor do botão");
// }

// document.onkeydown = function(){
//     alert('Você apertou a tecla.' + event.keyCode);
// }

// function button_clicked() {
//     alert("Você clicou no botão");
// };

//AULA 17 - Manipulação de CSS

// document.getElementById("botao_cor").onclick = function(){
//     // document.getElementById("botao_cor").style.height = "100px"; 
//     // document.getElementById("botao_cor").style['background-color'] = "purple";
//     // document.getElementById("botao_cor").style.transform = "translateX(200px)";

//     //Outra forma de alterar é usando o this

//     this.style.height = "100px"; 
//     this.style['background-color'] = "purple";
//     this.style.transform = "translateX(200px)";
// }

//Aula 18 - Outros mmétodos getElementBy

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste1";

// console.log(exemplo);

// var exemplo = document.getElementsByTagName("p");

// console.log(exemplo);

//Aula 19 - Loops For e For/in

// for (var a = 0; a < 5;a++){
//     console.log(a);
// }

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for (var b = 0; b < alunos.length; b++){
//     console.log(alunos[b]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }

// for (var prop in carro){
//     console.log(prop + ':' + carro[prop]);
// }

// var elementos = document.getElementsByTagName("p");

// for ( var c = 0; c < elementos.length; c++){
//     elementos[c].style.color = "orange";
//     elementos[c].style['font-weight'] = "bold";
// }

//************************************Aula 20 - Loops While e Do/While

// var count = 0;

// while(count < 5) {
//     console.log(count);
//     count++;
// }

// var count = 0;
// var elementos = document.getElementsByClassName("exemplo");

// while(count < elementos.length){
//     elementos[count].style.color = "orange";
//     elementos[count].style['font-weight'] = "bold";
//     count++;
// }

// var count2 = 10;

// do{
//     console.log(count2);
//     count2++;
// }while(count2 < 5);

//********************************************Aula - 21 Condicionais

// var idade = 18;

// if(idade < 18){
//     console.log("Menor de Idade");
// }else if(idade == 18){
//     console.log("Tem 18 anos")
// }else{
//     console.log("Maior de idade")
// }

// var nota = 8;
// var faltas = 4;

// if(nota >= 7 && faltas <= 4){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }

// if(nota < 7 || faltas > 4){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }

//*****************************************Aula - 24

// window.onmousemove = function (e){

//     if (e.pageY < 5){
//         alert('Não perca os descontos exclusivos na seção de promoções');
//     }
// }

//*******************************************Aula - 25 LocalStorage

//window.localStorage.setItem("nome", "João");

    // console.log(localStorage['nome']);
    // localStorage.removeItem("nome");
    // console.log(localStorage['nome']);


    
    // document.getElementById("enviar-nome").onclick = function () {

    //     //Guardar o nome digitado em local storage
    //     var nome = document.getElementById("nome-usuario").value;

    //     //esconder o formulário
    //     localStorage.setItem("nome", nome);

    //     //atualizar e mostrar mensagem de boas vindas
    //     document.getElementById("name-field").style.display = "none";

    //     document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + ", tudo bem?"; 

    //     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";

    //     document.getElementById("welcome-area").style.display = "initial";
         
    // };

    // if(localStorage.nome){
    //     //esconder o formulário
    //     document.getElementById("name-field").style.display = "none";

    //      //atualizar e mostrar mensagem de boas vindas
    //      document.getElementById("name-field").style.display = "none";

    //      document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + ", tudo bem?"; 
 
    //      document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
 
    //      document.getElementById("welcome-area").style.display = "initial";
    // }
    //     document.getElementById("not-me").onclick = function () {

    //         //remover a chave do local storage
    //         localStorage.removeItem("nome");

    //         //Esconder mensagem de boas vindas
    //         document.getElementById("welcome-area").style.display = "none";

    //         //mostrar formilário
    //         document.getElementById("name-field").style.display = "initial";
    // }

    //*************************************Aula 26 - Data e Hora

    // var data_hoje = new Date();
    // console.log(data_hoje.getDate());

    // var data_nascimento = "1980-03-01";

    // var ano_nascimento = new Date("1980-03-01").getFullYear();
    // var ano_atual = new Date().getFullYear();
    // var idade = ano_atual - ano_nascimento;

    // console.log(idade);
    

    // var data = new Date();

    // console.log(data.getTime()/1599768169530);

    // var data_envio = new Date("2020-03-20");
    // data_envio = data_envio.getTime();

    // var data_recebida = new Date("2020-04-06");
    // data_recebida = data_recebida.getTime();

    // var qtd_dias = (data_envio - data_recebida) / 86400000;
    
    // document.getElementById("dias_entrega").innerHTML = qtd_dias;

    //********************************Aula 27 - Método de tempo

    // console.log('Mensagen 1');

    // window.setTimeout(function(){

    //     console.log("Mensagem 2")
    // },3000);

    // document.getElementById("mostrar-loader").onclick = function (){
    //     document.getElementById("spinner-loader").style.display = "initial";

    //     window.setTimeout(function(){
    //         document.getElementById("spinner-loader").style.display = "none";

    //     },5000);
    // };

    // var count = 0;

    // var inter = window.setInterval(function(){
    //     console.log(count)
    //     count++;
    //     if(count >=10) {
    //         window.clearInterval(inter);
    //     }
    // },1000);


    // var rel = window.setInterval(function(){

    // var data = new Date();
    // var hr = data.getHours();
    // var mn = data.getMinutes();
    // var sg = data.getSeconds();

    // function format_time(time){
    //     if (time >= 0 && time <= 9){
    //        var formatted_time = time.toString();
    //        formatted_time = "0" + formatted_time;
    //     }else{
    //         formatted_time = time.toString();
    //     }
    //     return formatted_time;
    // }

    // var tempo = document.getElementById("relogio").innerHTML = format_time(hr) + ":" +format_time(mn) + ":" +format_time(sg);

 
    //  },1000);

    // *******************************Aula 28 - Switch***********************************//

    // function valor_pegadio (categoria) {

    //     switch (categoria){

    //     case'1':
    //         return 11.22;
    //         break;

    //     case'2':
    //         return 22.45;
    //         break;

    //     case'3':
    //         return 16.88;
    //         break;

    //     case'4':
    //         return 33.65;
    //         break;

    //     default:
    //         return 'categoria não encontrada';

    //     }
    // }

    // var categoria_veiculo ="3";

    // console.log(valor_pegadio(categoria_veiculo));

    // var categoria_veiculo ="2";
    // console.log(valor_pegadio(categoria_veiculo));

    // var categoria_veiculo ="5";
    // console.log(valor_pegadio(categoria_veiculo));

    //********************************Aula - 29 BREAK e CONTINUE ********************/
    // var x =0;

    // while (x < 10){
    //     console.log(x);
    //     x++;

    //     if (x == 5){
    //         break;
    //     }
    // }

    // var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

    // for (a = 0;a < lista.length; a++){
    //     if( lista[a] == 33){
    //         console.log("Valor encontrado");
    //         break;
    //     }

    //     console.log('Tentativa: ' + a);
    // }

    //var numero = 0;

    // while (numero < 20){

    //     if (numero == 3){
    //         numero++;
    //         continue;
    //     }
    //     console.log(numero);
    //     numero++;
    // }

    
    //Ex2 
    
    // while (numero < 20){
    //     numero++;

    //     if (numero % 2 == 0) {
    //        continue; 
    //     }

    //     console.log(numero);
    // }

    //*******************************Aula - 30 Formulários ************************* */

    //SELECT BOX

    // document.getElementById("mostrar_opcao").onclick = function (){

    // var campo_select = document.getElementById("options");
    // var indice_selecionado = campo_select.options.selectedIndex; 
    // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
 
    //};

       //*************************OU****************** */
    
    // document.getElementById("mostrar_opcao").onclick = function () {

    //     var valor_selecionado = document.getElementById("options").value;
    //     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    // }

    //Radio Buttons

//     document.getElementById("mostrar_radio").onclick = function () {

//         var radio = document.getElementsByName("genero");

//         var radio_selected;

//         for (var a = 0; a < radio.length;a++){
//             if (radio[a].checked) {
//                 radio_selected = radio[a].value;
//                break;
//             }
//     }
//     document.getElementById("radio_selecionado").innerHTML = radio_selected;
// };

//check - boxes

// document.getElementById("mostrar_check").onclick = function () {
//     document.getElementById("check_selecionado").innerHTML ="";// Limpar para não repetir as respoastas
//      var check =  document.getElementsByName("interesse");
//      for (var b = 0; b < check.length;b++){
//          if (check[b].checked){
//              document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';

//          }
//      }

// };

//Date

// document.getElementById("mostrar_data").onclick = function () {

//     var data_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_select);
//     document.getElementById("data_selecionada").innerHTML = data_completa;
//     console.log(data_select);
// };

//*****************************AULA 31 - EVENTO ONCHANGE******************************/

// document.getElementById("escolaridade").onchange = function () {

//     var campo_select = document.getElementById("escolaridade");
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById('escolaridade_selecionada').innerHTML = valor_selecionado;
// };

// var check = document.getElementsByName("lanche");

//     for (var a = 0; a < check.length; a ++){

//         check[a].onchange = function () {

//         document.getElementById("check_selecionado").innerHTML ="";
        
//     for (var b = 0; b < check.length; b++){
         
//         if (check[b].checked){

//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>'
//             }

//         }
//     }
// }
 
/*-----------------------------------Inicio JQUERY----------------------------------------------*/

//Aula 34 - Jquery - Sintaxe

// document.getElementById("exemplo").innerHTML = "ola"; /*Forma modo Vanilla ou modo Javascript puor*/

// $("elemento").html("olá");/*Modo Jquery*/
// $(".elemento").html("olá");/*Modo Jquery com classe*/
// $("#elemento").html("olá");/*Modo Jquery com ID*/

// $("#esconder").click(function(){
//     $(".exemplo").hide() /*Esconder o elemento*/
// });

/*--------------------------------------Aula 35 - Jquery - Maninpulação do conteúdo HTML----------------------------------------- */

// var conteudo_html = $("#paragrafo-html").html();/*Traz todo conteudo incluindo as tags de formatação*/
// console.log(conteudo_html);

// // var conteudo_html2 = $("#paragrafo-html").text();/* Traz somente o texto*/
// // console.log(conteudo_html2)

// $("#paragrafo-html").html("Mudar conteúdo do parágrafo");//Alterando o conteúdo

// conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

// /*---Mudar link da página---*/
// var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#paragrafo-link").attr("href","http://www.udemy.com");
// url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);


// /*------Mudando a imagem*/

// $("#mudar_imagem").click(function(){
//     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
//     $("#mudar_imagem").hide()
// });

// //$("#paragrafo-empty").html("");//Remover o texto 

// $("#paragrafo-empty").remove("");//Remover todo elemento




// /*------------------Aula 35 - Loop Each----------------------*/


// var lista =["HTML", "CSS", "Javascript", "PHP"];


// // $.each(lista, function(indice,valor){
// //     console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
    
// // });

// // var pessoa = {
// //     'nome': 'Jão Pedro',
// //     'DN': 20/01/1190,
// //     'CPF': '111.111.111-11'
// // };

// // $.each(pessoa, function(chave,valor){
// //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
// // });

// var interesses = $("#interesses li");
    

// $.each(interesses, function(chave, valor){
//     console.log($(valor).text());
    
// });

/*------------------------Aula 36 Formulários---------------------------------*/

//Pegar conteúdo do campo input 
//     var conteudo_input = $("#campo_nome").val();
//         console.log(conteudo_input);

// //Mudar o conteúdo do campo
//     $("#campo_nome").val("João Pedro");

//     var conteudo_input2 = $("#campo_nome").val();

// //Mostrar qual opção está selecionada Select Box
//     console.log( $("#options").val );
 
// Verificar qual opção foi selecionada pelo Select Box pelo nome
//     console.log( $("#options").find(":selected").text() );


// Mudar o valor e automaticamente aparecer no console
$("#options").change(function(){
    var nome_selecionado = $('#options').find(":selected").text();
    console.log(nome_selecionado);
});

//Mostrando opção pelos Radio Buttons

$("input[name='genero']").change(function() {

    var novo_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
    console.log(novo_radio_selecionado);

});


//Mostrando valores selecionados pelo check box
$("input[name='interesse']").change(function() {

    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) {
        
        textos.push($(value).parent("span").text());
    
    });
    
    console.log(textos);
    
});

/*-----------------------Aula 37 - Manipulação de classes CSS Jquery-----*/

//addClass(), removeClass(), toggleClass()

//Adicionar evento ao clicar com css
$("#adicionar_classe").click(function(){
    $("#paragrafo-classes").addClass("styling");
});


//Remover a classe alterada
$("#remover_classe").click(function(){
    $("#paragrafo-classes").removeClass("styling");
});

//Alternar classe em um só botão

$("#alternar_classe").click(function(){
    $("#paragrafo-classes").toggleClass("styling");
});

/*-----------------Aula 38 Jquery Eventos -----------------*/







    
});