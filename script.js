const checkboxes = document.querySelectorAll('.checkbox-label');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('mouseleave', function() {
    const input = this.previousElementSibling;
    if (!input.checked) {
      this.querySelector('.vector-asset').style.opacity = '0';
    }
  });
});
