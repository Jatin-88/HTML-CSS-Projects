const stars = document.querySelectorAll('.star');

const emojis = [
    ['😫', '☺️', '☺️', '☺️', '☺️'],
    ['😢', '😢', '☺️', '☺️', '☺️'],
    ['🤨', '🤨', '🤨', '☺️', '☺️'],
    ['😜', '😜', '😜', '😜', '☺️'],
    ['😁', '😁', '😁', '😁', '😁']
];

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            s.textContent = emojis[index][i];
           
        });
    });
});
