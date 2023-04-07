const cards = document.querySelectorAll('.tile')
const memoryItems = document.querySelectorAll('.memory-item')
const arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
const arrCompara = []

const embaralharArray = function(embaralhar) {
  return embaralhar.sort(() => Math.random() - 0.5);
}

function startGame() {
  const clonedArray = [...arr];
  embaralharArray(clonedArray)
  
  memoryItems.forEach(function (params) {
    params.textContent = clonedArray.shift()
  })
}
const arrExcluir = []
const spanOpacity = []

cards.forEach(function(element, index){
  element.addEventListener('click', function(){
    const span = element.querySelector('.memory-item')
    span.style.opacity = 1
    spanOpacity.push(span)
    arrExcluir.push(element)
    arrCompara.push(element.textContent)
    element.style.backgroundColor = 'pink';
    element.style.pointerEvents = 'none';

    if (arrCompara.length === 2) {
      if (arrCompara[0] === arrCompara[1]) {
        arrCompara.length = 0
        arrExcluir.length = 0
        spanOpacity.length = 0
      }else {
        console.log(arrExcluir)

        setTimeout(function() {
          arrExcluir[0].style.pointerEvents = 'auto';
          arrExcluir[1].style.pointerEvents = 'auto';
          arrExcluir[0].style.backgroundColor = '#eee';
          arrExcluir[1].style.backgroundColor = '#eee';
          spanOpacity[0].style.opacity = 0
          spanOpacity[1].style.opacity = 0
          arrCompara.length = 0
          arrExcluir.length = 0
          spanOpacity.length = 0
          // código a ser executado após 1 segundo
        }, 800);
      }      
    }
  })
})



