<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Qué es la comunicación 
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 La palabra comunicación deriva del latín communicatĭo, que significa compartir, participar en algo o poner en común.
          br
          br
          |El lenguaje es el instrumento que facilita al hombre efectuar o expresar pensamientos, ideas, sentimientos, los cuales se materializan a través de signos verbales, originando la comunicación. El proceso comunicativo es fundamental para la vida en sociedad, pues permite que los seres humanos se puedan expresar y comunicar información entre sí, instaurando relaciones y acuerdos.
        .bg--4-claro.p-3.px-5
          p.mb-0 La comunicación y el lenguaje son muy afines entre sí, porque la comunicación contempla diversos elementos donde se pueden configurar los signos lingüísticos, y el lenguaje es el encargado de aplicar dichos signos.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/0.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Para que una comunicación sea clara, debe contar con un contexto determinado, porque este es el escenario donde se producirá la comunicación, es decir, para entablar una comunicación, se requiere de un mensaje directo y un espacio adecuado.
      br
      br
      b Básicamente, la comunicación es el intercambio de mensajes producidos entre dos o más individuos, con el fin de brindar información y, de igual forma, recibirla. En este asunto, interceden un emisor y un receptor, y un mensaje que se pone de manifiesto.
      br
      br
      |La comunicación permite realizarse de diferentes formas, que pueden ser verbal, manejando un lenguaje o idioma, o no verbal, por intermedio de gestos, expresión corporal o signos no lingüísticos.
      br
      br
      |Los elementos que hacen parte del proceso comunicativo son: 
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/2.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="5%" y="25%" numero="")
        .h5.mb-2 Emisor
        p Es quien comunica el mensaje.
      .tarjeta.bg-white.p-3(x="50%" y="20%" numero="")
        .h5.mb-2 Ruido
        p Son todas las distorsiones que logran influir al momento de comunicar un mensaje, las cuales pueden ser del emisor, del medio de comunicación (canal) o del receptor. 
      .tarjeta.bg-white.p-3(x="95%" y="37%" numero="")
        .h5.mb-2 Receptor 
        p Es quien recibe el mensaje.
      .tarjeta.bg-white.p-3(x="5%" y="85%" numero="")
        .h5.mb-2 Código
        p Conjunto de signos que son utilizados para organizar el mensaje (palabras, gestos, símbolos).
      .tarjeta.bg-white.p-3(x="24%" y="74%" numero="")
        .h5.mb-2 Mensaje
        p Es la información de datos que se comunica.
      .tarjeta.bg-white.p-3(x="35%" y="78%" numero="")
        .h5.mb-2 Canal de comunicación
        p Es un medio físico que se utiliza para enviar el mensaje: Internet, carta, televisión, teléfono.
      .tarjeta.bg-white.p-3(x="66%" y="78%" numero="")
        .h5.mb-2 Contexto
        p Son las situaciones en las que se desenvuelve el proceso de comunicación, son las interpretaciones del mensaje (contexto social, marco de referencia cultural del emisor y el receptor, espacio físico y contexto social).
      .tarjeta.bg-white.p-3(x="75%" y="72%" numero="")
        .h5.mb-2 Retroalimentación
        p Es la contestación del receptor al momento de recibir un mensaje.  
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Técnicas de comunicación
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-f.bg--1-claro.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.c--4
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center.mt-4 “La comunicación es un medio que permite expresar ideas, opiniones o información a través de una computadora, la televisión y la radio; este método de comunicación escrita, oral y visual está basado en un emisor que se encarga de emitir contenido informativo a un receptor.
            br
            br
            |Esta disciplina es una acción necesaria y primordial para los seres humanos. Es la manera en que se pueden expresar los deseos y estados de ánimos. También, por medio de este proceso, se puede opinar sobre los resultados de las labores que realice el entorno sobre la sociedad. La principal forma que se tiene para comunicarse es el lenguaje hablado, sin dejar de lado el gran valor que asume la comunicación no verbal. La comunicación se vale de unas técnicas que la convierten en un proceso muy eficaz. Por lo tanto, es sumamente importante que la sociedad aprenda a expresarse bien verbal y corporalmente”.
          .bloque-texto-f__autor.mb-3
            h3.mb-0  (Definición.xyz, s. f.)
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
    p.mb-5 Las diferentes técnicas de comunicación son:
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Comunicación asertiva
    p.mb-5 Permite manifestar de forma positiva, clara, oportuna y simple un mensaje a un receptor, haciendo énfasis en lo que una persona pueda estar sintiendo, algo que esté pensando o simplemente hacer un pedido claro de algo. Es importante tener en cuenta que este tipo de comunicación:
    .row.mb-5
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg--3-claro.rounded-0(@mouseover="indicadorTarjetaFlip = false" )
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="height:341px")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Permite entablar una conversación expresando lo que se quiere decir, sin embargo, <b>es importante no herir los sentimientos de las otras personas</b>, es una habilidad personal relacionada con la inteligencia emocional y la capacidad de comunicarse eficazmente y de forma armoniosa con las demás personas. 
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg--4-claro.rounded-0(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="height:341px")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/5.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Busca comunicar, de forma objetiva, un punto de vista, por intermedio de un lenguaje de respeto y honesto, sin importar que el punto de vista expuesto no sea el que se desea escuchar por parte de un receptor. De igual forma, lo que busca la comunicación asertiva <b>es que el mensaje no contenga errores que generen una mal interpretación, haciéndola inefectiva</b>. Se fundamenta en el respeto y la empatía, lo cual permite generar confianza mutua entre las personas y sus diferentes posturas sobre algún tema en específico.
    .bg--texture.p-5.position-relative.mb-5
      .imagen-adornos-flotantes__img.d-none.d-lg-block.d-md-block: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
      .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: -3% ; right: ; top:0 ; bottom: ; width: 60px ")
      .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: -5% ; width: 60px ")
      .row
        .col-lg-5: img(src="@/assets/curso/6.svg")
        .col-lg-7 
          h2 Tenga en cuenta...
          p La comunicación debe ser clara y concreta.
            br
            br
            |La comunicación debe ser breve, se debe evitar un argumento extenso y recurrente.
            br
            br
            |La comunicación permite pedir disculpas, de ser necesario, sin necesidad de sentirse cuestionado. Esto permitirá que la comunicación que se está llevando a cabo se perciba por parte del receptor en un entorno de seguridad referente a un tema en específico.
            br
            br
            |La comunicación siempre debe llevarse con respeto.
    p.mb-5 Ahora bien, existen tres aspectos base de la comunicación asertiva:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/7.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Confianza
              p Hace énfasis en tener la seguridad y credibilidad para manejar una situación.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/8.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Claridad
              p Hace referencia a que el mensaje emitido es claro y de fácil entendimiento y comprensión. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/9.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Control
              p Se precisa que la información que se brinda sea generada de forma calmada y controlada.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Comunicación verbal
    p.mb-5 Puede ser escrita u oral, y tiene el fin de dejar un mensaje claro. Es importante saber la manera en que se transmite a su receptor, de forma correcta, educada, fluida e interesante. Para el lenguaje verbal es importante tener claro que:
    SlyderD.mb-5(:datos="datosSlyder")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Comunicación no verbal
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es aquella que complementa a las palabras y que está determinada por la postura, la mirada, gesticulación, o la forma en que se mueven las manos.
          br
          br
          |Para tener una comunicación no verbal adecuada es fundamental saber dominar este tipo de acciones corporales y faciales, con el fin de hacer amena y objetiva la sustentación de una conversación.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/13.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Comunicación escrita
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es la forma de interacción mediante el uso de palabra textual o escrita, con el fin de expresar un mensaje sin necesidad que el emisor y el receptor concuerden en un mismo tiempo y espacio físico. 
          br
          br
          |La comunicación escrita radica en la escritura de signos que hacen parte de un código lingüístico definitivo, y cuenta con sus propias pautas ortográficas y gramaticales. La comunicación escrita es una característica propia del ser humano, puesto que involucra el uso de la razón y el intelecto al momento de realizar y pensar un texto y su contenido.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/14.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Sus características son:
    ImagenInfografica.color-acento-botones.btn-white.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/15.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="18%" y="70%" numero="")
        p Ser una capacidad propia del ser humano, que es capaz de realizarla a través del trabajo intelectual y motriz.
      .tarjeta.bg-white.p-3(x="28%" y="78%" numero="")
        p Se rige por un sistema de códigos, los cuales cuentan con sus propias pautas de ortografía y de gramática.
      .tarjeta.bg-white.p-3(x="40%" y="80%" numero="")
        p Requiere tener soporte concreto, con el fin de plasmar un mensaje y difundirlo (computador, papel y lápiz o bolígrafo).
      .tarjeta.bg-white.p-3(x="53%" y="75%" numero="")
        p Siempre suministra una respuesta, que, por lo general, es tardía.
      .tarjeta.bg-white.p-3(x="67%" y="70%" numero="")
        p Es precisa, ya que cualquier tipo de contenido escrito puede ser revisado antes de ser difundido.
      .tarjeta.bg-white.p-3(x="80%" y="75%" numero="")
        p Puede dejarse en evidencia a través de un soporte físico, el cual permitirá ser repasada las veces que sea necesario.
    p.mb-5 A continuación, se mencionarán cuatro estilos básicos de la comunicación escrita:
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-slyder.p-5(style="height: 500px")
          .row.justify-content-start
            .col-lg-9
              #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
                .row.justify-content-center
                  .col-lg-9
                    .carousel-indicators
                      button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                      button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
                      button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
                      button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
                      button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 1')
                    .carousel-inner
                      .carousel-item.active.slyder-tarjeta.p-4
                        h4 Descriptivo
                        p Hace referencia a la representación de ideas o cosas de forma detallada, con el fin de que el receptor de un mensaje esté en capacidad de reproducir ese concepto en su pensamiento, es decir, una imagen mental en el receptor.
                      .carousel-item.slyder-tarjeta.p-4
                        h4 Narrativo
                        p Se refiere a un relato de un tema en específico, el cual contiene varias acciones que se entrelazan, por lo general, están en orden cronológico. Un narrador, al momento de hablar de un cuento, detalla los personajes en un lugar determinado y un contexto específico.
                      .carousel-item.slyder-tarjeta.p-4
                        h4 Argumentativo
                        p Se basa en un discurso cuyo objetivo principal es crear juicios de valor con relación a un tema determinado, con el fin de convencer al receptor (e.g., la presentación de un proyecto para población en condición de vulnerabilidad).
                      .carousel-item.slyder-tarjeta.p-4
                        h4 Expositivo
                        p Radica en la difusión de información de modo sencillo y claro, sin expresar juicios de valor por parte del emisor, teniendo puntos de vista neutrales y datos estadísticos concretos.
                        
                        
                    button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
                      span.carousel-control-prev-icon(aria-hidden='true')
                      span.visually-hidden Previous
                    button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
                      span.carousel-control-next-icon(aria-hidden='true')
                      span.visually-hidden Next
    p.mb-5 Una vez tratados los conceptos y las técnicas referentes a los diferentes tipos de comunicación, en este componente formativo se tomará como base la comunicación visual.
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Comunicación visual
    p.mb-5 La comunicación visual es el proceso por el cual se transmiten y se reciben ideas o mensajes a través de imágenes, símbolos, signos y otros elementos gráficos. Esta comunicación rompe las barreras del lenguaje porque puede ser entendida y comprendida sin importar un idioma, permite evocar emociones e inspirar cambios. Es importante tener en cuenta que: 
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style='height: 400px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              p Dentro del escenario de la comunicación visual, se le otorga una parte al diseño de comunicación, <b>con el cual se pretende plasmar un mensaje que llame la atención y deje claro el mensaje expuesto</b>. Por otro lado, el diseño gráfico toma una parte importante puesto que, partiendo de este, se puede comunicar el mensaje de forma clara y atractiva, en pocas palabras, se puede decir que la comunicación visual es informativa y atrayente.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/16.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.abajo.bg--4-claro
          .tarjeta-slide__contenedor(style='height: 400px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              p La comunicación visual, objetivamente, se basa en seleccionar los elementos adecuados, para ello, <b>es importante tener en cuenta textos, íconos, formas, imágenes y las visualizaciones de datos</b>, con el fin de dar un significado objetivo a un público determinado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/17.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro
          .tarjeta-slide__contenedor(style='height: 400px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              p No en todas las ocasiones la comunicación visual genera una respuesta óptima o un propósito, y esto hace que se tenga una interpretación errónea de un mensaje, <b>es decir, no genera una sensación, respuesta o interacción en un ámbito personal o profesional</b>; esto genera un escenario negativo, de acuerdo con lo que desee enseñar, por ello, la importancia de llegar a un público objetivo de forma correcta. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/18.jpg')})`}")
    p.mb-5 Con el fin de ejemplarizar la comunicación visual, se pueden mencionar las diversas expresiones artísticas, haciendo referencia al cine y la pintura, de igual forma, las expresiones publicitarias, haciendo alusión a los folletos, volantes y presentaciones digitales, o simplemente, a los elementos tan comunes de la vida cotidiana como las señales de tránsito.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-f.bg--1-claro.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.c--4
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center.mt-4 La comunicación visual es prácticamente todo lo que ven nuestros ojos; una nube, una flor, un dibujo técnico, un zapato, un cartel, una libélula, un telegrama (excluyendo su contenido), una bandera. Imágenes que, como todas las demás, tienen un valor distinto, según el contexto en el que están insertas, dando informaciones diferentes … Dado que se le está otorgando valor comunicativo a lo que puede percibirse con la vista, se debe aclarar que algunos mensajes serían casuales y otros intencionales; la comunicación visual casual es la que no tiene intención alguna, es temporal y puede ser percibida o interpretada libremente por el receptor, dándole un significado científico o estético; por su parte, la comunicación visual intencional es recibida en pleno significado, con una intención del emisor, si bien la intencionalidad no libra al receptor de realizar interpretaciones. 
          .bloque-texto-f__autor.mb-3
            h5.mb-0  (Munari, 1985)
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
    p.mb-5 Los mensajes intencionales pueden ser vistos desde dos aspectos: 
    .row.mb-5
      .col-lg-6
        .tarjeta.tarjetas-text(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/19.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.text-center.mb-3
            h3 La información estética:  
            p Líneas armónicas, relaciones volumétricas, construcciones tridimensionales, entre otras.
      .col-lg-6
        .tarjeta.tarjetas-text
          img(src="@/assets/curso/20.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.text-center.mb-3
            h3 La información práctica:  
            p Dibujo técnico, una fotografía, las noticias, una señal.
    .row.mb-5.align-items-center
        .col-lg-6(data-aos="fade-right")
          .bloque-texto-b.color-acento-contenido.p-4
            .bloque-texto-b__texto
              h4.mb-0 ¿Sabía que la comunicación visual pretende conseguir una respuesta, al igual que ocurre con la comunicación verbal o escrita?
        .col-lg-6(data-aos="fade-left")
          p Y como ocurre con el lenguaje, también la comunicación visual se subdivide en el lenguaje basado en la imagen y en los textos, llamado lenguaje bimedia (icónico y tipográfico), donde el lenguaje gráfico da lugar a ramificaciones técnicas, como el lenguaje del color, signos funcionales, entre otros.
            br
            br
            |De igual forma, la comunicación visual cuenta con los elementos básicos ya nombrados anteriormente, los cuales son: 
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen')
      .tarjeta.bg--4-claro.p-3(x="34%" y="10%" numero="")
        h4 Emisor
        p Persona u objeto que crea el mensaje, lo codifica en un sistema de símbolos que comparte; debe ser claro para ser entendido.
      .tarjeta.bg--4-claro.p-3(x="60%" y="40%" numero="")
        h4 Mensaje
        p Conjunto de signos, símbolos o señales objeto de una comunicación.
      .tarjeta.bg--4-claro.p-3(x="20%" y="78%" numero="")
        h4 Canal
        p Medio empleado por el emisor, con el mínimo de errores, para que el mensaje sea efectivo y objetivo.
      .tarjeta.bg--4-claro.p-3(x="57%" y="80%" numero="")
        h4 Código
        p Contiene varias reglas y procedimientos con el fin de emitir y recibir el mensaje.
      .tarjeta.bg--4-claro.p-3(x="80%" y="53%" numero="")
        h4 Receptor
        p Quien recibe el mensaje; debe conocer los signos con el objetivo de comunicar el mensaje. 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Elementos de la comunicación visual
    p.mb-5 Los elementos visuales constituyen la base de lo que un ser humano puede ver:
    .d-flex.flex-wrap.mb-5
      .tarjeta.tarjeta-flip.bg--4-claro.m-1(@mouseover="indicadorTarjetaFlip = false")
        .indicador--hover(v-if="indicadorTarjetaFlip")
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/22.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Punto
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/23.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Línea
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/24.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Contorno
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/25.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Dirección
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/26.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Tono
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/27.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Color
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/28.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Textura
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/29.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Dimensión
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/30.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Escala
      .tarjeta.tarjeta-flip.bg--4-claro.m-1
        .tarjeta-flip__contenedor(style="height: 205px; width: 229px")
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/31.svg')})`}")
          .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
            h2.text-center.mb-0 Movimiento
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Son la materia prima de todo contexto visual que está conformado por elecciones y combinaciones selectivas, de acuerdo con un contexto determinado. <b>La estructura de trabajo visual es el eje que determina qué elementos visuales pueden estar presentes y cómo se pueden enfocar.</b>
          br
          br
          |El conocimiento en profundidad de la construcción elemental de las formas visuales permite al visualizador una mayor libertad y un mayor número de opciones en la composición; esas opciones son esenciales para el comunicador visual.
          br
          br
          |Para analizar y comprender la estructura total de un lenguaje es útil centrarse en los elementos visuales, uno por uno, a fin de comprender mejor sus cualidades específicas, siendo el punto el elemento más simple de la comunicación visual.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/32.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Estos elementos son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Línea")
        .row
          .col-lg-6
            p Se puede definir como el elemento visual elemental, es una sucesión de puntos conectados el uno del otro generando una trayectoria, está determinada por su grosor, textura y estilo, de igual forma, por su movimiento y dirección. 
              br
              br
              |Con el uso de las líneas se pueden determinar y enfatizar conceptos, separarlos y estructurarlos en una composición gráfica; en muchos entornos literarios, sirven como guía a una lectura en particular. Se puede precisar como <b>“un punto en secuencia”.</b>
          .col-lg-6: img(src="@/assets/curso/33.svg")
      .tarjeta.bg--1-claro.p-4(titulo="Forma")
        .row
          .col-lg-6
            p Es un espacio cerrado, que está limitado por dos superficies y la forma de medirlo es alto por ancho. Se pueden determinar formas geométricas y formas orgánicas, haciendo similitud a la naturaleza y su diversidad. En los dos tipos de formas, se encuentra que pueden estar delimitadas por líneas y colores. Cabe resaltar que a partir de una forma se puede transmitir un mensaje o plasmar una emoción, lo cual hace que la forma sea la forma en cómo se puede comunicar un concepto visual. Está representada por el tamaño de los elementos.
          .col-lg-6: img(src="@/assets/curso/34.svg")
      .tarjeta.bg--1-claro.p-4(titulo="Espacio")
        .row
          .col-lg-6
            p Es el área que está alrededor o dentro de los elementos de una pieza de diseño. Se encuentran <b>espacios negativos y positivos</b>, los cuales tienen algunas características particulares:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system
                  span.h3 a
                p <b>Espacio negativo:</b> es el que está entre los elementos a conformar una pieza gráfica y contiene la composición total.
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system
                  span.h3 b 
                p  <b>Espacio positivo:</b> incluye objetos y sus formas, herramienta básica de diseño y percepción. El espacio es lo que los define.
          .col-lg-6: img(src="@/assets/curso/35.svg")
      .tarjeta.bg--1-claro.p-4(titulo="Tipografía")
        .row
          .col-lg-6
            p Es uno de los elementos visuales que más se utiliza en DG, es la manera más efectiva de generar una comunicación visual directa y clara. De acuerdo con el tipo de tipografía, se puede tener una idea clara de qué mensaje se quiere dejar a través del uso tipográfico, el cual se conforma por la unión de formas geométricas y orgánicas.
              br
              br
              |La gran mayoría de tipografías, de acuerdo con sus características, permiten descomponer la forma sin alterar el resultado, es decir, el mensaje; la tipografía imprime carácter y expresividad, lo que provoca un significado de lo que se quiere transmitir; da estilo.
          .col-lg-6: img(src="@/assets/curso/36.svg")
      .tarjeta.bg--1-claro.p-4(titulo="Color")
        .row
          .col-lg-6
            p Es la herramienta más relevante del diseño gráfico, porque con la percepción del ojo humano se puede captar, distinguir y dejar una sensación de calidez o rigidez, de acuerdo con la cantidad de color que contenga una pieza gráfica, es decir, qué tanta luz se refleja en un objeto, qué tanta cantidad de color puede reflejar una sola imagen y cómo se puede distinguir en una composición. 
              br
              br
              |Cada color puede tener un significado diferente, una sensación, un concepto o algo personal, que a la percepción humana puede generar algún tipo de emocionalidad y determinación a la hora de crear una pieza gráfica. Los colores son representaciones monocromáticas.
          .col-lg-6: img(src="@/assets/curso/37.png")
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es así como la comunicación visual comprende todos los medios expresivos de las artes visuales y permite a los artistas la creación de las formas en sus composiciones mediante la utilización de diferentes técnicas, materiales, e implementos, sobre una variedad de soportes, que le permiten manifestar sus ideas, emociones, sentimientos, experiencias, etc., y con ello, provocar una reacción en el receptor del mensaje visual. 
          br
          br
          |Por su parte, las obras artísticas se conectan con un tipo específico de lenguaje y permiten a los artistas la creación de las formas en sus composiciones, mediante materiales, implementos y técnicas, identificando propiedades y cualidades expresivas de las imágenes visuales. Cada elemento creador no es solo una forma, sino que se configuran una serie de relaciones que se crean entre todos los elementos visuales que la componen y las interrelaciones de estos elementos, como la figura con respecto al plano o al espacio o fondo. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/38.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Funciones de la comunicación visual
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El lenguaje visual se basa en un conjunto de elementos gramaticales y sintácticos que se pueden aplicar en cualquier imagen visual. Se puede decir que una imagen puede llegar a ser de gran beneficio para quien la produce, siendo su objetivo principal comunicar de forma efectiva, percibiendo el mensaje de manera sencilla, contundente y rápida.
          br
          br
          |Se debe tener presente que la comunicación visual puede ser causal o intencional, de allí se desprenden una serie de funciones básicas para su aplicación al momento de plasmar un mensaje visual.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/39.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Las funciones básicas de la comunicación visual se pueden diferenciar así:
    .row.justify-content-center
      .col-lg-12
        #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel')
      
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 1')
          .carousel-inner
            .row.justify-content-center
              .col-lg-10
                .carousel-item.active.p-4
                  .row.mb-5
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .indicador--hover(v-if="indicadorTarjetaSlide")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/40.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función expresiva o emotiva:
                            p Su objetivo es transmitir emociones por intermedio de las imágenes.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/47.jpg')})`}")
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/41.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función conativa, apelativa o exhortativa: 
                            p Está directamente relacionada con la persuasión, su objetivo principal es convencer; para ser más precisos, se puede tomar como referencia la publicidad.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/48.jpg')})`}")
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/42.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función referencial o informativa:
                            p Se basa en imágenes con el fin de informar, haciendo referencia a las señales de tránsito, revistas o periódicos. 
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/49.jpg')})`}")
                .carousel-item.p-4
                  .row.mb-5
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/43.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función poética o estética: 
                            p Radica en la búsqueda de la belleza con sentido artístico y estético.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/50.jpg')})`}")
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función fática: 
                            p Su principal objetivo es llamar la atención, aquí se puede hacer alusión a los mensajes publicitarios.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/51.jpg')})`}")
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/45.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función metalingüística: 
                            p Hace énfasis en que un receptor conozca los códigos empleados, para otorgarle un significado a una imagen.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/52.jpg')})`}")
                .carousel-item.p-4
                  .row.mb-5.justify-content-center
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
                        .tarjeta-slide__contenedor(style='height: 548px').d-flex.align-items-center
                          .tarjeta-slide__contenido.p-4.p-xl-5
                            img(src="@/assets/curso/46.svg" alt="Adornos flotantes" style='width: 85px').m-auto.mb-3
                            h5 Función descriptiva: 
                            p Facilita información minuciosa y objetiva sobre lo representado, tomando como referencia señales de prevención o peligro.
                          .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/53.jpg')})`}")
                                
              
              
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Imagen y sociedad
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-f.bg--1-claro.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.c--4
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center.mt-4 Tanto las artes visuales como la comunicación visual son consideradas fundamentales para el desarrollo de la capacidad del individuo de percibir e interpretar críticamente las formas y las imágenes del entorno del individuo. Todos los objetos, espacios y comunicaciones visuales van más allá de la utilidad comercial o de uso. 
          .bloque-texto-f__autor.mb-3
            h5.mb-0  (Machuca, 2011)
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido
      h5 Figura 1 
      span Relación del medio con los objetos
    .bg--4-claro.p-4.mb-5
      .row.align-items-center
        .col-lg-6: img(src="@/assets/curso/54.svg")
        .col-lg-6
          p La utilización de la imagen en diferentes culturas implica una serie de intereses comunes definidos en los elementos gráficos y su significado, estos valores dependen del código y su contexto, de allí la importancia de conocer la realidad en que está inmersa una imagen, comprender las normas y signos utilizados, donde el proceso de significación depende también de la asociación de ideas establecidas en una comunidad, y se forja por los convencionalismos, condicionados por las circunstancias y lugares en que se producen.
    p.mb-5 Un claro ejemplo es el significado e interpretación dados a los colores de la bandera de Colombia, como se muestra a continuación:
    .row.justify-content-center.mb-5 
      .col-lg-10
        .cuadro-hover.color--amarillo.px-5.py-5.d-flex.align-items-center.justify-content-center(@mouseover="mostrarIndicador=false")
          .indicador--hover(v-if="mostrarIndicador")
          .cuadro-hover__textos.text-center.mb-0
            h2 Amarillo:
            p.mb-0
              b Representa la riqueza del suelo colombiano, así como el sol, fuente de luz, y la soberanía, la armonía y la justicia. 
        .cuadro-hover.color--azul.px-5.d-flex.align-items-center.justify-content-center
          .cuadro-hover__textos.text-center.text-white
            h2 Azul
            p.mb-0
              b Representa el cielo que cubre la patria, los ríos y los dos océanos que bañan el territorio colombiano.
        .cuadro-hover.color--rojo.px-5.d-flex.align-items-center.justify-content-center
          .cuadro-hover__textos.text-center.text-white
            h2 Rojo 
            p.mb-0
              b Representa la sangre vertida por los patriotas en los campos de batalla para conseguir la libertad, la que significa amor, poder, fuerza y progreso.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 El mensaje visual y su descomposición 
    p.mb-5 El mensaje visual se descompone en soporte visual que, a su vez, debe tener módulo, textura, estructura, movimiento y forma; y la otra parte es la información, la cual lleva consigo el mensaje. A continuación se encuentran los elementos que lo componen:
    .titulo-sexto.color-acento-contenido
      h5 Figura 2 
      span Elementos del mensaje visual
    figure.mb-5
      img(src="@/assets/curso/55.svg")
    p.mb-5 Estos elementos (módulo, estructura, movimiento, forma y textura) hacen parte de una composición, la cual se encuentra en un entorno. Allí se pueden identificar los elementos que se comunican tal como lo muestra la siguiente imagen: 
    .titulo-sexto.color-acento-contenido
      h5 Figura 3 
      span Composición, formas y texturas
    .bg--4-claro.p-4.mb-5
      .row.align-items-center
        .col-lg-6: img(src="@/assets/curso/56.jpg")
        .col-lg-6
          p Para Munari (1985), los mensajes visuales actúan sobre los sentidos, ya sean sonoros, térmicos, dinámicos entre otros. De allí que el emisor expresa mensajes y el receptor los recibe, pero el receptor está inmerso en un ambiente con interferencias, las cuales   pueden alterar o anular dicho mensaje. 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Mensajes visuales
    p.mb-5 Una vez emitido el mensaje al receptor, se encontrarán otros obstáculos; cada receptor interpreta el mensaje de manera diferente, ello debido a que cada individuo tiene “filtros”, por los cuales ha de pasar el mensaje antes de ser recibido.
    .titulo-sexto.color-acento-contenido
      h5 Figura 4
      span Interferencias en el mensaje visual
    figure.mb-5
      img(src="@/assets/curso/57.svg")
    p.mb-5 Estos filtros son: 
    .row.mb-5
      .col-xl-4.mb-4
        .tarjeta.tarjetas-text.rounded-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/58.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--amarillo-claro.px-5.pb-5.pt-3.mb-3
            h3.mb-2 Sensorial  
            p Son las características físicas que el receptor tiene y que le permitirán recibir el mensaje, como problemas de visión, impedimento físico, entre otros.
      .col-xl-4.mb-4
        .tarjeta.tarjetas-text.rounded-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/59.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--amarillo-claro.px-5.pb-5.pt-3.mb-3
            h3.mb-2 Operativo  
            p Son las características constitucionales del receptor, es decir, la edad, el género, el contexto de desarrollo, las diferentes situaciones que enfrenta.
      .col-xl-4.mb-4
        .tarjeta.tarjetas-text.rounded-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/60.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--amarillo-claro.px-5.pb-5.pt-3.mb-3
            h3.mb-2 Filtro cultural 
            p Permite el paso de aquello que el receptor reconoce. Están relacionados con la religión, filosofía, valores y creencias, debido a que cada individuo tiene diferentes sistemas de creencias que determinarán si el mensaje llega a impactar positiva o negativamente.
    p.mb-5 Cuando se entabla una comunicación, se debe tener presente que, al momento de expresar una idea o un contexto, se reciben mensajes visuales en tres categorías:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta-avatar-hover
          img(src='@/assets/curso/61.svg' alt='AvatarTop')
          img(src='@/assets/curso/60.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Representacionalmente: 
              p Lo que se ve y se reconoce del entorno y la experiencia. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta-avatar-hover
          img(src='@/assets/curso/62.svg' alt='AvatarTop')
          img(src='@/assets/curso/60.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Abstractamente: 
              p Cualidad cenestésica de un hecho visual reducido a sus componentes visuales y elementales del mensaje. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tarjeta-avatar-hover
          img(src='@/assets/curso/63.svg' alt='AvatarTop')
          img(src='@/assets/curso/60.svg' alt='AvatarTop')
          .tarjeta.color-secundario.w-100
            .text-white.text-center.p-4.mt-3.text-system
              h4 Simbólicamente: 
              p El universo de sistemas de símbolos codificados creados por el hombre arbitrariamente, a los que se les asigna significado.
    p.mb-5 Para precisar de una forma visualmente clara, se enseñan unas imágenes que comunican, conectan y evidencian cómo se pueden poder en práctica las tres categorías en la conformación de mensajes visuales, como son:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="La representación" :icono="require('@/assets/curso/64.svg')")
        .row.px-5
          .col-md-7.mb-4.mb-md-0
            h4 La representación
            p Experiencia visual compartida por todos los individuos de una misma cultura, obtenida en diversos niveles de experiencia.
        
          .col-md-5
            figure
              img(src='@/assets/curso/69.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="El efecto realista" :icono="require('@/assets/curso/65.svg')")
        .row.px-5
          .col-md-7.mb-4.mb-md-0
            h4 El efecto realista
            p Dado por la experiencia desde el punto de vista de otra persona, como un boceto, una fotografía. El mensaje puede modificarse de manera subjetiva.
        
          .col-md-5
            figure
              img(src='@/assets/curso/70.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="La realidad" :icono="require('@/assets/curso/66.svg')")
        .row.px-5
          .col-md-7.mb-4.mb-md-0
            h4 La realidad
            p Expresada por pintores o artistas junto con la inspiración y los métodos.
        
          .col-md-5
            figure
              img(src='@/assets/curso/71.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="La fotografía" :icono="require('@/assets/curso/67.svg')")
        .row.px-5
          .col-md-7.mb-4.mb-md-0
            h4 La fotografía
            p Medio de representación de la realidad visual mediante la técnica; es el registro visual que se pretende representar lo más fiel posible a la realidad.
        
          .col-md-5
            figure
              img(src='@/assets/curso/72.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Simbolismo" :icono="require('@/assets/curso/68.svg')")
        .row.px-5
          .col-md-7.mb-4.mb-md-0
            h4 Simbolismo 
            p La abstracción de símbolos con la intención de transmitir un mensaje efectivo con cierta cantidad de información.
        
          .col-md-5
            figure
              img(src='@/assets/curso/73.jpg', alt='Texto que describa la imagen')
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Percepción de la imagen
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p Los ojos realizan su función fotorreceptora y el cerebro está continuamente interpretando información, de allí que es necesario que el mensaje visual intencional destaque frente a todos los demás mensajes. De esta manera, la percepción se define como el ejercicio de asimilar el entorno a través de los sentidos, recurriendo a la experiencia para dar significado a lo observado.
          br
          br
          |Pero algunas veces esta percepción es un engaño, se hace referencia a las imágenes que son creadas con ilusiones ópticas, las cuales son interpretaciones del cerebro generadas por ciertos efectos en la percepción, en la cual las imágenes son percibidas como errores o interpretación contraria a la misma lógica. Estas distorsiones suelen ser en el color, la perspectiva, formas, o mezclas entre estas, lo que permite explotar recursos gráficos, convirtiéndose en medios de construcción de ideas, conceptos e imágenes novedosas y desafiantes para el lector. 
          br
          br
          |Se puede observar cómo la imagen parece tener movimiento por sí sola.
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span Percepción de la imagen
        .imagen-adornos-flotantes
          img(src="@/assets/curso/74.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Semiótica, retórica y sintaxis de la imagen
    p.mb-5 A continuación, se analiza cada uno de estos términos.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Semiótica
    p.mb-5 La semiótica de la imagen es el estudio del signo icónico y los procesos de significación o dación de sentido (dar sentido a algo) a partir de una imagen. Es importante, para entender el concepto, saber que:     
    .bg--4-claro.p-4.mb-5
      .row.align-items-center
        .col-lg-6: img(src="@/assets/curso/75.svg")
        .col-lg-6
          p El <b>estudio de las imágenes y las comunicaciones visuales es muy amplio y va más allá de lo pictórico o visual</b>, como son el análisis de color, forma, íconos y composición, entre otros. Ciertamente, las imágenes hacen y deben ser parte de la cultura, de ahí la importancia de reflexionar cómo se construyen en los procesos de comunicación visual.
    p.mb-5 En la semiótica visual, se pueden identificar tres áreas:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.arriba.bg--4-claro(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style='height: 426px').d-flex.justify-content-center.align-items-center
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center La semiótica de la imagen estática (imágenes icónicas, indiciales, simbólicas, estéticas).
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/76.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.arriba.bg--3-claro(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style='height: 426px').d-flex.justify-content-center.align-items-center
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center La semiótica de la imagen dinámica (lenguaje braille, la mímica, la radio).
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/77.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.rounded-0.tarjeta-slide.arriba.bg--2-claro(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style='height: 426px').d-flex.justify-content-center.align-items-center
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.text-center Una semiótica visual, relacionada con el espacio (arquitectura, arte).
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/78.jpg')})`}")
    p.mb-5 Y la articulación de los códigos visuales pasa por tres componentes o niveles:
    .row.mb-5.justify-content-center
      .col-lg-10
        img(src="@/assets/curso/79.svg")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Retórica
    p.mb-5 En ella se diferencian tipos de análisis, las figuras o tropos o usos figurados, casi imaginativos o comparativos del lenguaje. Las figuras retóricas son los tipos de modificaciones hechas al lenguaje para proporcionar variedad, fuerza y belleza para transmitir el mensaje con contundencia. Entre sus funciones están el reforzar un mensaje, transmitir emociones, destacar un tema, generar una reflexión, causar asombro, etc.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-f.bg--1-claro.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.c--4
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center.mt-4 La retórica de la imagen se refiere a la efectividad y a la naturaleza persuasiva del lenguaje. Estos pueden darse en la publicidad, la prensa o cualquier otro medio donde el lector atribuya valores de verdad y confianza. 
          .bloque-texto-f__autor.mb-3
            h5.mb-0  Karam (2006)
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
    p.mb-5 A continuación, se hace referencia a las diferentes figuras retóricas aplicadas a la comunicación visual.
    SlyderB.mb-5(:datos="datosSlyder2")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Sintaxis de la imagen
    p.mb-5 La sintaxis del lenguaje visual permite entender y comprender la forma en que se complementan los elementos del alfabeto visual, esta unión es la relación que se establece entre dos o más imágenes, por ejemplo, en cine o televisión, mediante la edición de secuencias, o dentro de una misma imagen, mediante la composición de piezas de diseño o publicidad.
      br
      br
      |Su estudio diferencia tres niveles: de la forma, del color y el equilibrio, estos niveles intervienen activamente en la percepción visual, como se muestra a continuación:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg--4-claro(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/80.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Nivel de forma
              p La forma percibida por la vista es determinada por la ubicación espacial, límites y contexto. Todo lo que se percibe son los rasgos prominentes de una forma (redondez, angulosidad, simetría, roja, apaisada), cuando se tiene una experiencia visual, el cerebro humano rápidamente construye un entorno perceptual, el cual permite aprehender lo que se puede ver. La percepción es una actividad activa y organizadora; no se espera a que esté en contacto con los ojos, por el contrario, se busca y se procesa. 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg--4-claro
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/81.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Nivel de la estructura y del equilibrio 
              p En este nivel actúan las relaciones del sistema perceptual humano, el cual organiza, en fuerzas de equilibrio, el peso visual, la tensión, el ritmo, las estructuras y el grado de atracción de los elementos visuales entre sí y respecto al marco.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg--4-claro
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/82.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Nivel de color 
              p En imágenes, hace énfasis en cómo, por la forma y la posición, se consideran equitativas y dan equilibrio en la balanza de color. La percepción humana del color es un tanto compleja, con fenómenos que llegan a parecernos contrarios a la intuición. 



































































</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Dependerá del espacio en el que se desarrolle, debido a que no es lo mismo un aula de clase a un escenario deportivo, es decir, qué tipo de comunicación es la adecuada de acuerdo con el público al que esté dirigido el mensaje.',
        imagen: require('@/assets/curso/10.svg'),
      },
      {
        titulo: '',
        texto:
          'Parte importante de la comunicación verbal está en vocalizar y hablar a un ritmo tranquilo, adecuado y pausado, evitar el uso de muletillas y darles un manejo adecuado a los adverbios. Si al momento de comunicar una idea o punto determinado no se vocaliza de manera adecuada, o en caso de omitir información del tema que se está desarrollando, fácilmente se podrá perder al público objetivo perdiendo el interés sobre el tema tratado.',
        imagen: require('@/assets/curso/11.svg'),
      },
      {
        titulo: '',
        texto:
          'En un escenario determinado, el expositor puede cambiar la entonación y transmitir al público una emoción real de lo expuesto, con seguridad y experticia del tema, con un contexto profundo y asertivo, para llevar a cabo una exposición de modelo de negocio.',
        imagen: require('@/assets/curso/12.svg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Alusión',
        texto:
          'Referencia corta e informal de una persona, evento, lugar o situación reconocida, sin mencionarla directamente.<br><br><b><i>En esta imagen hace alusión a la muerte.</i></b>',
        imagen: require('@/assets/curso/2020/img38.jpg'),
      },
      {
        titulo: 'Antítesis',
        texto:
          'Oposición o contraste de palabras o ideas, contrarias o complementarias.<br><br><b><i>"Un pequeño paso para el hombre, un gran paso para la humanidad". <br>Neil Armstrong.</i></b>',
        imagen: require('@/assets/curso/2020/img39.jpg'),
      },
      {
        titulo: 'Clímax',
        texto:
          'Dar orden a las palabras, fragmentos u oraciones de forma ascendente de acuerdo con su nivel de importancia. <br> <br>Añade dramatismo al discurso ya que suele explotar la sensación o emoción positiva o negativa alcanzado su punto máximo.',
        imagen: require('@/assets/curso/2020/img40.jpg'),
      },
      {
        titulo: 'Epifonema',
        texto:
          'Afirmación contundente al final de la exposición de una idea, en forma de exclamación, que sirve de resumen, siendo breve y preciso.<br><br><b><i> "Porque ese cielo azul que todos vemos, pues ni es cielo, ni es azul”. <br> Hermanos Argensola.</i></b>',
        imagen: require('@/assets/curso/2020/img41.jpg'),
      },
      {
        titulo: 'Epíteto',
        texto:
          'Expresa cualidades al sustantivo que todos pueden distinguir, o evidenciar; limitándose a describirlo o a definirlo, resaltando algunas de sus características.<br><br><b><i>Tomate rojo.</i></b>',
        imagen: require('@/assets/curso/2020/img42.jpg'),
      },
      {
        titulo: 'Eufemismo',
        texto:
          'Sustitución de una imagen o palabra que expresa algo desagradable u ofensivo, para ser cambiada por una menos negativa.<br><br> En las imágenes se suelen realizar efectos para no ser tan evidente la expresión.',
        imagen: require('@/assets/curso/2020/img43.jpg'),
      },
      {
        titulo: 'Disfemismo',
        texto:
          'Sustitución de una palabra o imagen con expresión neutral o positiva por una de connotaciones negativas.<br><br>Los elementos pueden ser cambiados o no ser tan evidentes.',
        imagen: require('@/assets/curso/2020/img44.jpg'),
      },
      {
        titulo: 'Hipérbole',
        texto:
          'Exageración de un término o una idea utilizada para transmitir una actitud.<br><br> Denota cantidad, tamaño, entre otras; que generalmente distorsiona la realidad.<br><br><b><i>Me estoy muriendo de hambre.</i></b>',
        imagen: require('@/assets/curso/2020/img45.jpg'),
      },
      {
        titulo: 'Ironía ',
        texto:
          'Afirmación de un hecho aparente con el propósito de expresar la intención opuesta. ',
        imagen: require('@/assets/curso/2020/img46.jpg'),
      },
      {
        titulo: 'Oxímoron',
        texto:
          'Presentar dos términos o expresiones contrarias o incoherentes juntas.<br><br><b><i>Los muertos vivientes.</i></b>',
        imagen: require('@/assets/curso/2020/img47.jpg'),
      },
      {
        titulo: 'Paradoja',
        texto:
          'Unión de dos ideas opuestas y contradictorias, que parecen no tener sentido, pero que implícitamente incluyen una idea válida.<br><br><b><i>El tiempo es relativo.</i></b>',
        imagen: require('@/assets/curso/2020/img48.jpg'),
      },
      {
        titulo: 'Perífrasis',
        texto:
          'Referirse a un concepto o idea sin hacer referencia a este directamente utilizando otras palabras para describirlo e inferir aquello que se pretende comunicar.<br><br><b><i>El supremo creador del cielo y de la tierra, para decir: Dios.</i></b>',
        imagen: require('@/assets/curso/2020/img49.jpg'),
      },
      {
        titulo: 'Personificación',
        texto:
          'Atribuir a objetos inanimados o animales cualidades humanas, acciones o elementos de personalidad.<br><br><b><i>Personajes, superhéroes.</i></b>',
        imagen: require('@/assets/curso/2020/img50.jpg'),
      },
      {
        titulo: 'Reticencia',
        texto:
          'Presentar una información incompleta, con el objetivo de insinuar algo.',
        imagen: require('@/assets/curso/2020/img51.jpg'),
      },
      {
        titulo: 'Metáfora',
        texto:
          'Comparación implícita de dos términos a partir de la semejanza de sus significados estableciendo una relación.<br><br><b><i>El sueño eterno. (La muerte).</i></b>',
        imagen: require('@/assets/curso/2020/img52.jpg'),
      },
      {
        titulo: 'Alegoría',
        texto:
          'Metáfora extendida o sucesión de metáforas para expresar una idea. La alegoría pertenece al grupo de figuras de los tropos.<br><br><b><i>¿Por qué este inquieto abrasador deseo?</i></b>',
        imagen: require('@/assets/curso/2020/img53.jpg'),
      },
      {
        titulo: 'Antonomasia',
        texto:
          'Expresión reconocida comúnmente que hace referencia a un nombre propio.<br><br><b><i>Ciudad de la Luz, para nombrar a París.</i></b>',
        imagen: require('@/assets/curso/2020/img54.jpg'),
      },
      {
        titulo: 'Metonimia',
        texto:
          'Reemplazar el nombre de un elemento por otro con el que se relaciona, o existe una relación de dependencia, causa – efecto.',
        imagen: require('@/assets/curso/2020/img55.jpg'),
      },
      {
        titulo: 'Símil',
        texto:
          'Comparación explícita a partir del uso de un elemento no literal, sino con semejanza de sus características con las de otro que no tiene una relación aparente. ',
        imagen: require('@/assets/curso/2020/img56.jpg'),
      },
      {
        titulo: 'Sinécdoque',
        texto:
          'Utilizar todo para representar una parte o viceversa.<br><br><b><i>Tersa como fresa.</i></b>',
        imagen: require('@/assets/curso/2020/img57.jpg'),
      },
      {
        titulo: 'Concatenación',
        texto:
          'Repetición de palabras en cadena, que guardan una relación entre si, para crear una secuencia o conjunto.',
        imagen: require('@/assets/curso/2020/img58.jpg'),
      },
      {
        titulo: 'Asíndeton ',
        texto:
          'Omisión de conjunciones, se eliminan las relaciones para hacerlas más cortas y fácil de leer.',
        imagen: require('@/assets/curso/2020/img59.jpg'),
      },
      {
        titulo: 'Hipérbaton ',
        texto:
          'Alteración del orden lógico de la oración.<br><br><b><i>Pura leche.</i></b>',
        imagen: require('@/assets/curso/2020/img60.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-b.color-acento-contenido:before
  background-color: #ffe9c8
.cuadro-hover
  position: relative
  transition: height (0.5s)
  width: 100%
  height: 50px
  &__textos
    transition: opacity (0.6s)
    opacity: 0
  &:hover
    cursor: pointer
    height: 215px
    .cuadro-hover__textos
      opacity: 1
.color--amarillo
  background-color: #FFD000
.color--azul
  background-color: #005DFF
.color--rojo
  background-color: #FF0000
.bg--amarillo-claro
  background-color: #fef2bc !important
.tarjeta-avatar-hover
  position: relative
  img:nth-child(2)
    transition: opacity (0.5s)
    width: 150px
  img:nth-child(1)
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%)
    display: block
    width: 150px
    margin: 0 auto
    opacity: 0
    transition: opacity (0.5s)
  &:hover
    img:nth-child(1)
      opacity: 1
    img:nth-child(2)
      opacity: 0
</style>
