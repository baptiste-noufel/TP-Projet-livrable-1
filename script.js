document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-section');

            // Désactiver toutes les sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Désactiver tous les boutons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Activer la section cible
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Activer le bouton cliqué
            button.classList.add('active');
        });
    });
});
