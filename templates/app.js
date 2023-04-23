// Get all input fields
const inputs = document.querySelectorAll('input[type="text"]');

// Add event listener to each input field to only accept numeric values
inputs.forEach(input => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9.]/g, '');
  });
});

// Get all labels
const labels = document.querySelectorAll('label');

// Add 'for' attribute to each label to make them clickable
inputs.forEach((input, i) => {
  labels[i].setAttribute('for', input.getAttribute('name'));
});

// Style input fields
inputs.forEach(input => {
  input.style.border = '1px solid #ccc';
});

// Style Predict button
const predictBtn = document.querySelector('button[type="submit"]');
predictBtn.style.backgroundColor = '#3f51b5';
predictBtn.style.fontSize = '1.2em';
predictBtn.style.color = '#eee';
predictBtn.style.marginTop = '2em';
