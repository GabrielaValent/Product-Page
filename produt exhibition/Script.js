$(document).ready(function(){ //quando o documento já tiver carregado
    $('.color-choose input').on('click', function(){ //quando apertar o input(cor) realizar a função
        var watchColor = $(this).attr('data-image'); //atribuir a variável a imagem selecionada 

        $('.active').removeClass('active'); //retira a classe ativa das cores
        $('.left-col img[data-image =' + watchColor + ']').addClass('active'); //atribui  classe ativa para a cor selecionada
        $(this).addClass('active');
    });
});