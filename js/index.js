const eons = {
  archean: {
  },
  hadean: {
  },
  phanerozoic: {
  },
  proterozoic: {
  }
}

function expandEon(eon) {
  // Expand the given eon

  for (const e of Array.from(document.getElementsByClassName('eon'))) {
    e.classList.add('eon-collapsed')
    e.classList.remove('eon-expanded')
  }
  eon.classList.remove('eon-collapsed')
  eon.classList.add('eon-expanded')
}

for (const e of Array.from(document.getElementsByClassName('eon'))) {
  e.addEventListener('click', (event) => {
    expandEon(event.target.closest( '.eon' ))
  })
}