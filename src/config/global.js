export default {
  global: {
    componenteFormativo: 'Comunicación visual',
    descripcionCurso:
      'En un contexto social donde la imagen domina la forma de percibir la realidad que rodea al mundo y su actualidad, la comunicación visual es considerada como la ruta adecuada para llegar a un público objetivo de una forma directa, de acuerdo con una necesidad pertinente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Qué es la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de comunicación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comunicación visual',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Imagen y sociedad ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Semiótica, retórica y sintaxis de la imagen',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedad intelectual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Derechos de autor',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Copyright</i>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Derechos, permisos y licenciamientos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Definición.xyz. (s. f.). Técnicas de Comunicación',
      link: 'https://definicion.xyz/tecnicas-de-comunicacion',
    },
    {
      referencia:
        'Díaz, C. (2019). Lenguaje visual, principios y caso de estudio Aena. Social Media PYMES.',
      link: 'http://www.socialmediapymes.com/lenguaje-visual/',
    },
    {
      referencia:
        'Dirección Nacional de Derecho de Autor. (s. f.). Preguntas frecuentes. ',
      link: 'http://derechodeautor.gov.co:8080/preguntas-frecuentes',
    },
    {
      referencia:
        'Dondis, D. (2017). La sintaxis de la imagen. Introducción al alfabeto visual. Editorial Gustavo Gili.',
      link:
        'https://ggili.com.mx/media/catalog/product/9/7/9788425229299_inside.pdf',
    },
    {
      referencia:
        'Karam, T. (2006). Introducción a la semiótica de la imagen. Portal de la Comunicación InCom-UAB. ',
      link:
        'http://investigacionsocial.sociales.uba.ar/wp-content/uploads/sites/103/2013/03/SEMIOTICA-KARAM.pdf',
    },
    {
      referencia:
        'Ley 23 de 1982. Sobre los Derechos de Autor. Enero 28 de 1982. ',
      link:
        'http://propiedadintelectual.unal.edu.co/fileadmin/recursos/innovacion/docs/normatividad_pi/ley23_1982.pdf',
    },
    {
      referencia:
        'Llasera, J. (2020). Los 7 elementos visuales claves del diseño gráfico. Imborrable.',
      link: 'https://imborrable.com/blog/elementos-visuales-diseno-grafico/',
    },
    {
      referencia:
        'Machuca, R. (2011). La importancia del Diseño de Comunicación Visual desde las enseñanzas artísticas medias y superiores. Diseño en Palermo. Encuentro Latinoamericano de Diseño.',
      link:
        'https://fido.palermo.edu/servicios_dyc/encuentro2007/02_auspicios_publicaciones/actas_diseno/articulos_pdf/ADC077.pdf',
    },
    {
      referencia:
        'Nediger, M. (2020). Comunicación Visual: Definición, Ejemplos y Plantillas. Venngage.',
      link: 'https://es.venngage.com/blog/comunicacion-visual/',
    },
    {
      referencia: 'Peiró, R. (2020). Copyright. Economipedia.com.',
      link: 'https://economipedia.com/definiciones/copyright.html',
    },
    {
      referencia:
        'Pozo. (2001). El tipo y sus partes. Líneas de trazado y la distancia entre caracteres. Sistemas de medición.',
      link: 'http://www.catedratecno1.com.ar/apuntes/sistemas-de-medicion.pdf',
    },
    {
      referencia:
        'Santos, D. (2012). Fundamentos de la comunicación. Red Tercer Milenio.',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/comunicacion/Fundamentos_de_comunicacion.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2017). Reporte sobre la información en materia de propiedad intelectual en Colombia. DNP, DNDA, ICA, Ministerio de Relaciones Exteriores. ',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Proteccion_Competencia/Estudios_Economicos/Documentos_elaborados_Grupo_Estudios_Economicos/Reporte-informacion-en-materia-de-Propiedad-Intelectual-en-Colombia.pdf',
    },
    {
      referencia:
        'Valencia, M. (2019). Las 7 Técnicas de Comunicación Eficaz que debes dominar.',
      link: 'https://marianvalencia.com/tecnicas-de-comunicacion-eficaz/',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado: ' Aula de Propiedad Intelectual.',
    },
    {
      termino: 'CAN',
      significado: ' Comunidad Andina de Naciones.',
    },
    {
      termino: 'Comunicación Visual',
      significado:
        'La comunicación visual es una práctica que se encarga de utilizar los elementos visuales para expresar un mensaje, inspirar cambios o evocar emociones.',
    },
    {
      termino: 'Derechos de Autor',
      significado:
        'Se utilizan para describir los derechos de los creadores sobre sus obras literarias y artísticas. Las obras que se prestan a la protección por derecho de autor van desde los libros, la música, la pintura, la escultura y las películas, hasta los programas informáticos, las bases de datos, los anuncios publicitarios, los mapas y los dibujos técnicos.',
    },
    {
      termino: 'DNDA',
      significado: ' Dirección Nacional de Derecho de Autor.',
    },
    {
      termino: 'Imagen',
      significado: 'Figura, representación, semejanza y apariencia de algo.',
    },
    {
      termino: 'Línea',
      significado:
        'Sucesión de letras separadas por espacios que forman palabras. Trazo hecho con una regla recta y un tiralíneas.',
    },
    {
      termino: 'Ojo',
      significado:
        'El ojo del tipo es lo que se ve de la letra impresa. Es la altura y la anchura real de la letra, su perfil, el contraste de blanco y negro dentro y fuera de ella. Ojo, en el sistema de impresión tipográfica, es la parte que está en relieve y que deja huella en el papel (Pozo, 2001).',
    },
    {
      termino: 'OMPI',
      significado: ' Organización Mundial de Propiedad Intelectual.',
    },
    {
      termino: 'Semiótica',
      significado:
        'Es la disciplina encargada del estudio del signo, es decir, aquello que se emplea para representar una idea o un objeto diferente de sí mismo.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Es aquel ámbito, dentro de la gramática, que estudia y establece las reglas para propiciar una correcta combinación de palabras, las formas en las que se pueden establecer las composiciones.',
    },
    {
      termino: 'SIC',
      significado: ' Superintendencia de Industria y Comercio.',
    },
  ],
  complementario: [
    {
      texto:
        'Dirección Nacional de Derecho de Autor. (s. f.). Registro de Obras. Mininterior. ',
      tipo: 'Página <i>web</i>',
      link: 'http://derechodeautor.gov.co:8080/registro-de-obras1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes ',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora y Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
