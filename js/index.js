import * as exCommon from './exhibitera_app_common.js'

const eraColors = ['#983567E6', '#8E2158E6',  '#830B47E6', '#700A3DE6']
const periodColors = ['#F78B2CE6', '#F28321E6', '#EC7A16E6', '#E6720BE6', '#E36E06E6', '#E06900E6']

const eons = {
  archean: {
    eras: ['eoarchean', 'paleoarchean', 'mesoarchean', 'neoarchean'],
    key: 'archean',
    name_en: 'Archean'
  },
  hadean: {
    eras: [],
    key: 'hadean',
    name_en: 'Hadean'
  },
  phanerozoic: {
    eras: ['paleozoic', 'mesozoic', 'cenozoic'],
    key: 'phanerozoic',
    name_en: 'Phanerozoic'
  },
  proterozoic: {
    eras: ['paleoproterozoic', 'mesoproterozoic', 'neoproterozoic'],
    key: 'proterozoic',
    name_en: 'Proterozoic'
  }
}

const eras = {
  cenozoic: {
    height: 12.2,
    color: 'RGBA(151,14,83,0.5)',
    name_en: 'Cenozoic Era',
    periods: ['quaternary', 'neogene', 'paleogene'],
    summary_en: "The Cenozoic is the current era of Earth's history. It is marked by the flourishing of mammals and birds and the emergence of humans.",
    time_en: '66 Mya – Today',
    titleSize: 'medium',
    timeSize: 'medium'
  },
  eoarchean: {
    height: 28.2,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Eoarchean Era',
    periods: [],
    summary_en: "At the beginning of the Eoarchean, Earth endured a massive bombardment of asteroids from space. By the end of this era, the first life had arisen.",
    time_en: '4031 – 3600 Mya'
  },
  mesoarchean: {
    height: 26.1,
    color: 'RGBA(151,14,83,0.9)',
    name_en: 'Mesoarchean Era',
    periods: [],
    summary_en: 'The oldest evidence ofplate tectonics, an important geologic process, dates to the Mesoarchean.',
    time_en: '3200 – 2800 Mya'
  },
  mesoproterozoic: {
    height: 30.6,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesoproterozoic Era',
    periods: ['stenian', 'ectasian', 'calymmian'],
    summary_en: "The Mesoproterozoic is the first era for which a comprehensive geologic record has been found. The continents we know today began to emerge, although their shapes were very different.",
    time_en: '1600 – 1000 Mya'
  },
  mesozoic: {
    height: 34.5,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesozoic Era',
    periods: ['cretaceous', 'jurassic', 'triassic', ],
    summary_en: "The Mesozoic was dominated by the evolution of the dinosaurs, which lasted until a major extinction event 66 Mya.",
    time_en: '252 – 66 Mya'
  },
  neoarchean: {
    height: 19.6,
    color: 'RGBA(151,14,83,0.85)',
    name_en: 'Neoarchean Era',
    periods: [],
    summary_en: "The Neoarchean was marked by the growing complexity of living organisms and the evolution of photosynthesis.",
    time_en: '2800 – 2500 Mya'
  },
  neoproterozoic: {
    height: 23.5,
    color: 'RGBA(151,14,83,0.5)',
    name_en: 'Neoproterozoic Era',
    periods: ['ediacaran', 'cryogenian', 'tonian'],
    summary_en: 'During the Neoproterozoic, Earth became covered in glaciers and the first multi-cellular fossils are preserved.',
    time_en: '1000 – 539 Mya'
  },
  paleoarchean: {
    height: 26.1,  
    color: 'RGBA(151,14,83,0.95)',
    name_en: 'Paleoarchean Era',
    periods: [],
    summary_en: "The oldest confirmed evidence for life on Earth dates from the Paleoarchean in the form of fossilized bacterial mats.",
    time_en: '3600 – 3200 Mya'
  },
  paleoproterozoic: {
    height: 45.9,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleoproterozoic Era',
    periods: ['statherian', 'orosirian', 'rhyacian', 'siderian'],
    summary_en: "The Paleoproterozoic saw the formation of the first continents. The rise of oxygen-producing cyanobacteria lead to a dramatic increase of oxygen in the atmosphere, paving the way for life as we know it.",
    time_en: '2500 – 1600 Mya'
  },
  paleozoic: {
    height: 53.3,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleozoic Era',
    periods: ['permian', 'carboniferous', 'devonian', 'silurian', 'ordovician', 'cambrian'],
    summary_en: "The Paleozoic saw a massive increase in the variety and complexity of life on Earth.",
    time_en: '539 – 252 Mya'
  },
}

