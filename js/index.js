const eraColors = ['#983567E6', '#8E2158E6',  '#830B47E6', '#700A3DE6']
const periodColors = ['#F78B2CE6', '#F28321E6', '#EC7A16E6', '#E6720BE6', '#E36E06E6', '#E06900E6']

const eons = {
  archean: {
    eras: ['eoarchean', 'paleoarchean', 'mesoarchean', 'neoarchean'],
    key: 'archean',
    name_en: 'Archean Eon',
    name_es: 'Eón Arcaico',
    summary_en: "During the Archean, the solar system finished its formation, and the first evidence of life is preserved.",
    summary_es: "El sistema solar terminó su formación y se conserva la primera evidencia de vida durante el Arcaico.",
    time_en: "4031 – 2500 Mya",
    time_es: "Entre hace 4031 – 2500 Ma"
  },
  hadean: {
    eras: [],
    key: 'hadean',
    imageUrl: '/images/theia.jpg',
    name_en: 'Hadean Eon',
    name_es: 'Eón Hádico',
    summary_en: "During the Hadean, Earth's surface cooled after its initial formation. The Moon was formed after a massive collision between Earth and a Mars-sized planet.",
    summary_es: "<small>La superficie de la Tierra se enfrió después de su formación inicial durante el Hádico. La Luna se formó después de una colisión masiva entre la Tierra y un planeta del tamaño de Marte.</small>",
    time_en: '4567 – 4031 Mya',
    time_es: 'Entre hace 4567 – 4031 Ma'
  },
  phanerozoic: {
    eras: ['paleozoic', 'mesozoic', 'cenozoic'],
    key: 'phanerozoic',
    name_en: 'Phanerozoic Eon',
    name_es: 'Eón Fanerozoico',
    summary_en: 'The Phanerozoic is our present geologic eon. During this time, diverse and complex life has spread across Earth, including the evolution of human beings.',
    summary_es: 'El Fanerozoico es nuestro eón geológico actual. Durante este tiempo, una vida diversa y compleja se ha extendido por la Tierra, incluida la evolución de los seres humanos.',
    time_en: '539 Mya – Today',
    time_es: 'Entre hace 539 Ma – Actualidad'
  },
  proterozoic: {
    eras: ['paleoproterozoic', 'mesoproterozoic', 'neoproterozoic'],
    key: 'proterozoic',
    imageUrl: '/images/cyanobacteria.jpg',
    name_en: 'Proterozoic Eon',
    name_es: 'Eón Proterozoico',
    summary_en: "During the Proterozoic, oxygen became a major component of Earth’s atmosphere and multicellular life began to become common.",
    summary_es: "Durante el Proterozoico, el oxígeno se convirtió en un componente importante de la atmósfera de la Tierra y la vida multicelular comenzó a volverse común.",
    time_en: "2500 – 539 Mya",
    time_es: "Entre hace 2500 – 539 Ma"
  }
}

