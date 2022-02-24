<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propiedad intelectual 
    p.mb-5 La propiedad intelectual hace referencia a los derechos subjetivos de carácter privado que recaen sobre los bienes inmateriales, y comprende:
    .tarjeta.bg--amarillo-claro.p-4.mb-5
      #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .row.justify-content-center
            .col-lg-9
              .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' )
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
              .carousel-inner
                .carousel-item.active.p-4
                  .row
                    .col-lg-6
                      p Las creaciones anímicas, de la inteligencia humana, no están representadas por ideas, sino que son una combinación de distintos elementos perceptibles por los sentidos. En la obra literaria, por medio de la palabra; en la obra pictórica, por medio del color, los trazos, las figuras; en la obra cinematográfica, por medio de la asociación de imágenes; en los signos mercantiles, por medio de la luz de las figuras, de los colores o de las palabras, entre otros.
                    .col-lg-6: img(src="@/assets/curso/83.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-6
                      p Toda idea necesita un elemento sensible dónde plasmarse, y hay que diferenciar claramente en la creación, por un lado, lo que es la idea en sí, y por otro lado, lo que es la realidad física y sensible que contiene esa idea (sin esa realidad física, no podemos transmitir la idea al exterior). La idea alcanza su verdadero valor y dimensión cuando puede ser apreciada por los demás, no antes.
                    .col-lg-6: img(src="@/assets/curso/84.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-6
                      p Es en relación con la finalidad que se pretende donde encontramos una diferencia clara entre la propiedad intelectual y la propiedad industrial.
                        br
                        br
                        |En la propiedad intelectual, la finalidad es mucho más individualista, más personal, más espiritualista; en la propiedad industrial, es más comercial, más de contenido económico.
                    .col-lg-6: img(src="@/assets/curso/85.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-6
                      ul.lista-ul--color.c--4
                        li 
                          i.fas.fa-check
                          | El derecho de autor y los derechos conexos.
                        li 
                          i.fas.fa-check
                          | La propiedad industrial.
                        li 
                          i.fas.fa-check
                          | Los derechos de los obtentores de variedades vegetales.
                        li 
                          i.fas.fa-check
                          | El conocimiento tradicional y la protección del folclor (en armonía con las disposiciones que regulan las relaciones de la Comunidad Andina de Naciones - CAN).
                    .col-lg-6: img(src="@/assets/curso/86.svg")
              button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
              button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next
    p.mb-5 El derecho de la propiedad intelectual tiene las siguientes características:
    .row.mb-5.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/87.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p Los derechos de explotación de la obra se comunican, <i>mortis causa</i>, por cualquiera de los canales admitidos en derecho.
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p Se pueden transmitir por actos. La Ley de Propiedad Intelectual legaliza al titular de los derechos por ella reconocidos para pedir el cese de la actividad ilícita de un infractor y puede requerir la indemnización de los daños materiales y morales causados.
            .col-md-4
              figure
                img(src='@/assets/curso/87.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/87.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p Podrán ser objeto de inscripción en el Registro, los derechos de propiedad intelectual referentes a las obras y demás producciones protegidas por la Ley de Propiedad Intelectual.
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p El titular o a quien sea cedido un derecho de utilización sobre una obra o producción protegidas por la Ley podrá señalar a su nombre el símbolo ©, con exactitud del lugar y año de la divulgación y el registro de aquellas.
            .col-md-4
              figure
                img(src='@/assets/curso/87.svg', alt='Texto que describa la imagen')
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Derechos intelectuales
    .row.mb-5.justify-content-center
      .col-lg-10(data-aos='zoom-in-up')
        .bg--2-claro.p-5.hover
          p.mb-0 <b>Los derechos intelectuales a los que hace referencia la Ley 11.723 del Régimen Legal de La Propiedad Intelectual</b> comprenden una amplia gama de posibilidades de tutoría de la ley sobre las obras de los artistas, científicos, escritores, e inclusive programadores de <i>software</i>. Dentro de los artistas, se incluyen los músicos, dramaturgos, cineastas, coreógrafos, dibujantes, pintores, escultores y otras manifestaciones de arte. Así como las obras arquitectónicas, modelos y obras de arte o ciencia aplicadas al comercio o industria.
    p.mb-5 En otras palabras, la ley regula la propiedad o derechos del autor de <b>“toda producción científica, literaria, artística o didáctica, sea cual fuere el procedimiento de reproducción”</b>. (texto ordenado según Ley 11.723).
      br
      br
      |Para la Superintendencia de Industria y Comercio - SIC (2017), la propiedad intelectual se puede interpretar como aquella disciplina jurídica que tiene por objeto la protección de bienes inmateriales de naturaleza intelectual y de contenido creativo, así como de sus actividades relacionadas. La propiedad intelectual se divide en tres categorías: 
    .row.mb-5.justify-content-center
      .col-lg-4
        .bg--4-claro.p-4.d-flex.h-100.hover
          img(src='@/assets/curso/88.svg', alt='Texto que describa la imagen' style='width: 87px').m-auto.me-lg-3
          p.mb-0 <b>La propiedad industrial</b>, que abarca todo lo relacionado a las patentes de invención, marcas, diseños industriales y denominaciones de origen.   
      .col-lg-4
        .bg--3-claro.p-4.d-flex.h-100.hover
          img(src='@/assets/curso/89.svg', alt='Texto que describa la imagen' style='width: 87px').m-auto.me-lg-3
          p.mb-0 <b>El derecho de autor</b>, que comprende las obras literarias, artísticas, audiovisuales y musicales, entre otras.
      .col-lg-4
        .bg--4-claro.p-4.d-flex.h-100.hover
          img(src='@/assets/curso/90.svg', alt='Texto que describa la imagen' style='width: 87px').m-auto.me-lg-3
          p.mb-0 <b>La obtención de variedades vegetales</b>, que incluye todo lo relacionado con las variedades e innovaciones en el campo de la botánica, del reino vegetal.
    p.mb-5 Los derechos de propiedad intelectual están bajo la responsabilidad de tres entidades: 
    .row.mb-5
      .col-xl-4.mb-3
        .tarjeta.tarjetas-text.color-acento-contenido--borde.border-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/91.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--2-claro.px-5.pb-5.pt-3.mb-3
            h3 La SIC
            p Se encuentra a cargo de la propiedad industrial.
      .col-xl-4.mb-3
        .tarjeta.tarjetas-text.color-acento-contenido--borde.border-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/92.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--2-claro.px-5.pb-5.pt-3.mb-3
            h3 La DNDA
            p La Dirección Nacional de Derecho de Autor, es responsable del derecho de autor y los derechos conexos, entre otros.
      .col-xl-4.mb-3
        .tarjeta.tarjetas-text.color-acento-contenido--borde.border-2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/93.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.bg--2-claro.px-5.pb-5.pt-3.mb-3
            h3 La  API
            p Aula de Propiedad Intelectual. Espacio académico de sensibilización y orientación sobre propiedad intelectual, que surge como una cooperación entre las dos primeras entidades y la Organización Mundial de Propiedad Intelectual – OMPI.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Propiedad industrial 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5DAsmI-spQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Tradicionalmente, se ha venido identificando propiedad intelectual con derechos de autor. Sin embargo, esta última expresión hay que entenderla con sentido claramente diferenciado:
    .row.mb-5.justify-content-center
      .col-lg-6.mb-3
        .tarjeta.bg--3-claro.p-4.h-100.hover.hover-flip
          img(src='@/assets/curso/94.svg', alt='Texto que describa la imagen' style='width: 72px').mb-3
          p.fw-bold Derecho de autor en un sentido estricto
          p Estaría referido exclusivamente a lo que son las creaciones literarias, artísticas o científicas, llevadas a cabo por su propio creador. El autor de una determinada obra es el propietario de la creación en sí.
          figure.rounded.overflow-hidden
            img(src='@/assets/curso/97.jpg', alt='Texto que describa la imagen').m-auto
      .col-lg-6.mb-3
        .tarjeta.bg--4-claro.p-4.h-100.hover.hover-flip
          img(src='@/assets/curso/95.svg', alt='Texto que describa la imagen' style='width: 72px').mb-3
          p.fw-bold Derecho de autor en sentido amplio
          p Incluiría, además del que se ha dicho con anterioridad, a otra serie de derechos llamados en nuestra legislación derechos conexos al de autor y con esta expresión se quiere designar a los derechos que tienen otra serie de personas, de agentes cercanos a la propiedad intelectual del autor principal de la obra. Entre estos derechos, estarían los derechos que tienen los artistas que interpretan o ejecutan una obra, o los derechos de determinados productores o editores, o de ciertos organismos de radiodifusión.
          figure.rounded.overflow-hidden
            img(src='@/assets/curso/98.jpg', alt='Texto que describa la imagen').m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Derechos de autor
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uKZZxlT4F5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El derecho de autor es la rama de la propiedad intelectual que reconoce, en cabeza de los autores, ciertas prerrogativas morales y patrimoniales sobre sus obras artísticas y literarias que sean originales y susceptibles de ser divulgadas o reproducidas por cualquier medio. 
          br
          br
          |Los derechos conexos, por otro lado, son aquellos derechos reconocidos a los artistas intérpretes o ejecutantes, los productores de fonogramas y los organismos de radiodifusión, sobre sus interpretaciones, fonogramas o emisiones de radiodifusión. 
        .bg--4-claro.p-4
          p.fw-bold.mb-0 La regulación del derecho de autor y los derechos conexos se encuentra principalmente en la Ley 23 de 1982 y la Decisión Andina 351 de 1993.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/99.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Colombia se rige por la normatividad establecida en la Ley 23 de 1982, sobre los derechos de autor, en la cual se indica: 
    .tarjeta.slyder-texture.p-4.mb-5
      #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel')
          .row.justify-content-center
            .col-lg-9
              .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' )
                button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
                button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 4')
                button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='4' aria-label='Slide 5')
              .carousel-inner
                .carousel-item.active.p-4
                  .row.align-items-center
                    .col-lg-6
                      h4 Art. 1º. 
                      p Los autores de obras literarias, científicas y artísticas gozarán de protección para sus obras. 
                    .col-lg-6: img(src="@/assets/curso/100.jpg")
                .carousel-item.p-4
                  .row.align-items-center
                    .col-lg-6
                      h4 Art. 2º. 
                      p Los derechos del autor recaen sobre las obras científicas, literarias y artísticas, las cuales comprenden todas las creaciones del espíritu en el campo científico, literario y artístico, cualquiera que sea el modo o forma de expresión y cualquiera que sea su destinación.
                    .col-lg-6: img(src="@/assets/curso/101.jpg")
                .carousel-item.p-4
                  .row.align-items-center
                    .col-lg-6
                      p Al hilo de lo anterior, el término derecho de autor, tal y como se contempla hoy en la legislación y en las normas internacionales sobre la materia, comprendería fundamentalmente dos aspectos:
                      ul.lista-ul--color.c--4
                        li 
                          i.fas.fa-check.fw-bold
                          | El aspecto patrimonial.
                        li 
                          i.fas.fa-check.fw-bold
                          | El aspecto moral.
                    .col-lg-6: img(src="@/assets/curso/102.jpg")
                .carousel-item.p-4
                  .row.align-items-center
                    .col-lg-6
                      p Combinando estos dos aspectos, se puede decir que el derecho de autor es aquella facultad que tiene una persona para el disfrute y explotación económica de una obra literaria, artística o científica, creada por el mismo, así como el derecho a decidir sobre su divulgación, sobre el respeto a su integridad y sobre las demás consecuencias inherentes a la paternidad de esta.
                    .col-lg-6: img(src="@/assets/curso/103.jpg")
                .carousel-item.p-4
                  .row.align-items-center
                    .col-lg-6
                      p Aunque el derecho de autor es inescindible (no se puede dividir), tiene un contenido plural de facultades: <b>las patrimoniales y las personales.</b> 
                    .col-lg-6: img(src="@/assets/curso/104.jpg")
                
              button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
              button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 En el derecho de autor la ley protege al autor de la obra, declarando a favor de este el derecho que posee. En cambio, en el sistema de <i>Copyright</i>, la ley va a proteger al autor una vez que este cumpla con una serie de formalidades establecidas por la ley para tal fin.
          br
          br
          |En este orden de ideas, como segundo momento, se encuentra el <b><i>Copyright</i></b>, principalmente. No obstante, es una mezcla de ambos, debido a que protege los derechos morales, que son los que le confieren al autor la paternidad y la integridad de la obra como suya, mientras que, en el sistema de <i>Copyright</i>, se ha delegado a los tribunales que intervienen en el derecho moral.
          br
          br
          |El derecho de autor es esencialmente individualista, sosteniendo a este como un derecho personal e inalienable del autor, persona física, a controlar el uso de las obras de creación.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/105.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Para la comprensión de los derechos de autor es necesario tener en cuenta:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Características derechos de autor " :icono="require('@/assets/curso/106.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Características derechos de autor 
            ul.lista-ul--color.c--4
              li 
                i.vineta
                | El derecho de autor no es un derecho primordial, como sí lo es el derecho a la protección de datos de carácter personal.
              li 
                i.vineta
                | Es un derecho de propiedad y de exclusividad, ya que configura una distinción sobre una obra concreta.

          .col-md-6
            figure
              img(src='@/assets/curso/107.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Independientes y compatibles" :icono="require('@/assets/curso/106.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Independientes y compatibles 
            ul.lista-ul--color.c--4
              li 
                i.vineta
                | La propiedad y otros derechos que tengan por objeto la cosa material a la que está incorporada la creación intelectual. 
              li 
                i.vineta
                | Los derechos de propiedad industrial que puedan existir sobre la obra.
          .col-md-6
            figure
              img(src='@/assets/curso/118.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="¿Qué tipo de obras protege el Derecho de Autor? " :icono="require('@/assets/curso/106.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color.c--4
              li 
                i.vineta
                | Literarias.
              li 
                i.vineta
                | Musicales, con o sin letra.
              li 
                i.vineta
                | Dramáticas.
              li 
                i.vineta
                | Danza.
              li 
                i.vineta
                | Pictóricas o de dibujo.
              li 
                i.vineta
                | Escultóricas y de carácter plástico.
              li 
                i.vineta
                | Caricatura e historieta.
              li 
                i.vineta
                | Arquitectónicas.
              li 
                i.vineta
                | Cinematográficas y audiovisuales.

              li 
                i.vineta
                | Programas de radio y TV.
              li 
                i.vineta
                | Programas de cómputo.
              li 
                i.vineta
                | Fotográficas.
              li 
                i.vineta
                | Obras de arte aplicado (incluyen diseño gráfico o textil).
              li 
                i.vineta
                | Obras de compilación.
            p Todas aquellas que por su analogía se logren incluir en la rama afín a su naturaleza.
          .col-md-6
            figure
              img(src='@/assets/curso/119.jpg', alt='Texto que describa la imagen')
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 <i>Copyright</i>
    .bg--3-claro.p-5.position-relative.hover.hover-flip.mb-5
      .img-up(style='position: absolute; top: -20%; left: 0% ; width: 100%; height: 100%;')
        figure
          img(src="@/assets/curso/108.svg" style='width: 138px').m-auto
      .texto(style='margin-top: 60px')
        p.text-center El <i>copyright</i> representa los derechos de autor que se le conceden a los creadores de una obra literaria, tema musical o artículo científico, entre otros. Es la forma de atribuir la autoría a alguien que ha creado una obra, además de proporcionarle una serie de derechos como autor. Supone una forma de proteger esta obra para que su propio creador pueda gestionar los derechos de su contenido. Los derechos morales y patrimoniales de una obra están recogidos en el <i>copyright</i> de una creación de estas características. 
        p.fw-bold.text-center (Peiró, 2020)
    p.mb-5 Para la comprensión del <i>copyright</i>, es necesario tener en cuenta:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--azul-claro")
      .row(titulo="¿Qué tipos de obras están protegidas por el <i>copyright</i>?").px-5
        .col-md-8.mb-4.mb-md-0
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Libros, folletos, artículos.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Canciones, obras musicales, grabaciones.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Cualquier tipo de composición musical, tenga o no letra.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Obras cinematográficas y audiovisuales: películas, cortometrajes, documentales…
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Dibujos, <em>comics</em>, pinturas.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Entrevistas de cualquier tipo.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Mapas, diseños gráficos, diseños relacionados con la topografía.
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Tebeos, esculturas, ensayos, bocetos…
          p Todos los autores deben estar al tanto de sus derechos en el momento de crear una obra, publicarla y saber que su esfuerzo creativo tiene una recompensa.
      
        .col-md-4
          figure
            img(src='@/assets/curso/109.jpg', alt='Texto que describa la imagen')
      .row(titulo="¿Cómo registrar los derechos de autor?").px-5
        .col-md-8.mb-4.mb-md-0
          p Es importante que, al momento de crear una obra, esta sea registrada. Esto requiere hacer una serie de pasos que cada país determina según sus normas vigentes y leyes correspondientes.
            br
            |Con el fin de dar a conocer cómo se puede registrar una obra, se invita al aprendiz a revisar el sitio <i>web</i> Dirección Nacional de Derecho de Autor, registro de obra, ubicado en la sección de material complementario.
            br
            br
            |La información sobre este proceso se puede consultar en
          .col-lg-12
            a.anexo.mb-4.mb-lg-12(href="http://derechodeautor.gov.co/registro-de-obras1" target="_blank" style="height: fit-content")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto(style="width: 100%")
                p <b>Enlace web.</b> http://derechodeautor.gov.co/registro-de-obras1
        .col-md-4
          figure
            img(src='@/assets/curso/110.jpg', alt='Texto que describa la imagen')
      .row(titulo="¿Por qué es importante el <i>copyright</i>?").px-5
        .col-md-8.mb-4.mb-md-0
          p Al momento de crear y registrar una obra, el autor se beneficia en: 
          ul.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span a
              | Asegurar el reconocimiento de su obra.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Las gestiones comerciales de esta.
            li 
              .lista-ol--cuadro__vineta
                span c
              | El robo de su autoría.
            li 
              .lista-ol--cuadro__vineta
                span d
              | La accesibilidad a su obra en cualquier momento.
      
        .col-md-4
          figure
            img(src='@/assets/curso/111.jpg', alt='Texto que describa la imagen')
    p.mb-5 No obstante, en muchas oportunidades los autores no pueden controlar la copia y venta ilegal de sus obras, así como de imitaciones, como ejemplo, se puede mencionar la piratería digital. Por ello, la importancia de registrar la obra y tener pleno conocimiento de los derechos de autor y a quién corresponde la autoría de cualquier obra, con el fin de evitar este tipo de inconvenientes. En caso de ser plagiada la obra, se podrá acudir a temas legales.
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  2.3 Derechos, permisos y licenciamientos
    p.mb-5 Colombia viene desarrollando e implementado un régimen legal bastante robusto, haciendo énfasis en la protección de la propiedad intelectual, con el fin de promover la competitividad y el desarrollo del país. Este proceso se ajusta a los estándares internacionales en materia de protección y gestión de este tipo de derechos. Algunos factores que se deben tener en cuenta son:
    .tarjeta.bg--3-claro.p-4.mb-5
      #carouselExampleIndicators3.carousel.slide(data-bs-ride='carousel')
          .row.justify-content-center
            .col-lg-9
              .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='2' aria-label='Slide 3')
                button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='3' aria-label='Slide 4')
                button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='4' aria-label='Slide 5')
                button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='5' aria-label='Slide 1')
              .carousel-inner
                .carousel-item.active.p-4
                  .row
                    .col-lg-8
                      p  Al momento de hacer uso de una marca determinada, en algún tipo de mercado, no significa tener algún tipo de derecho sobre esta. Es importante saber que después de tres años se podrá cancelar el uso de una marca si no es usada frecuentemente por parte de quien la registra.
                    .col-lg-4: img(src="@/assets/curso/112.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-8
                      p En Colombia, de acuerdo con la legislación, se puede hacer la transferencia de derechos patrimoniales de autor y de los derechos originarios de la propiedad industrial, cuando estas se crean en integridad de un contrato de obra por encargo, cuando negocie o se licencie un derecho de patente, cesión de derechos y licencia de uso exclusiva. 
                    .col-lg-4: img(src="@/assets/curso/113.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-8
                      p Para realizar estas acciones, es importante que estén registrados ante la oficina nacional competente, para que estos puedan tener efectos frente a terceros. 
                    .col-lg-4: img(src="@/assets/curso/114.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-8
                      p La legislación colombiana permite la transferencia de los derechos patrimoniales de autor y de los derechos derivados de la propiedad industrial. Consagra la presunción de la transferencia de derechos de autor y/o de propiedad industrial, cuando han sido creadas en virtud de un contrato de obra por encargo. 
                    .col-lg-4: img(src="@/assets/curso/115.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-8
                      p En el caso de los productos de investigación y desarrollo de ciencia, tecnología e innovación y de tecnologías de la información y las comunicaciones, adelantados entre entidades privadas y que obtengan financiación pública, el Estado podrá ceder, a título gratuito, los derechos de propiedad intelectual que le correspondan y podrá autorizar su transferencia, comercialización y explotación. Como contraprestación, el Estado se reserva el derecho de obtener una licencia no exclusiva y gratuita de estos derechos de propiedad intelectual. 
                    .col-lg-4: img(src="@/assets/curso/116.svg")
                .carousel-item.p-4
                  .row
                    .col-lg-8
                      p Los contratos relacionados con derechos de autor, como la cesión de derechos y licencia de uso exclusivo, contratos en virtud de quien se disponga, negocie o licencie un derecho de patente, deben registrarse ante la oficina nacional competente, para que tengan efectos frente a terceros. 
                    .col-lg-4: img(src="@/assets/curso/117.svg")
                
              button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
              button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Derechos patrimoniales y morales
    p.mb-5 Según la Ley 23 de 1982, se establece que:
    .row.mb-5.justify-content-center
      .col-md-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.hover
          .tarjeta-numerada__numero
            .h2 1
          p 
            b Artículo 72
          p El derecho patrimonial del autor se causa desde el momento en que la obra o producción, susceptible de estimación económica y cualquiera que sea su finalidad, se divulgue por cualquier forma o modo de expresión. 
      .col-md-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100.hover
          .tarjeta-numerada__numero
            .h2 2
          p 
            b Artículo 72
          p En todos los casos en que los autores o las asociaciones de autores celebren contratos con los usuarios o con las organizaciones que los representen, respecto al derecho de autor, por concepto de ejecución, representación, exhibición y, en general, por uso o explotación de las obras protegidas por la presente ley, serán las tarifas concertadas en los respectivos contratos las que tendrán aplicación, siempre que no sean contrarias a los principios consagrados por la misma.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Registro de propiedad intelectual y licenciamiento
    p.mb-5 En Colombia, el registro de obras es un trámite que puede realizarse de forma presencial o en línea. Para el caso presencial, se debe descargar un formulario y enviarlo por correo o llevarlo personalmente a la DNDA, en la ciudad de Bogotá. También, se puede realizar el registro en línea, creando una cuenta en el sitio web. 
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.bg--1-claro.p-4.mb-4.hover
          p.mb-0 Tipos de obras protegidas por el derecho de autor: <b>la Decisión 351 de 1993, en su Artículo 4</b>, señala la protección de todas las obras literarias, artísticas y científicas que puedan reproducirse o divulgarse por cualquier forma o medio conocido o por conocer, entre estas obras se encuentran:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--azul-claro")
      .row(titulo="Obras literarias: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/120.jpg")
        .col-md-8.mb-4.mb-md-0
          p Forma de expresar ideas, plasmadas o susceptibles de serlo, en un escrito tangible o en cualquier tipo de soporte, como libro, folleto y otros escritos; conferencias, alocuciones, sermones y otras obras de la misma naturaleza. En esta categoría, también se encuentran las obras con carácter científico (Ley 23 de 1982, Artículo 2).

      .row(titulo="Obras artísticas: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/121.jpg")
        .col-md-8.mb-4.mb-md-0
          p Creación artística cuya finalidad apela al sentido estético de la persona que la contempla, como las pinturas, dibujos, grabados y litografías (Decisión 351 de 1993, Artículo 3). 
      .row(titulo="Obras musicales: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/122.jpg")
        .col-md-8.mb-4.mb-md-0
          p Creación que abarca toda clase de combinaciones de sonidos (composición) con o sin texto (letra).
      .row(titulo="Obra audiovisual: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/123.jpg")
        .col-md-8.mb-4.mb-md-0
          p.fst-italic <b>"Toda creación expresada mediante una serie de imágenes asociadas, con o sin sonorización incorporada, que esté destinada esencialmente a ser mostrada a través de aparatos de proyección o cualquier otro medio de comunicación de la imagen y de sonido, independientemente de las características del soporte material que la contiene"</b> (Decisión 351 de 1993, Artículo 3).
      .row(titulo="Programa de ordenador o <i>software</i>: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/124.jpg")
        .col-md-8.mb-4.mb-md-0
          p.fst-italic <b>"Expresión de un conjunto de instrucciones mediante palabras, códigos, planes o en cualquier otra forma que, al ser incorporadas en un dispositivo de lectura automatizada, es capaz de hacer que un ordenador -un aparato electrónico o similar capaz de elaborar informaciones-, ejecute determinada tarea u obtenga determinado resultado. El programa de ordenador comprende también la documentación técnica y los manuales de uso"</b> (Decisión 351 de 1993, artículo 3).
      .row(titulo="Fonograma: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/125.jpg")
        .col-md-8.mb-4.mb-md-0
          p.fst-italic <b>"Toda fijación exclusivamente sonora de los sonidos de una representación o ejecución o de otros sonidos. Las grabaciones gramofónicas y magnetofónicas se consideran copias de fonogramas"</b> (Decisión 351 de 1993, Artículo 3).
      .row(titulo="Bases de datos: ").px-5
        .col-md-4.mb-4.mb-md-0: img(src="@/assets/curso/126.jpg")
        .col-md-8.mb-4.mb-md-0
          p.fst-italic <b>“Las bases de datos son protegidas siempre que la selección o disposición de las materias constituyan una creación intelectual. La protección concedida no se hará extensiva a los datos o información compilados, pero no afectará los derechos que pudieran subsistir sobre las obras o materiales que la conforman”.</b>  (Decisión 351 de 1993, artículo 25).
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-around.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/127.svg" alt="Adornos flotantes" style="width: 132px ; left: 3% ; top: -50% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p.mb-0.fw-bold Para una mayor información, se invita al aprendiz a consultar el sitio <i>web</i> de la Dirección Nacional de Derecho de Autor – DNDA, en su sección de preguntas frecuentes, ubicado en la sección de material complementario.
                .col-3
                  a.boton.color-acento-contenido.tb.m-auto(href='http://derechodeautor.gov.co:8080/registro-de-obras1' target='_blank').text-system
                    span Enlace
                    i.fas.fa-link
    p.mb-5 Finalmente y con el fin de sintetizar el contenido de este componente formativo, se presenta el siguiente mapa conceptual:
    figure
      img(src="@/assets/curso/128.svg" alt="Mapa conceptual")

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
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
.bg--amarillo-claro
  background-color: #feec9a !important
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: $color-sistema-texto
  font-size: 38px
.pasos-a__circle
  width: 70px
  height: 70px
  min-width: 70px
.tarjetas-text:hover
  .tarjetas-text__contenido
    bottom: -5%
    p
      opacity: 1
      display: block
.slyder-texture
  background-image: url('../assets/curso/slyder-texture.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.vineta:before
  content: url('../assets/curso/vineta.svg')
  width: 26px
  height: 18px
.acordion__activo
  background-color: #b7eef3 !important
.bg--azul-claro
  background-color: #dbf6f9
.bg-texture
  background-image: url('../assets/curso/bg-texture.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.tarjetas-text__contenido
  @media (min-width: $bp-min-lg)
    font-size: 14px
  @media (max-width: $bp-min-md)
    font-size: 16px
.img-up
  @media (max-width: $bp-min-md)
    position: relative !important
.anexo
  width: fit-content
</style>
