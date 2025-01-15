const dots = document.querySelectorAll('.dot');
const pages = ['slider.html', 'slider2.html', 'slider3.html'];

let currentIndex = 0;

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentIndex = index;
    localStorage.setItem('currentPage', currentIndex);
    window.location.href = pages[currentIndex];
  });
});


function updateActiveElements() {
  tabs.forEach((tab, index) => {
    tab.className = index === currentIndex ? 'tab active-tab' : 'tab inactive-tab';
  });

  dots.forEach((dot, index) => {
    dot.className = index === currentIndex ? 'dot active' : 'dot inactive';
  });
}

function nextPage() {
  currentIndex = (currentIndex + 1) % pages.length;
  localStorage.setItem('currentPage', currentIndex); 
  window.location.href = pages[currentIndex];
}

function previousPage() {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length; 
  localStorage.setItem('currentPage', currentIndex); 
  window.location.href = pages[currentIndex]; 
}

function dotClick(index) {
  currentIndex = index; 
  localStorage.setItem('currentPage', currentIndex);
  window.location.href = pages[currentIndex]; 
}

window.onload = () => {
  const savedIndex = localStorage.getItem('currentPage');
  currentIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
  updateActiveElements();
};


updateActiveElements();
