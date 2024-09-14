function filterEvents(category) {
    const cards = document.querySelectorAll('.col-md-4');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showMoreInfo(title) {
    const modalTitle = document.getElementById('eventModalLabel');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = title;
    modalDescription.textContent = 'Здесь будет подробная информация о событии "' + title + '".'; // Placeholder content

    // Show the modal using Bootstrap's modal function
    $('#eventModal').modal('show');
}