const eras = {
  cenozoic: {
    height: 12.2,
    color: 'RGBA(151,14,83,0.5)',
    imageUrl: '/images/flock.jpg',
    credit: 'Image credit: Faisal Akram',
    name_en: 'Cenozoic Era',
    name_es: 'Era Cenozoica',
    periods: ['quaternary', 'neogene', 'paleogene'],
    summary_en: "The Cenozoic is the current era of Earth's history. It is marked by the flourishing of mammals and birds and the emergence of humans.",
    summary_es: 'El Cenozoico es la era actual de la historia de la Tierra. Está marcado por el surgimiento de mamíferos y aves, y la aparición de los humanos.',
    time_en: '66 Mya – Today',
    time_es: 'Entre hace 66 Ma – Actualidad',
    titleSize: 'medium',
    timeSize: 'medium'
  },
  eoarchean: {
    height: 28.2,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Eoarchean Era',
    name_es: "Era Eoarcaica",
    periods: [],
    summary_en: "At the beginning of the Eoarchean, Earth endured a massive bombardment of asteroids from space. By the end of this era, the first life had arisen.",
    summary_es: "La Tierra sufrió un bombardeo masivo de asteroides desde el espacio a principios del Eoarcaico. La primera vida había surgido al final de esta era.",
    time_en: '4031 – 3600 Mya',
    time_es: "Entre hace 4031 – 3600 Ma"
  },
  mesoarchean: {
    height: 26.1,
    color: 'RGBA(151,14,83,0.9)',
    name_en: 'Mesoarchean Era',
    name_es: 'Era Mesoarcaica',
    periods: [],
    summary_en: 'The oldest evidence of plate tectonics, an important geologic process, dates to the Mesoarchean.',
    summary_es: "La evidencia más antigua de placas tectónicas —un importante proceso geológico— data del Mesoarcaico.",
    time_en: '3200 – 2800 Mya',
    time_es: 'Entre hace 3200 – 2800 Ma'
  },
  mesoproterozoic: {
    height: 30.6,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesoproterozoic Era',
    name_es: 'Era Mesoproterozoica',
    periods: ['stenian', 'ectasian', 'calymmian'],
    summary_en: "The Mesoproterozoic is the first era for which a comprehensive geologic record has been found. The continents we know today began to emerge, although their shapes were very different.",
    summary_es: '<small>El Mesoproterozoico es la primera era de la que se ha encontrado un registro geológico completo. Los continentes que conocemos hoy comenzaron a surgir durante esta era, aunque sus formas eran muy diferentes.</small>',
    time_en: '1600 – 1000 Mya',
    time_es: 'Entre hace 1600 – 1000 Ma'
  },
  mesozoic: {
    height: 34.5,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesozoic Era',
    name_es: 'Era Mesozoica',
    periods: ['cretaceous', 'jurassic', 'triassic', ],
    summary_en: "The Mesozoic was dominated by the evolution of the dinosaurs, which lasted until a major extinction event 66 Mya.",
    summary_es: 'El Mesozoico estuvo dominado por la evolución de los dinosaurios, que duró hasta un importante evento de extinción hace 66 Ma.',
    time_en: '252 – 66 Mya',
    time_es: 'Entre hace 252 – 66 Ma'
  },
  neoarchean: {
    height: 19.6,
    color: 'RGBA(151,14,83,0.85)',
    imageUrl: '/images/photosynthesis.jpeg',
    name_en: 'Neoarchean Era',
    name_es: 'Era Neoarcaica',
    periods: [],
    summary_en: "The Neoarchean was marked by the growing complexity of living organisms and the evolution of photosynthesis.",
    summary_es: 'El Neoarcaico estuvo marcado por la creciente complejidad de los organismos vivos y la evolución de la fotosíntesis.',
    time_en: '2800 – 2500 Mya',
    time_es: 'Entre hace 2800 – 2500 Ma'
  },
  neoproterozoic: {
    height: 23.5,
    color: 'RGBA(151,14,83,0.5)',
    name_en: 'Neoproterozoic Era',
    name_es: 'Era Neoproterozoica',
    periods: ['ediacaran', 'cryogenian', 'tonian'],
    summary_en: 'During the Neoproterozoic, Earth became covered in glaciers and the first multi-cellular fossils are preserved.',
    summary_es: 'La Tierra se cubrió de glaciares durante el Neoproterozoico. Se conservan los primeros fósiles multicelulares.',
    time_en: '1000 – 539 Mya',
    time_es: 'Entre hace 1000 – 539 Ma'
  },
  paleoarchean: {
    height: 26.1,  
    color: 'RGBA(151,14,83,0.95)',
    name_en: 'Paleoarchean Era',
    name_es: 'Era Paleoarcaica',
    periods: [],
    summary_en: "The oldest confirmed evidence for life on Earth dates from the Paleoarchean in the form of fossilized bacterial mats.",
    summary_es: "La evidencia confirmada más antigua de vida en la Tierra data del Paleoarcaico en forma de esteras bacterianas fosilizadas.",
    time_en: '3600 – 3200 Mya',
    time_es: 'Entre hace 3600 – 3200 Ma'
  },
  paleoproterozoic: {
    height: 45.9,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleoproterozoic Era',
    name_es: 'Era Paleoproterozoica',
    periods: ['statherian', 'orosirian', 'rhyacian', 'siderian'],
    summary_en: "The Paleoproterozoic saw the formation of the first continents. The rise of oxygen-producing cyanobacteria led to a dramatic increase of oxygen in the atmosphere, paving the way for life as we know it.",
    summary_es: "La formación de los primeros continentes se dio durante el Paleoproterozoico. El surgimiento de las cianobacterias productoras de oxígeno condujo a un aumento dramático en el oxígeno de la atmósfera, allanando el camino para la vida tal como la conocemos.",
    time_en: '2500 – 1600 Mya',
    time_es: 'Entre hace 2500 – 1600 Ma'
  },
  paleozoic: {
    height: 53.3,
    imageUrl: '/images/trilobite.jpg',
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleozoic Era',
    name_es: 'Era Paleozoica',
    periods: ['permian', 'carboniferous', 'devonian', 'silurian', 'ordovician', 'cambrian'],
    summary_en: "The Paleozoic saw a massive increase in the variety and complexity of life on Earth.",
    summary_es: 'El Paleozoico vio un aumento masivo en la variedad y complejidad de la vida en la Tierra.',
    time_en: '539 – 252 Mya',
    time_es: 'Entre hace 539 – 252 Ma'
  },
}

