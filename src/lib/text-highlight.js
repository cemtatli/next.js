const plugin = require('tailwindcss/plugin')

function generateTextHighlightUtilities(color, colorValue, defaultBrush = '9') {
  const utilities = {}
  const encodedValue = encodeURIComponent(colorValue.replace('#', ''))

  utilities[`.text-highlight-${color}`] = {
    background: `url(//s2.svgbox.net/pen-brushes.svg?ic=brush-${defaultBrush}&color=${encodedValue})`
  }

  for (let brush = 1; brush <= 9; brush++) {
    utilities[`.text-highlight-${color}-brush-${brush}`] = {
      background: `url(//s2.svgbox.net/pen-brushes.svg?ic=brush-${brush}&color=${encodedValue})`
    }
  }

  utilities[`.text-highlight-solid-${color}`] = {
    background: `linear-gradient(180deg, transparent 80%, ${colorValue} 80%)`,
    backgroundPosition: '0 -0.1em'
  }

  return utilities
}

module.exports = plugin(({ addUtilities, theme }) => {
  const colors = theme('colors')
  let textHighlightUtilities = {}
  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const colorValue = colors[color][500]
      if (colorValue) {
        textHighlightUtilities = {
          ...textHighlightUtilities,
          ...generateTextHighlightUtilities(color, colorValue)
        }

        for (let subColor = 100; subColor <= 900; subColor += 100) {
          const subColorValue = colors[color][subColor]
          if (subColorValue) {
            textHighlightUtilities = {
              ...textHighlightUtilities,
              ...generateTextHighlightUtilities(`${color}-${subColor}`, subColorValue)
            }
          }
        }
      }
    }
  }

  addUtilities(textHighlightUtilities, ['responsive'])
})
