// Get references to DOM elements
const pageView = document.getElementById('view-headtitle');
const priceMoYear = document.getElementById('price-monyear');
const inputSlide = document.getElementById('slider');
const checkboxSwitch = document.getElementById('toggle-switch');
const monSpan = document.getElementById('mon-mon');
const yearSpan = document.getElementById('year-year');


// Update slider background color when input value changes
inputSlide.oninput = () => {
    const value = (inputSlide.value - inputSlide.min)/(inputSlide.max - inputSlide.min)*100;
    inputSlide.style.background = 'linear-gradient(to right, #A4F3EB 0%, ' + value + '%, #fff ' + value + '%, white 100%)';
}



// Update page view and price display when input value changes
inputSlide.addEventListener('input', () => {
  switch (inputSlide.value) {

    case '1':
      if (!checkboxSwitch.checked) {
        pageView.innerHTML = '10K PAGEVIEWS';
        priceMoYear.innerHTML = '$8.00';
        monSpan.style.display = 'block';
        yearSpan.style.display = 'none';
      } else {
        pageView.innerHTML = '10K PAGEVIEWS';
        priceMoYear.innerHTML = `$${8 * 12 * 0.75}.00`;
        monSpan.style.display = 'none';
        yearSpan.style.display = 'block';
      }
      break;

    case '2':
      if (!checkboxSwitch.checked) {
        pageView.innerHTML = '50K PAGEVIEWS';
        priceMoYear.innerHTML = '$12.00';
        monSpan.style.display = 'block';
        yearSpan.style.display = 'none';
      } else {
        pageView.innerHTML = '50K PAGEVIEWS';
        priceMoYear.innerHTML = `$${12 * 12 * 0.75}.00`;
        monSpan.style.display = 'none';
        yearSpan.style.display = 'block';
      }
      break;

    case '3':
      if (!checkboxSwitch.checked) {
        pageView.innerHTML = '100K PAGEVIEWS';
        priceMoYear.innerHTML = '$16.00';
        monSpan.style.display = 'block';
        yearSpan.style.display = 'none';
      } else {
        pageView.innerHTML = '100K PAGEVIEWS';
        priceMoYear.innerHTML = `$${16 * 12 * 0.75}.00`;
        monSpan.style.display = 'none';
        yearSpan.style.display = 'block';
      }
      break;

    case '4':
      if (!checkboxSwitch.checked) {
        pageView.innerHTML = '500K PAGEVIEWS';
        priceMoYear.innerHTML = '$24.00';
        monSpan.style.display = 'block';
        yearSpan.style.display = 'none';
      } else {
        pageView.innerHTML = '500K PAGEVIEWS';
        priceMoYear.innerHTML = `$${24 * 12 * 0.75}.00`;
        monSpan.style.display = 'none';
        yearSpan.style.display = 'block';
      }
      break;

    case '5':
      if (!checkboxSwitch.checked) {
        pageView.innerHTML = '1M PAGEVIEWS';
        priceMoYear.innerHTML = '$36.00';
        monSpan.style.display = 'block';
        yearSpan.style.display = 'none';
      } else {
        pageView.innerHTML = '1M PAGEVIEWS';
        priceMoYear.innerHTML = `$${36 * 12 * 0.75}.00`;
        monSpan.style.display = 'none';
        yearSpan.style.display = 'block';
      }
      break;
    default:
      break;
  }
});


