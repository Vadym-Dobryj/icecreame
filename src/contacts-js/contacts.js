const accentButton = document.getElementById('accent-btn');
const dropdownMenu = document.getElementById('myDropdown');
accentButton.onclick = function () {
  dropdownMenu.classList.toggle('show');
};

const myModal = document.getElementById('myModal');
const myButtun = document.getElementById('cityMaps');
const closeChicago = document.getElementById('closeChicago');
myButtun.onclick = function () {
  myModal.style.display = 'block';
};

closeChicago.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

const myModall = document.getElementById('myModall');
const myButtunn = document.getElementById('cityMapss');
const closeLosAngeles = document.getElementById('closeLosAngeles');
myButtunn.onclick = function () {
  myModall.style.display = 'block';
};

closeLosAngeles.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

const myModalll = document.getElementById('myModalll');
const myButtunnn = document.getElementById('cityMapsss');
const closeNewYork = document.getElementById('closeNewYork');
myButtunnn.onclick = function () {
  myModalll.style.display = 'block';
};

closeNewYork.onclick = function (event) {
  event.stopPropagation();
  myModal.style.display = 'none';
  dropdownMenu.classList.toggle('show');
};

const frMyModaдl = document.getElementById('frMyModaдl');
const baseBtn = document.getElementById('baseBtn');
const closeFr = document.getElementById('closeFr');
baseBtn.onclick = function () {
  frMyModaдl.style.display = 'block';
};

closeFr.onclick = function (event) {
  event.stopPropagation();
  frMyModaдl.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
  if (event.target == myModall) {
    myModall.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
  if (event.target == myModalll) {
    myModalll.style.display = 'none';
    dropdownMenu.classList.toggle('show');
  }
  if (event.target == frMyModaдl) {
    frMyModaдl.style.display = 'none';
  }
};

const checkLabel = document.getElementById('checkLabel')
const border = document.getElementById('border')
checkLabel.onclick = function() {
  border.style.backgroundColor = '#d41342'
  border.style.borderColor = '#d41342'
}
