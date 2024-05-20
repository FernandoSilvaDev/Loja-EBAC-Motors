//________________________________________Efeito carousel de imagens___________________________________________
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false           //Arrows é ter o botão ou não no carousel
    })

//____________________________________Efeito de aparecer e esconder o menu_____________________________________
    $('.menu-hamburguer, li').click(function(){
        $('nav').slideToggle()                //slideToggle, fará ação de fazer o slider donw, caso click novamente e ação já esta ativo ele fará o slider up.
    })

//_____________________________________Máscara no input______________________________________________________________
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

//_____________________________________Validação__________________________________________________________
    $('form').validate ({
        rules : {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true},
            mensagem: {required: true},
            veiculosInteresse: {required: false}
        },
//________________________________Menssagens de alerta___________________________________________________
        messages: { 
            nome: 'Por favor, insira o seu nome!',
            telefone: 'Por favor, insira o seu telefone!'
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campo não preenchido!`)
            }
        }
    })
/*_______________________________Efeito carrosel rolagem da pagina_________________________________________________________*/

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)        // 1000 - milesegundos que fica em 1 segundo
        
//________________________________________Colocar o valor no input automaticamente__________________________
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)
    })
})