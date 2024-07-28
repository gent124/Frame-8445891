document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checkbox-input');
  const allPagesCheckbox = document.getElementById('checkbox-all');

  const updateCheckboxImage = (checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    const img = label.querySelector('img');
    if (checkbox.checked) {
      img.src = 'assets/svg/checkbox-click.svg';
    } else {
      img.src = 'assets/svg/checkbox-default.svg';
    }
  };

  checkboxes.forEach((checkbox) => {
    updateCheckboxImage(checkbox);

    checkbox.addEventListener('change', () => {
      updateCheckboxImage(checkbox);
    });

    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    const img = label.querySelector('img');

    label.addEventListener('mouseover', () => {
      if (checkbox.checked) {
        img.src = 'assets/svg/checkbox-hover.svg';
      } else {
        img.src = 'assets/svg/checkbox-unchecked-hover.svg';
      }
    });

    label.addEventListener('mouseout', () => {
      updateCheckboxImage(checkbox);
    });

    label.addEventListener('mousedown', () => {
      if (checkbox.checked) {
        img.src = 'assets/svg/checkbox-pressed.svg';
      } else {
        img.src = 'assets/svg/checkbox-unchecked-onclick.svg';
      }
    });

    label.addEventListener('mouseup', () => {
      if (checkbox.checked) {
        img.src = 'assets/svg/checkbox-unchecked-hover.svg';
      } else {
        img.src = 'assets/svg/checkbox-hover.svg';
      }
    });
  });

  allPagesCheckbox.addEventListener('change', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = allPagesCheckbox.checked;
      updateCheckboxImage(checkbox);
    });
  });
});