const periods = {
  quaternary: {
    height: 3.9,
    color: 'RGBA(242,114,0,0.5)',
    imageUrl: '/images/sprinters.jpg',
    credit: 'Image credit: Darren Wilkinson',
    name_en: 'Quaternary Period',
    name_es: 'Periodo Cuaternario',
    summary_en: "The Quaternary is Earth's current geologic period, marked by periodic ice ages. It's most notable for the emergence of humans.",
    summary_es: 'El Cuaternario es el período geológico actual de la Tierra, marcado por eras de hielo periódicas. Se destaca particularmente por la aparición de los humanos.',
    time_en: '2.6 Mya – Today',
    time_es: 'Entre hace 2.6 Ma – Actualidad',
    timeSize: 'small',
    titleSize: 'small'
  },
  neogene: {
    height: 30.4,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Neogene Period',
    name_es: 'Periodo Neógeno',
    summary_en: "During the Neogene, North and South America became connected, and birds and mammals continued to evolve.",
    summary_es: 'Durante el Neógeno, Norteamérica y Suramérica se conectaron, y las aves y los mamíferos continuaron evolucionando.',
    time_en: '23 – 2.6 Mya',
    time_es: 'Entre hace 23 – 2.6 Ma'
  },
  paleogene: {
    height: 65.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Paleogene Period',
    name_es: 'Periodo Paleógeno',
    summary_en: "After the extinction of the dinosaurs, birds and mammals began to increase in numbers and diversity during the Paleogene.",
    summary_es: 'Después de la extinción de los dinosaurios, las aves y los mamíferos comenzaron a aumentar en número y a diversificarse durante el Paleógeno.',
    time_en: '66 – 23 Mya',
    time_es: 'Entre hace 66 – 23 Ma'
  },
  cretaceous: {
    height: 42.5,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Cretaceous Period',
    name_es: 'Periodo Cretácico',
    summary_en: "Earth's climate was warm during the Cretaceous, leading to oceans that covered large parts of many continents. Dinosaurs continued to dominate the planet's surface.",
    summary_es: "El clima de la Tierra fue cálido durante el Cretácico, lo que dio lugar a océanos que cubrían grandes partes de muchos continentes. Los dinosaurios continuaron dominando la superficie del planeta.",
    time_en: '145 – 66 Mya',
    time_es: 'Entre hace 145 – 66 Ma'
  },
  jurassic: {
    height: 30.3,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Jurassic Period',
    name_es: 'Periodo Jurásico',
    summary_en: "During the Jurassic, dinosaurs became the dominant land animals and the supercontinent of Pangaea began to split into two.",
    summary_es: 'Durante el Jurásico, los dinosaurios se convirtieron en los animales terrestres dominantes y el supercontinente de Pangea comenzó a dividirse en dos.',
    time_en: '201 – 145 Mya',
    time_es: 'Entre hace 201 – 145 Ma'
  },
  triassic: {
    height: 27.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Triassic Period',
    name_es: 'Periodo Triásico',
    summary_en: "The Triassic began and ended with dramatic worldwide extinction events. In between, reptiles spread across the land, ocean, and air, including the emergence of the first dinosaurs.",
    summary_es: 'El Triásico comenzó y terminó con eventos de extinción mundial dramáticos. En el medio, los reptiles se extendieron por la tierra, el océano y el aire, incluida la aparición de los primeros dinosaurios.',
    time_en: '252 – 201 Mya',
    time_es: 'Entre hace 252 – 201 Ma'
  },
  permian: {
    height: 16.4,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Permian Period',
    name_es: 'Periodo Pérmico',
    summary_en: "Changing climate conditions during the Permian led to enormous deserts in the interior of the Pangaea supercontinent. The end of the Permian is marked by the largest mass extinction in Earth's history.",
    summary_es: "<small>Las condiciones climáticas cambiantes durante el Pérmico dieron lugar a enormes desiertos en el interior del supercontinente Pangea. El final del Pérmico está marcado por la extinción masiva más grande en la historia de la Tierra.</small>",
    time_en: '299 – 252 Mya',
    time_es: 'Entre hace 299 – 252 Ma',
    timeSize: 'medium',
    titleSize: 'medium'
  },
  carboniferous: {
    height: 20.9,
    color: 'RGBA(242,114,0,0.6)',
    name_en: 'Carboniferous Period',
    name_es: 'Periodo Carbonífero',
    summary_en: "During the Carbonifercous, the supercontinent of Pangaea formed. Amphibians came to dominate the new landmass.",
    summary_es: 'El supercontinente Pangea se formó durante el Carbonífero. Los anfibios llegaron a dominar la nueva masa continental.',
    time_en: '359 – 299 Mya',
    time_es: 'Entre hace 359 – 299 Ma'
  },
  devonian: {
    height: 21,
    color: 'RGBA(242,114,0,0.7)',
    name_en: 'Devonian Period',
    name_es: 'Periodo Devónico',
    summary_en: "During the Devonian, fish became a dominant form of life in the oceans. They also began to migrate onto land, becoming the first amphibians.",
    summary_es: 'Durante el Devónico, los peces se convirtieron en una forma de vida dominante en los océanos. También comenzaron a migrar a la tierra, convirtiéndose en los primeros anfibios.',
    time_en: '419 – 359 Mya',
    time_es: 'Entre hace 419 – 359 Ma'
  },
  silurian: {
    height: 8.6,
    color: 'RGBA(242,114,0,0.8)',
    name_en: 'Silurian Period',
    name_es: 'Periodo Silúrico',
    summary_en: "During the Silurian, animals from the oceans began to spread onto land and land-based plant life evolved significantly.",
    summary_es: 'Los animales de los océanos comenzaron a extenderse a la tierra durante el Silúrico, y durante este periodo la vida vegetal terrestre evolucionó significativamente.',
    time_en: '444 – 419 Mya',
    time_es: 'Entre hace 444 – 419 Ma',
    timeSize: 'small',
    titleSize: 'small'
  },
  ordovician: {
    height: 14.5,
    color: 'RGBA(242,114,0,0.9)',
    name_en: 'Ordovician Period',
    name_es: 'Periodo Ordovícico',
    summary_en: "The first plant life on land arose during the Ordovician. In the seas, invertebrates such as mollusks were the dominant species.",
    summary_es: 'La primera vida vegetal en la tierra surgió durante el Ordovícico. Los invertebrados como los moluscos eran las especies dominantes en los mares.',
    time_en: '485 – 444 Mya',
    time_es: 'Entre hace 485 – 444 Ma',
    timeSize: 'small',
    titleSize: 'small'
  },
  cambrian: {
    height: 18.6,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Cambrian Period',
    name_es: 'Periodo Cámbrico',
    summary_en: 'During the "Cambrian explosion", the amount and diversity of complex life on Earth increased dramatically, particularly in the oceans.',
    summary_es: 'Durante la "explosión cámbrica", la cantidad y diversidad de vida compleja en la Tierra aumentó drásticamente, particularmente en los océanos.',
    time_en: '539 – 485 Mya',
    time_es: 'Entre hace 539 – 485 Ma',
    timeSize: 'medium',
    titleSize: 'medium'
  },
  ediacaran: {
    height: 20.9,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Ediacaran Period',
    name_es: 'Periodo Ediacárico',
    summary_en: "The Ediacaran saw several periods of widespread glaciers, as well as the emergence of newly complex forms of multicellular life.",
    summary_es: 'El Ediacárico fue testigo de varios períodos de glaciares generalizados, así como del surgimiento de nuevas y complejas formas de vida multicelular.',
    time_en: '635 – 539 Mya',
    time_es: 'Entre hace 635 – 539 Ma'
  },
  cryogenian: {
    height: 18.4,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Cryogenian Period',
    name_es: 'Periodo Criogénico',
    summary_en: 'Scientists have nicknamed the Cryogenian "snowball Earth" due to its worldwide glaciers.',
    summary_es: 'Los científicos han apodado al Criogénico como la "Tierra bola de nieve" debido a sus glaciares en todo el mundo.',
    time_en: '720 – 635 Mya',
    time_es: 'Entre hace 720 – 635 Ma'
  },
  tonian: {
    height: 60.7,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Tonian Period',
    name_es: 'Periodo Tónico',
    summary_en: 'The first animals (as opposed to bacteria or fungi) likely appeared during the Tonian, which also saw the breakup of the Rodinia supercontinent.',
    summary_es: 'Los primeros animales (a diferencia de las bacterias y los hongos) probablemente aparecieron durante el Tónico, que también vio la ruptura del supercontinente de Rodinia.',
    time_en: '1000 – 720 Mya',
    time_es: 'Entre hace 1000 – 720 Ma'
  },
  stenian: {
    height: 33.3,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Stenian Period',
    name_es: 'Periodo Esténico',
    summary_en: "During the Stenian, the supercontinent of Rodinia formed.",
    summary_es: 'Durante el Esténico, se formó el supercontinente de Rodinia.',
    time_en: '1200 – 1000 Mya',
    time_es: 'Entre hace 1200 – 1000 Ma'
  },
  ectasian: {
    height: 33.3,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Ectasian Period',
    name_es: 'Periodo Ectásico',
    summary_en: "Little is known about this period, but fossilized evidence of a species of red algae shows the first evidence of modern reproduction in any life.",
    summary_es: 'Se sabe poco sobre este periodo, pero la evidencia fosilizada de una especie de alga roja muestra la primera evidencia de reproducción moderna para cualquier forma de vida.',
    time_en: '1400 – 1200 Mya',
    time_es: 'Entre hace 1400 – 1200 Ma'
  },
  calymmian: {
    height: 33.3,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Calymmian Period',
    name_es: 'Periodo Calímico',
    summary_en: "During the Calymmian, the supercontinent of Columbia began to drift apart.",
    summary_es: "Durante el Calímico, el supercontinente de Columbia comenzó a separarse.",
    time_en: '1600 – 1400 Mya',
    time_es: 'Entre hace 1600 – 1400 Ma'
  },
  statherian: {
    height: 22.2,
    color: 'RGBA(242,114,0,0.4)',
    name_en: 'Statherian Period',
    name_es: 'Periodo Estatérico',
    summary_en: "Little is known about the Statherian Period.",
    summary_es: 'Se sabe poco sobre el periodo Estatérico.',
    time_en: '1800 – 1600 Mya',
    time_es: 'Entre hace 1800 – 1600 Ma'
  },
  orosirian: {
    height: 27.8,
    color: 'RGBA(242,114,0,0.6)',
    name_en: 'Orosirian Period',
    name_es: 'Periodo Orosírico',
    summary_en: "During the Orosirian, the supercontinent of Columbia formed, and Earth suffered two of the largest asteroid impacts since the early days of the solar system.",
    summary_es: 'El supercontinente Columbia se formó durante el Orosírico, periodo durante el cual la Tierra sufrió dos de los mayores impactos de asteroides desde los primeros días del sistema solar.',
    time_en: '2050 – 1800 Mya',
    time_es: 'Entre hace 2050 – 1800 Ma'
  },
  rhyacian: {
    height: 27.8,
    color: 'RGBA(242,114,0,0.8)',
    name_en: 'Rhyacian Period',
    name_es: 'Periodo Riásico',
    summary_en: "During the Rhyacian, Earth was covered by glaciers for around 100 million years. The first life large enough to be visible to the unaided eye evolved during this period.",
    summary_es: "Durante el Riásico, la Tierra estuvo cubierta de glaciares por alrededor de unos 100 millones de años. La primera vida lo suficientemente grande como para ser visible a simple vista, evolucionó durante este periodo.",
    time_en: '2300 – 2050 Mya',
    time_es: 'Entre hace 2300 – 2050 Ma'
  },
  siderian: {
    height: 22.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Siderian Period',
    name_es: 'Periodo Sidérico',
    summary_en: 'During the Siderian, the "Great Oxygenation Event" occurred, in which cyanobacteria began producing oxygen through photosynthesis. Over the next 500 million years, the amount of oxygen in Earth\'s atmosphere would increase dramatically.',
    summary_es: "Durante el Sidérico, se produjo el \"Gran Evento de Oxigenación\", en el que las cianobacterias comenzaron a producir oxígeno a través de la fotosíntesis. Durante los siguientes 500 millones de años, la cantidad de oxígeno en la atmósfera de la Tierra aumentaría drásticamente.",
    time_en: '2500 – 2300 Mya',
    time_es: 'Entre hace 2500 – 2300 Ma'
  },
  
}

