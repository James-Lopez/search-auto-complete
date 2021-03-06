const $search = document.querySelector('.search')
const $dropDown = document.querySelector('#dropDown')

async function elements() {
  const response = await fetch('http://localhost:1337/elements')
  return await response.json()
}

const periodicTable = []
elements()
  .then(data =>
    data.forEach(element => {
      periodicTable.push(element)
    })
  )
  .catch(error => console.log(error))

const renderResults = string => {
  if (string === '') {
    $dropDown.innerHTML = ''
  } else {
    $dropDown.innerHTML = ''
    periodicTable.forEach(element => {
      const name = element.name.toLowerCase()
      const symbol = element.symbol.toLowerCase()
      if (
        string === name.substr(0, string.length) ||
        string === symbol.substr(0, string.length)
      ) {
        const $results = document.createElement('div')
        $results.classList.add('suggestions')
        $results.textContent = element.name + ', ' + element.symbol
        $dropDown.appendChild($results)
      }
    })
  }
}

let current = document.querySelector('input').value

$search.addEventListener('keyup', event => {
  let current = document.querySelector('input').value
  renderResults(current)
})

const selected = string => {}
