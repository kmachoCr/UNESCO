const activity101 = {
  introSlides: [
     // {
      //  title: 'Los seres vivos y los elementos inertes',
      //  image: "../images/lab1/lab01-nina.svg",
      //  audio: '../audios/correct-answer.mp3',
      //  strings: [
      //    '¡Hola!',
      //    '¿Sabías que las plantas están vivas? Si, como vos y como yo.',
      //    'Y que además existen los elementos inertes.',
    //    '¿Querés que te explique?',
    //   ],
    // },
    // {
    //   title: 'Seleccioná un elemento inerte natural.',
    //   image: "https://picsum.photos/800/600?grayscale",
    //   audio: '../audios/correct-answer.mp3',
    //   strings: [
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //   ],
    // },
    // {
    //   title: 'Seleccioná un elemento inerte natural.',
    //   image: "https://picsum.photos/800/600?grayscale",
    //   audio: '../audios/correct-answer.mp3',
    //   strings: [
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //   ],
    // },
    // {
    //   title: 'Seleccioná un elemento inerte natural.',
    //   image: "https://picsum.photos/800/600?grayscale",
    //   audio: '../audios/correct-answer.mp3',
    //   strings: [
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //     '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
    //   ],
    // }
  ],
  slides: [
    {
      title: 'Seleccioná un elemento inerte natural.',
      image: "../images/lab1/lab01-landscape-bk-vacio.png",
      audio: '../audios/01_element-inerte-natural.mp3',
      options: [
        {
          name: '',
          image: '../images/lab1/lab01-icon-cerca.svg',
          isCorrect: false,
          feedback: '¡Mmm..creo que estas un poco confundido! Las cercas son construidas por las personas, por lo que no son seres naturales.',
          audio: '../audios/01-feedback-1-cerca.mp3',
        },
        {
          name: '',
          image: '../images/lab1/lab01-icon-agua.svg',
          isCorrect: true,
          feedback: 'El agua es un elemento natural e inerte. No tiene vida pero ayuda a la vida.',
          audio: '../audios/01-feedback-1-Agua.mp3',
        },
        {
          name: '',
          image: '../images/lab1/lab01-icon-arbol.svg',
          isCorrect: false,
          feedback: 'Los árboles están vivos y reaccionan, por ejemplo sus raíces crecen hacia dónde pueden encontrar agua.',
          audio: '../audios/01-feedback-1-arbol.mp3',
        },
      ],
    },
    {
      title: '¿Cuál de estos es un ser vivo?',
      image: "../images/lab1/lab01-landscape-conagua.png",
      audio: '../audios/02_ser-vivo.mp3',
      options: [
        {
          name: 'Agua',
          image: '../images/lab1/lab01-icon-agua.svg',
          isCorrect: false,
          feedback: '¡Oh oh! El agua es inerte, aunque indispensable para los seres vivos.',
          audio: '../audios/02-feedback-agua.mp3',
        },
        {
          name: 'Delfín',
          image: '../images/lab1/lab01-icon-delfin.svg',
          isCorrect: true,
          feedback: 'Sabías que los delfines respiran por los pulmones y no por las branquias como lo hacen otros seres que viven en el mar. ',
          audio: '../audios/02-feedback-delfin.mp3',
        },
        {
          name: 'Suelo',
          image: '../images/lab1/lab01-icon-tierra.svg',
          isCorrect: false,
          feedback: '¡No! la tierra es natural pero no tiene vida.',
          audio: '../audios/02-feedback-suelo.mp3',
        },
      ],
    },
    {
      title: 'Ahora, seleccioná un ser que respira. ',
      image: "../images/lab1/lab01-landscape-delfin.png",
      audio: '../audios/03-cual-respira.mp3',
      options: [
        {
          name: 'Mono',
          image: '../images/lab1/lab01-icon-mono.svg',
          isCorrect: true,
          feedback: '¡Muy bien! El mono es un ser vivo por lo que respira. Incluso dicen que es medio familia de las personas. ',
          audio: '../audios/03-feedback-mono.mp3',
        },
        {
          name: 'Piedra',
          image: '../images/lab1/lab01-icon-piedra.svg',
          isCorrect: false,
          feedback: '¡Oh oh! Si respirara estaría viva y las piedras son inertes. ',
          audio: '../audios/03-feedback-piedra.mp3',
        },
        {
          name: 'Nube',
          image: '../images/lab1/lab01-icon-nube.svg',
          isCorrect: false,
          feedback: 'Aunque las nubes anden por el aire, no lo respiran. Son objetos compuestos por gotas de agua. ',
          audio: '../audios/03-feedback-nubes.mp3',
        },
      ],
    },
    {
      title: 'Seleccioná un ser que crece.',
      image: "../images/lab1/lab01-landscape-mono.png",
      audio: '../audios/04-ser-que-crece.mp3',
      options: [
        {
          name: 'Sol',
          image: '../images/lab1/lab01-icon-sol.svg',
          isCorrect: false,
          feedback: '"¡Oh oh, el sol es un ser inerte y no crece! Aunque si ayuda al crecimiento de plantas y a la vida en la tierra."',
          audio: '../audios/04-feedback-sol.mp3',
        },
        {
          name: 'Lápiz',
          image: '../images/lab1/lab01-icon-lapiz.svg',
          isCorrect: false,
          feedback: 'Aunque a veces quisiéramos que escribieran solos, los lapices son seres inertes, o sea no tienen vida.',
          audio: '../audios/04-feedback-lapiz.mp3',
        },
        {
          name: 'Árbol',
          image: '../images/lab1/lab01-icon-arbol.svg',
          isCorrect: true,
          feedback: 'Los árboles respiran mediante sus hojas y producen su propio alimento al absorber nutrientes del suelo por sus raíces.',
          audio: '../audios/04-feedback-arbol.mp3',
        },
      ],
    },
    {
      title: 'Escogé un elemento inerte artificial.',
      image: "../images/lab1/lab01-landscape-arbol.png",
      audio: '../audios/05-elemento-inerte-artificial.mp3',
      options: [
        {
          name: 'Sol',
          image: '../images/lab1/lab01-icon-sol.svg',
          isCorrect: false,
          feedback: '¡Casi casi, pero no! El sol si es un ser inerte, pero es natural, o sea no fue creado por el ser humano.',
          audio: '../audios/05-feedback-sol.mp3',
        },
        {
          name: 'Cerca',
          image: '../images/lab1/lab01-icon-cerca.svg',
          isCorrect: true,
          feedback: '¡Muy bien! las cercas no tienen vida y son construidas por las personas.',
          audio: '../audios/05-feedback-cerca.mp3',
        },
        {
          name: 'Tortuga',
          image: '../images/lab1/lab01-icon-tortuga.svg',
          isCorrect: false,
          feedback: 'Son lentas y a veces las podés confundir con una piedra, pero son seres vivos.',
          audio: '../audios/05-feedback-tortuga.mp3',
        },
      ],
    },
    {
      title: 'Seleccioná un ser vivo que ocupa aire para vivir, como vos y como yo, pero que aguanta la respiración bajo el agua',
      image: "../images/lab1/lab01-landscape-cerca.png",
      audio: '../audios/06-ser-vivo-aire.mp3',
      options: [
        {
          name: 'Tortuga marina',
          image: '../images/lab1/lab01-icon-tortuga.svg',
          isCorrect: true,
          feedback: 'Sabías que las tortugas marinas cuando duermen pueden estar entre 4 y 7 horas bajo el agua.',
          audio: '../audios/06-feedback-tortuga.mp3',
        },
        {
          name: 'Pulpo',
          image: '../images/lab1/lab01-icon-pulpo.svg',
          isCorrect: false,
          feedback: '¡No! Los pulpos son seres marinos que toman el oxígeno del agua. ',
          audio: '../audios/06-feedback-pulpo.mp3',
        },
        {
          name: 'Pez ',
          image: '../images/lab1/lab01-icon-pez.svg',
          isCorrect: false,
          feedback: 'Los peces respiran bajo el agua, mediante unos órganos especiales llamados branquias, con las cuales pueden filtrar el oxígeno del agua.',
          audio: '../audios/06-feedback-pez.mp3',
        },
      ],
    },
    {
      title: 'Volvamos nuestra mirada para arriba, ¿cuál es un elemento inerte natural que podemos ver en el cielo?',
      image: "../images/lab1/lab01-landscape-tortuga.png",
      audio: '../audios/07-elemento-inerte-natural-cielo.mp3',
      options: [
        {
          name: 'Avión',
          image: '../images/lab1/lab01-icon-avion.svg',
          isCorrect: false,
          feedback: 'Acertaste una característica de dos. El avión es inerte, pero no natural, sino desarrollado por los humanos. ',
          audio: '../audios/07-feedback-avion.mp3',
        },
        {
          name: 'Lapa roja',
          image: '../images/lab1/lab01-icon-laparoja.svg',
          isCorrect: false,
          feedback: 'Si, podemos ver lapas en el cielo mientras vuelan, pero son aves por lo tanto son seres vivos. ',
          audio: '../audios/07-feedback-lapa-roja.mp3',
        },
        {
          name: 'Sol ',
          image: '../images/lab1/lab01-icon-sol.svg',
          isCorrect: true,
          feedback: 'Con su luz y calor ayuda al crecimiento de plantas y a la vida en la tierra.',
          audio: '../audios/07-feedback-sol.mp3',
        },
      ],
    },
    {
      title: 'Por último, escogé un ser que se reproduce por medio de huevos. ',
      image: "../images/lab1/lab01-landscape-sol.png",
      audio: '../audios/08-ser-vivo-huevos.mp3',
      options: [
        {
          name: 'Lapa roja  ',
          image: '../images/lab1/lab01-icon-laparoja.svg',
          isCorrect: true,
          feedback: '¡Excelente respuesta! Todos los pájaros son ovíparos,  es decir, nacen de huevos.',
          audio: '../audios/08-feedback-lapa-roja.mp3',
        },
        {
          name: 'Delfín',
          image: '../images/lab1/lab01-icon-delfin.svg',
          isCorrect: false,
          feedback: '¡Que no te confunda que vivan en el mar! Los delfines son mamíferos, por lo que nacen directamente de su madre.',
          audio: '../audios/08-feedback-delfines.mp3',
        },
        {
          name: 'Piedra ',
          image: '../images/lab1/lab01-icon-piedra.svg',
          isCorrect: false,
          feedback: '¡Oh oh! Para reproducirse debería tener vida y las piedras son inertes. ',
          audio: '../audios/08-feedback-piedra.mp3',
        },
      ],
    },



  ],
}