function localize(lang) {
  // Set the given language

  const eonContainer = document.getElementById('eonContainer')
  // Clear current content
  eonContainer.innerHTML = ''

  // Build content
  for (const key of ['phanerozoic', 'proterozoic','archean', 'hadean']) {
    const eon = eons[key]

    const eonDiv = document.createElement('div')
    eonDiv.classList = 'eon'
    eonDiv.style.height = String(eon.height) + '%'
    eonDiv.setAttribute('id', eon.key)
    eonContainer.appendChild(eonDiv)
  
    const title = document.createElement('div')
    title.classList = 'eon-title'
    title.innerHTML = eon['name_' + lang]
    eonDiv.appendChild(title)
  
    const time = document.createElement('div')
    time.classList = 'eon-time'
    time.innerHTML = eon['time_' + lang]
    eonDiv.appendChild(time)
  
    const summary = document.createElement('div')
    summary.classList = 'eon-summary summary-container collapsed'
    eonDiv.appendChild(summary)


    if (eon.imageUrl) {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');
        
        const img = document.createElement('img');
        img.src = eon.imageUrl;
        img.classList.add('summary-image');
        imgWrapper.appendChild(img);

        if (eon.credit) {
            // The "i" button
            const infoBtn = document.createElement('div');
            infoBtn.innerHTML = 'i';
            infoBtn.classList.add('credit-button');
            
            // The credit text element
            const creditLabel = document.createElement('div');
            creditLabel.classList.add('credit-text', 'hidden');
            creditLabel.innerText = eon.credit;

            infoBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the container's click
                creditLabel.classList.toggle('hidden');
            });

            imgWrapper.appendChild(infoBtn);
            imgWrapper.appendChild(creditLabel);
        }
        summary.appendChild(imgWrapper);
    }

    const textDiv = document.createElement('div')
    textDiv.classList.add('summary-text')
    textDiv.innerHTML = eon['summary_' + lang]
    summary.appendChild(textDiv)


    const eraContainer = document.createElement('div')
    eraContainer.classList = 'era-container'
    eraContainer.setAttribute('id', eon.key + 'Eras')
    eonDiv.appendChild(eraContainer)

    // Eras
    let i = 0;
    eon.eras.reverse().forEach((era) => {
      const eraDef = eras[era]

      const div = document.createElement('div')
      div.classList = 'era'
      div.style.backgroundColor = eraColors[i]
      i+= 1;
      div.style.height = String(eraDef.height) + '%'
      document.getElementById(eon.key + 'Eras').appendChild(div)
    
      const title = document.createElement('div')
      title.classList = 'era-title'
      if (eraDef.titleSize === 'small') {
        title.classList.add('era-title-small')
      } else if (eraDef.titleSize === 'medium') {
        title.classList.add('era-title-medium')
      }
      title.innerHTML = eraDef['name_' + lang]
      div.appendChild(title)
    
      const time = document.createElement('div')
      time.classList = 'era-time'
      if (eraDef.titleSize === 'small') {
        time.classList.add('era-time-small')
      } else if (eraDef.titleSize === 'medium') {
        time.classList.add('era-time-medium')
      }
      time.innerHTML = eraDef['time_' + lang]
      div.appendChild(time)
    
      const summary = document.createElement('div')
      summary.classList = 'era-summary summary-container collapsed'
      div.appendChild(summary)

      if (eraDef.imageUrl) {
          const imgWrapper = document.createElement('div');
          imgWrapper.classList.add('image-wrapper');
          
          const img = document.createElement('img');
          img.src = eraDef.imageUrl;
          img.classList.add('summary-image');
          imgWrapper.appendChild(img);

          if (eraDef.credit) {
              // The "i" button
              const infoBtn = document.createElement('div');
              infoBtn.innerHTML = 'i';
              infoBtn.classList.add('credit-button');
              
              // The credit text element
              const creditLabel = document.createElement('div');
              creditLabel.classList.add('credit-text', 'hidden');
              creditLabel.innerText = eraDef.credit;

              infoBtn.addEventListener('click', (e) => {
                  e.stopPropagation(); // Prevent triggering the container's click
                  creditLabel.classList.toggle('hidden');
              });

              imgWrapper.appendChild(infoBtn);
              imgWrapper.appendChild(creditLabel);
          }
          summary.appendChild(imgWrapper);
      }

      const textDiv = document.createElement('div')
      textDiv.classList.add('summary-text')
      textDiv.innerHTML = eraDef['summary_' + lang]
      summary.appendChild(textDiv)

      if (eraDef.periods.length > 0) {
        const periodContainer = document.createElement('div')
        periodContainer.classList = 'period-container'
        div.appendChild(periodContainer)

        // Periods
        let j = 0
        eraDef.periods.forEach((period) => {
          const periodDef = periods[period]

          const div = document.createElement('div')
          div.classList = 'period'
          div.style.backgroundColor = periodColors[j]
          j += 1;
          div.style.height = String(periodDef.height) + '%'
          periodContainer.appendChild(div)
        
          const title = document.createElement('div')
          title.classList = 'period-title'
          if (periodDef.titleSize === 'small') {
            title.classList.add('period-title-small')
          } else if (periodDef.titleSize === 'medium') {
            title.classList.add('period-title-medium')
          }
          title.innerHTML = periodDef['name_' + lang]
          div.appendChild(title)
        
          const time = document.createElement('div')
          time.classList = 'period-time'
          if (periodDef.timeSize === 'small') {
            time.classList.add('period-time-small')
          } else if (periodDef.timeSize === 'medium') {
            time.classList.add('period-time-medium')
          } 
          time.innerHTML = periodDef['time_' + lang]
          div.appendChild(time)
        
          const summary = document.createElement('div')
          summary.classList = 'period-summary summary-container collapsed'
          div.appendChild(summary)

          if (periodDef.imageUrl) {
              const imgWrapper = document.createElement('div');
              imgWrapper.classList.add('image-wrapper');
              
              const img = document.createElement('img');
              img.src = periodDef.imageUrl;
              img.classList.add('summary-image');
              imgWrapper.appendChild(img);

              if (periodDef.credit) {
                  // The "i" button
                  const infoBtn = document.createElement('div');
                  infoBtn.innerHTML = 'i';
                  infoBtn.classList.add('credit-button');
                  
                  // The credit text element
                  const creditLabel = document.createElement('div');
                  creditLabel.classList.add('credit-text', 'hidden');
                  creditLabel.innerText = periodDef.credit;

                  infoBtn.addEventListener('click', (e) => {
                      e.stopPropagation(); // Prevent triggering the container's click
                      creditLabel.classList.toggle('hidden');
                  });

                  imgWrapper.appendChild(infoBtn);
                  imgWrapper.appendChild(creditLabel);
              }
              summary.appendChild(imgWrapper);
          }

          const textDiv = document.createElement('div')
          textDiv.classList.add('summary-text')
          textDiv.innerHTML = periodDef['summary_' + lang]
          summary.appendChild(textDiv)
        })
      }
    })
  }

  // Lang switch button
  if (lang === 'en') {
    document.getElementById('langSwitchButton').innerHTML = 'Español'
  } else {
    document.getElementById('langSwitchButton').innerHTML = 'English'
  }
}

