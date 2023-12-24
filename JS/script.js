$(document).ready(function () {
    // Adiciona rolagem suave a todos os links
    $("a").on('click', function (event) {

      // Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
      if (this.hash !== "") {
        // Previne o comportamento padrão de clique no âncora
        event.preventDefault();

        // Armazena o hash
        var hash = this.hash;

        // Usando o método animate() do jQuery para adicionar rolagem suave da página
        // O número opcional (800) especifica o número de milissegundos que leva para rolar até a área especificada
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Adiciona o hash (#) à URL quando terminar a rolagem (comportamento de clique padrão)
          window.location.hash = hash;
        });
      } // Fim do if
    });
  });

  type="text/javascript"
    $(document).ready(function () {
    $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 550) {
        $('.navbar').addClass('solid');
        $('.back-to-top').addClass('visible');
      } else {
        $('.navbar').removeClass('solid');
        $('.back-to-top').removeClass('visible');
      }

    });
  });