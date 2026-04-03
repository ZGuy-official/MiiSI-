document.querySelectorAll('[data-accordion] details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('[data-accordion] details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

document.querySelectorAll('.news-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('aria-controls');
    if (!targetId) return;

    const extraCopy = document.getElementById(targetId);
    if (!extraCopy) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    button.textContent = isExpanded ? 'Read More' : 'Show Less';
    extraCopy.hidden = isExpanded;
  });
});