function expandEon(eon) {
  // Expand the given eon
  if (eon.classList.contains('eon-expanded')) {
    collapseEon(eon)
    return
  }

  for (const e of Array.from(document.getElementsByClassName('eon'))) {
    e.classList.add('eon-collapsed')
    e.classList.remove('eon-expanded')
    e.querySelector('.era-container').classList.remove('era-container-expanded')
  }
  eon.classList.remove('eon-collapsed')
  eon.classList.add('eon-expanded')
  Array.from(eon.querySelector('.era-container').children).forEach((el) => {
    el.classList.remove('era-collapsed')
    el.classList.remove('era-expanded')
  })

  eon.querySelector('.eon-summary').classList.remove('collapsed')
}

function collapseEon(eon) {
  // Collapse the given eon

  for (const e of Array.from(document.getElementsByClassName('eon'))) {
    e.classList.remove('eon-collapsed')
    e.classList.remove('eon-expanded')
  }
  Array.from(eon.querySelector('.era-container').children).forEach((el) => {
    el.classList.remove('era-collapsed')
    el.classList.remove('era-expanded')

    const periods = el.querySelector('.period-container')
    if (periods != null) {
      Array.from(periods.children).forEach((el2) => {
        el2.classList.remove('period-collapsed')
        el2.classList.remove('period-expanded')
      })
    }

  })
  eon.querySelector('.eon-summary').classList.add('collapsed')
  eon.querySelector('.era-container').classList.remove('era-container-expanded')
}

