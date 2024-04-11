let interval

const element = document.querySelector('.scramble')
const originalText = element.innerText

const randomInt = max => Math.floor(Math.random() * max)
const randomFromArray = array => array[randomInt(array.length)]

const scrambleText = text => {
  const chars = '*?><[]&@#)(.%$-_:/;?!'.split('')
  return text
    .split('')
    .map(x => randomInt(3) > 1 ? randomFromArray(chars) : x)
    .join('')
}
  
element.addEventListener('mouseover', () => {
  interval = setInterval(() =>
    element.innerText = scrambleText(originalText)
  , 60)
})
  
element.addEventListener('mouseout', () => {
  clearInterval(interval)
  element.innerText = originalText
})