const periods = {
  quaternary: {
    height: 3.9,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Quaternary Period',
    summary_en: "The Quaternary is Earth's current geologic period, marked by periodic ice ages. It's most notable for the emergence of humans.",
    time_en: '2.6 Mya – Today',
    timeSize: 'small',
    titleSize: 'small'
  },
  neogene: {
    height: 30.4,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Neogene Period',
    summary_en: "During the Neogene, North and South America became connected, and birds and mammals continued to evolve.",
    time_en: '23 – 2.6 Mya'
  },
  paleogene: {
    height: 65.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Paleogene Period',
    summary_en: "After the extinction of the dinosaurs, birds and mammals began to increase in numbers and diversity during teh Paleogene.",
    time_en: '66 – 23 Mya'
  },
  cretaceous: {
    height: 42.5,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Cretaceous Period',
    summary_en: "Earth's climate was warm during the Cretaceous, leading to large oceans and many seas. Continued to dominate the planet's surface.",
    time_en: '145 – 66 Mya'
  },
  jurassic: {
    height: 30.3,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Jurassic Period',
    summary_en: "During the Jurassic, dinosaurs became the dominent land animals and the supercontinent of Pangaea began to split into two.",
    time_en: '201 – 145 Mya'
  },
  triassic: {
    height: 27.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Triassic Period',
    summary_en: "The Triassic began and end with dramatic worldwide extintion events. In between, reptiles dominated on land, including the emergence of the first dinosaurs.",
    time_en: '252 – 201 Mya'
  },
  permian: {
    height: 16.4,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Permian Period',
    summary_en: "Changing climate conditions during the Permian led to enormous deserts in the interior of the Pangaea supercontinent. The end of the Permian is marked by the largest mass extinction in Earth's history.",
    time_en: '299 – 252 Mya',
    timeSize: 'medium',
    titleSize: 'medium'
  },
  carboniferous: {
    height: 20.9,
    color: 'RGBA(242,114,0,0.6)',
    name_en: 'Carboniferous Period',
    summary_en: "During the Carbonifercous, the supercontinent of Pangaea formed. Amphibians came to dominate the new landmass.",
    time_en: '359 – 299 Mya'
  },
  devonian: {
    height: 21,
    color: 'RGBA(242,114,0,0.7)',
    name_en: 'Devonian Period',
    summary_en: "During the Devonian, fish became a dominant form of life in the oceans. On land, the variety of species increased substantially.",
    time_en: '419 – 359 Mya'
  },
  silurian: {
    height: 8.6,
    color: 'RGBA(242,114,0,0.8)',
    name_en: 'Silurian Period',
    summary_en: "During the Silurian, animals from the oceans began to spread onto land and land-based plant life evolved significantly.",
    time_en: '444 – 419 Mya',
    timeSize: 'small',
    titleSize: 'small'
  },
  ordovician: {
    height: 14.5,
    color: 'RGBA(242,114,0,0.9)',
    name_en: 'Ordovician Period',
    summary_en: "The first plant life on land arose during the Ordovician. In the seas, invertibrates such as mollusks were the dominant species.",
    time_en: '485 – 444 Mya',
    timeSize: 'small',
    titleSize: 'small'
  },
  cambrian: {
    height: 18.6,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Cambrian Period',
    summary_en: 'During the "Cambrian explosion", the amount and diversity of complex life on Earth increased dramatically, particularly in the oceans.',
    time_en: '539 – 485 Mya',
    timeSize: 'medium',
    titleSize: 'medium'
  },
  ediacaran: {
    height: 20.9,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Ediacaran Period',
    summary_en: "The Ediacaran saw several periods of widespread glaciers, as well as the emergence of newly-complex forms of multicellular life.",
    time_en: '635 – 539 Mya'
  },
  cryogenian: {
    height: 18.4,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Cryogenian Period',
    summary_en: 'Scientists have nicknamed the Cryogenian "snowball Earth" due to its worldwide glaciers.',
    time_en: '720 – 635 Mya'
  },
  tonian: {
    height: 60.7,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Tonian Period',
    summary_en: 'The first animals (as opposed to bacteria or fungi) appeared during the Tonian, which also saw the breakup of the Rodinia supercontinent.',
    time_en: '1000 – 720 Mya'
  },
  stenian: {
    height: 33.3,
    color: 'RGBA(242,114,0,0.5)',
    name_en: 'Stenian Period',
    summary_en: "During the Stenian, the supercontinent of Rodinia formed.",
    time_en: '1200 – 1000 Mya'
  },
  ectasian: {
    height: 33.3,
    color: 'RGBA(242,114,0,0.75)',
    name_en: 'Ectasian Period',
    summary_en: "Little is known about this period, but fossilized evidence of a species of red algae shows the first evidence of modern reproduction in any life.",
    time_en: '1400 – 1200 Mya'
  },
  calymmian: {
    height: 33.3,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Calymmian Period',
    summary_en: "During the Calymmian, the supercontinent of Columbia began to drift apart.",
    time_en: '1600 – 1400 Mya'
  },
  statherian: {
    height: 22.2,
    color: 'RGBA(242,114,0,0.4)',
    name_en: 'Statherian Period',
    summary_en: "Little is known about the Statherian Period.",
    time_en: '1800 – 1600 Mya'
  },
  orosirian: {
    height: 27.8,
    color: 'RGBA(242,114,0,0.6)',
    name_en: 'Orosirian Period',
    summary_en: "During the Orosirian, the supercontinent of Columbia formed and Earth suffered two of the largest asteroid impacts since the early days of the solar system.",
    time_en: '2050 – 1800 Mya'
  },
  rhyacian: {
    height: 27.8,
    color: 'RGBA(242,114,0,0.8)',
    name_en: 'Rhyacian Period',
    summary_en: "During the Rhyacian, Earth was covered by glaciers for around 100 million years. The first life large enough to be visible to the unaided eye evolved during this period.",
    time_en: '2300 – 2050 Mya'
  },
  siderian: {
    height: 22.2,
    color: 'RGBA(242,114,0,1)',
    name_en: 'Siderian Period',
    summary_en: 'During the Siderian, the "Great Oxygenation Event" occured, in which cyanobacteria began producing oxygen through photosynthesis. Over the next 500 million years, the amount of oxygen in Earth\'s atmosphere would increase dramatically.',
    time_en: '2500 – 2300 Mya'
  },
  
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

    Array.from(el.querySelector('.period-container').children).forEach((el2) => {
      el2.classList.remove('period-collapsed')
      el2.classList.remove('period-expanded')
    })
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

  Array.from(era.querySelector('.period-container').children).forEach((el) => {
    el.classList.remove('period-collapsed')
    el.classList.remove('period-expanded')
  })

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

// Build content
for (const key of Object.keys(eons)) {
  const eon = eons[key]

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
    title.innerHTML = eraDef.name_en
    div.appendChild(title)
  
    const time = document.createElement('div')
    time.classList = 'era-time'
    if (eraDef.titleSize === 'small') {
      time.classList.add('era-time-small')
    } else if (eraDef.titleSize === 'medium') {
      time.classList.add('era-time-medium')
    }
    time.innerHTML = eraDef.time_en
    div.appendChild(time)
  
    const summary = document.createElement('div')
    summary.classList = 'era-summary collapsed'
    summary.innerHTML = eraDef.summary_en
    div.appendChild(summary)

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
        title.innerHTML = periodDef.name_en
        div.appendChild(title)
      
        const time = document.createElement('div')
        time.classList = 'period-time'
        if (periodDef.timeSize === 'small') {
          time.classList.add('period-time-small')
        } else if (periodDef.timeSize === 'medium') {
          time.classList.add('period-time-medium')
        } 
        time.innerHTML = periodDef.time_en
        div.appendChild(time)
      
        const summary = document.createElement('div')
        summary.classList = 'period-summary collapsed'
        summary.innerHTML = periodDef.summary_en
        div.appendChild(summary)
      })
    }
  })
}

// Add event listeners

document.addEventListener('click', (event) => {
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

exCommon.configureApp({
  name: 'other',
  loadDefinition: loadDefinition,
  parseUpdate: parseUpdate
  })