function expandEra(era) {
  // Expand the given era

  if (era.classList.contains('era-expanded')) {
    collapseEra(era)
    return
  }

  for (const e of Array.from(document.getElementsByClassName('era'))) {
    e.classList.add('era-collapsed')
    e.classList.remove('era-expanded')
  }
  era.classList.remove('era-collapsed')
  era.classList.add('era-expanded')
  era.closest('.eon').querySelector('.eon-summary').classList.add('collapsed')
  era.closest('.eon').querySelector('.era-container').classList.add('era-container-expanded')
  try {
    Array.from(era.querySelector('.period-container').children).forEach((el) => {
      el.classList.remove('period-collapsed')
      el.classList.remove('period-expanded')
    })
    era.querySelector('.period-container').classList.remove('period-container-expanded')
  } catch (e) {
    console.log('No periods to show')
  }
  era.querySelector('.era-summary').classList.remove('collapsed')
}

function collapseEra(era) {
  // Collapse the given era

  for (const e of Array.from(document.getElementsByClassName('era'))) {
    e.classList.remove('era-collapsed')
    e.classList.remove('era-expanded')
  }

  for (const el of era.querySelector('.period-container')?.children ?? []) {
     el.classList.remove('period-collapsed')
    el.classList.remove('period-expanded')
  }

  era.closest('.eon').querySelector('.eon-summary').classList.add('collapsed')
  era.closest('.era-container').classList.remove('era-container-expanded')
  era.closest('.eon').querySelector('.eon-summary').classList.remove('collapsed')
}

