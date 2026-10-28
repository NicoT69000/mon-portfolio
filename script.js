document.querySelectorAll('.toggle-details').forEach(function(button) {
    button.addEventListener('click', function() {
        var details = button.nextElementSibling;
        var isHidden = details.hasAttribute('hidden');

        if (isHidden) {
            details.removeAttribute('hidden');
            button.textContent = 'Masquer les détails';
            button.setAttribute('aria-expanded', 'true');
        } else {
            details.setAttribute('hidden', '');
            button.textContent = 'Voir les détails';
            button.setAttribute('aria-expanded', 'false');
        }
    });
});