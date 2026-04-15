let movies = [
    {
        title: "Inception",
        image: "images/inception.jpg",
        rating: "⭐ 9/10",
        desc: "فيلم خيال علمي يتناول فكرة الدخول إلى الأحلام وزراعة الأفكار داخل عقل الإنسان بطريقة ذكية ومثيرة."
    },
    {
        title: "Interstellar",
        image: "images/interstellar.jpg",
        rating: "⭐ 9/10",
        desc: "رحلة عبر الفضاء لإنقاذ البشرية، يجمع بين العلم والمشاعر بشكل رائع."
    },
    {
        title: "The Dark Knight",
        image: "images/darkknight.jpg",
        rating: "⭐ 9.5/10",
        desc: "واحد من أفضل أفلام الأبطال الخارقين، مع أداء أسطوري لشخصية الجوكر."
    },
    {
        title: "Titanic",
        image: "images/titanic.jpg",
        rating: "⭐ 8.5/10",
        desc: "قصة حب مؤثرة على متن السفينة الأشهر في التاريخ."
    },
    {
        title: "Avengers: Endgame",
        image: "images/endgame.jpg",
        rating: "⭐ 9/10",
        desc: "نهاية ملحمية لسلسلة مارفل، مليئة بالإثارة والمشاعر."
    },
    {
        title: "Joker",
        image: "images/joker.jpg",
        rating: "⭐ 8.5/10",
        desc: "فيلم نفسي عميق يروي تحول شخصية الجوكر بطريقة واقعية."
    },
    {
        title: "Spider-Man: No Way Home",
        image: "images/spiderman.jpg",
        rating: "⭐ 8.5/10",
        desc: "فيلم مليء بالمفاجآت يجمع بين عدة عوالم في قصة واحدة."
    },
    {
        title: "The Matrix",
        image: "images/matrix.jpg",
        rating: "⭐ 9/10",
        desc: "فيلم فلسفي خيال علمي يناقش حقيقة الواقع بطريقة مذهلة."
    }
];

let container = document.getElementById("movies");

movies.forEach(movie => {
    container.innerHTML += `
        <div class="card">
            <img src="${movie.image}">
            <h3>${movie.title}</h3>
            <p>${movie.rating}</p>
            <p>${movie.desc}</p>
        </div>
    `;
});