function expandPeriod(period) {
  // Expand the given period

  if (period.classList.contains('period-expanded')) {
    collapsePeriod(period)
    return
  }

  for (const e of Array.from(document.getElementsByClassName('period'))) {
    e.classList.add('period-collapsed')
    e.classList.remove('period-expanded')
  }
  period.classList.remove('period-collapsed')
  period.classList.add('period-expanded')
  period.closest('.era').querySelector('.era-summary').classList.add('collapsed')
  period.closest('.era').querySelector('.period-container').classList.add('period-container-expanded')
  period.querySelector('.period-summary').classList.remove('collapsed')
}

function collapsePeriod(period) {
  // Collapse the given period

  for (const e of Array.from(document.getElementsByClassName('period'))) {
    e.classList.remove('period-collapsed')
    e.classList.remove('period-expanded')
  }
  period.closest('.era').querySelector('.era-summary').classList.add('collapsed')
  period.closest('.period-container').classList.remove('period-container-expanded')
  period.closest('.era').querySelector('.era-summary').classList.remove('collapsed')
}
// Exhibitera stuff
function loadDefinition (definition) {
  // A function to configure content based on the provided configuration.
}

function parseUpdate (update) {
  // A function to respond to commands from Hub.
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    // First, collapse to Eon view
    for (const e of Array.from(document.getElementsByClassName('eon'))) {
      e.classList.remove('eon-collapsed')
      e.classList.remove('eon-expanded')
    }
    // Then, make sure we are English
    setTimeout(() => {localize('en')}, 1000)
  }, 30000)
}

document.getElementById('langSwitchButton').addEventListener('click', (ev) => {
  if (ev.target.innerHTML === 'English') {
    localize('en')
  } else {
    localize('es')
  }
})

// Add event listeners

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('credit-button')) {
    document.querySelectorAll('.credit-text').forEach(el => el.classList.add('hidden'));
  }
  resetInactivityTimer()
  if (event.target.classList.contains('eon-time') || 
      event.target.classList.contains('eon-title') ||
      event.target.classList.contains('eon-summary') || 
      event.target.classList.contains('eon')) {
        expandEon(event.target.closest( '.eon' ))
  } else if (event.target.classList.contains('era-time') || 
      event.target.classList.contains('era-title') ||
      event.target.classList.contains('era-summary') ||
      event.target.classList.contains('era')) {
        expandEra(event.target.closest( '.era' ))
  } else if (event.target.classList.contains('period-time') || 
      event.target.classList.contains('period-title') ||
      event.target.classList.contains('period-summary') ||
      event.target.classList.contains('period')) {
        expandPeriod(event.target.closest( '.period' ))
  }
})

localize('en')
let inactivityTimer = null
resetInactivityTimer()