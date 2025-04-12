document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '0';
    });
});