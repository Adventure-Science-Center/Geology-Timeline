import * as exCommon from './exhibitera_app_common.js'

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
    time_en: '66 Mya – Today'
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
    color: 'RGBA(151,14,83,0.6)',
    name_en: 'Mesoarchean Era',
    periods: [],
    summary_en: 'The oldest evidence ofplate tectonics, an important geologic process, dates to the Mesoarchean.',
    time_en: '3200 – 2800 Mya'
  },
  mesoproterozoic: {
    height: 30.6,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesoproterozoic Era',
    periods: [],
    summary_en: "The Mesoproterozoic is the first era for which a comprehensive geologic record has been found. The continents we know today began to emerge, although their shapes were very different.",
    time_en: '1600 – 1000 Mya'
  },
  mesozoic: {
    height: 34.5,
    color: 'RGBA(151,14,83,0.75)',
    name_en: 'Mesozoic Era',
    periods: [],
    summary_en: "The Mesozoic was dominated by the evolution of the dinosaurs, which lasted until a major extinction event 66 Mya.",
    time_en: '252 – 66 Mya'
  },
  neoarchean: {
    height: 19.6,
    color: 'RGBA(151,14,83,0.4)',
    name_en: 'Neoarchean Era',
    periods: [],
    summary_en: "The Neoarchean was marked by the growing complexity of living organisms and the evolution of photosynthesis.",
    time_en: '2800 – 2500 Mya'
  },
  neoproterozoic: {
    height: 23.5,
    color: 'RGBA(151,14,83,0.5)',
    name_en: 'Neoproterozoic Era',
    periods: [],
    summary_en: 'During the Neoproterozoic, Earth became covered in glaciers and the first multi-cellular fossils are preserved.',
    time_en: '1000 – 539 Mya'
  },
  paleoarchean: {
    height: 26.1,  
    color: 'RGBA(151,14,83,0.8)',
    name_en: 'Paleoarchean Era',
    periods: [],
    summary_en: "The oldest confirmed evidence for life on Earth dates from the Paleoarchean in the form of fossilized bacterial mats.",
    time_en: '3600 – 3200 Mya'
  },
  paleoproterozoic: {
    height: 45.9,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleoproterozoic Era',
    periods: [],
    summary_en: "The Paleoproterozoic saw the formation of the first continents. The rise of oxygen-producing cyanobacteria lead to a dramatic increase of oxygen in the atmosphere, paving the way for life as we know it.",
    time_en: '2500 – 1600 Mya'
  },
  paleozoic: {
    height: 53.3,
    color: 'RGBA(151,14,83,1)',
    name_en: 'Paleozoic Era',
    periods: [],
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
    time_en: '2.6 Mya – Today'
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
  era.querySelector('.era-summary').classList.remove('collapsed')
}

function collapseEra(era) {
  // Collapse the given era

  for (const e of Array.from(document.getElementsByClassName('era'))) {
    e.classList.remove('era-collapsed')
    e.classList.remove('era-expanded')
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

// Build content
for (const key of Object.keys(eons)) {
  const eon = eons[key]

  // Eras
  eon.eras.reverse().forEach((era) => {
    const eraDef = eras[era]

    const div = document.createElement('div')
    div.classList = 'era'
    div.style.backgroundColor = eraDef.color
    div.style.height = String(eraDef.height) + '%'
    document.getElementById(eon.key + 'Eras').appendChild(div)
  
    const title = document.createElement('div')
    title.classList = 'era-title'
    title.innerHTML = eraDef.name_en
    div.appendChild(title)
  
    const time = document.createElement('div')
    time.classList = 'era-time'
    time.innerHTML = eraDef.time_en
    div.appendChild(time)
  
    const summary = document.createElement('div')
    summary.classList = 'era-summary collapsed'
    summary.innerHTML = eraDef.summary_en
    div.appendChild(summary)

    const periodContainer = document.createElement('div')
    periodContainer.classList = 'period-container'
    div.appendChild(periodContainer)

    // Periods
    eraDef.periods.forEach((period) => {
      const periodDef = periods[period]

      const div = document.createElement('div')
      div.classList = 'period'
      div.style.backgroundColor = periodDef.color
      div.style.height = String(periodDef.height) + '%'
      periodContainer.appendChild(div)
    
      const title = document.createElement('div')
      title.classList = 'period-title'
      if (period === 'quaternary') {
        title.style.fontSize = '1.5vh'
      }
      title.innerHTML = periodDef.name_en
      div.appendChild(title)
    
      const time = document.createElement('div')
      time.classList = 'period-time'
      if (period === 'quaternary') {
        time.style.fontSize = '1vh'
      }
      time.innerHTML = periodDef.time_en
      div.appendChild(time)
    
      const summary = document.createElement('div')
      summary.classList = 'period-summary collapsed'
      summary.innerHTML = periodDef.summary_en
      div.appendChild(summary)
    })
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

// exCommon.configureApp({
//   name: 'other',
//   loadDefinition: loadDefinition,
//   parseUpdate: parseUpdate
//   })