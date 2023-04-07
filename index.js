function chooseGame() {
  setTimeout(function() {
    const logo = document.querySelector('.container')
    const wellcomeText = document.querySelector('.wellcome')
    const btnNext = document.querySelector('.btn-next')

    logo.classList.toggle('hidden');
    wellcomeText.classList.toggle('hidden');
    btnNext.classList.toggle('hidden');

    const tictactoe = document.querySelector('.tictactoe')
    const forca = document.querySelector('.forca')
    const memory = document.querySelector('.memory')

    tictactoe.classList.toggle('show');
    forca.classList.toggle('show');
    memory.classList.toggle('show'); 
  }, 550);
}

function tictactoe() {
  window.location.href = "./tictactoe/index.html";
}

function forca() {
  window.location.href = "./forca/index.html";
}

function memory() {
  window.location.href = "./memory/index.html";
}

