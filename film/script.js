const data = {
    "aksiyon": [
        { isim: "Interstellar", tip: "Film", imdb: "tt0816692", poster: "https://artofthemovies.co.uk/cdn/shop/files/IMG_7648_1024x1024@2x.jpg?v=1720454458" },
        { isim: "Black Mirror", tip: "Dizi", imdb: "tt2085059", poster: "https://i.ebayimg.com/00/s/MTYwMFgxMTcy/z/otUAAOSw~~1ki5Tl/$_57.JPG?set_id=880000500F" },
        { isim: "Stranger Things", tip: "Dizi", imdb: "tt4574334", poster: "https://imgc.allpostersimages.com/img/posters/trends-international-netflix-stranger-things-season-2-2017-key-art_u-L-F9TO290.jpg" },
        { isim: "300 Spartalı", tip: "Film", imdb:"title/tt0416449", poster: "https://www.arttablo.com/upload/U-300-spartali-film-afisi-kanvas-tablo1447885767-800.jpg"}
    ],
    "bilim kurgu": [
        { isim: "Inception", tip: "Film", imdb: "tt1375666", poster: "https://i.pinimg.com/originals/4c/76/fb/4c76fba647a1a3e46ea74dbb37675b8a.jpg" },
        { isim: "Arrival", tip: "Film", imdb: "tt2543164", poster: "https://m.media-amazon.com/images/I/71l6fadsRMS.jpg" },
        { isim: "Westworld", tip: "Dizi", imdb: "tt0475784", poster: "https://m.media-amazon.com/images/I/81jnYk6OW6L._AC_UF1000,1000_QL80_.jpg" },
        { isim: "The Prestige", tip: "Film", imdb: "tt0482571", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1ctCAWZNYuvyBmCQkrrdaz8O-IPgFeBLsQ&s" }
    ],
    "komedi": [
        { isim: "The Office", tip: "Dizi", imdb: "tt0386676", poster: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg" },
        { isim: "Brooklyn Nine-Nine", tip: "Dizi", imdb: "tt2467372", poster: "https://m.media-amazon.com/images/S/pv-target-images/bb45b77be4d15fe94bf0ac55cd78e5bafb252bfe896ee454d4f43c7c308407be.jpg" },
        { isim: "Superbad", tip: "Film", imdb: "tt0829482", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTRDMZBzSIiGVvdtwuFnX1vWcQ2XiJj-Z8A&s" },
        { isim: "The Apartment", tip: "Film", imdb: "tt0053604", poster: "https://image.tmdb.org/t/p/original/ajXhLgV4a484i1kmycZAnXI3aB9.jpg"}
    ],
    "dram": [
        { isim: "The Shawshank Redemption", tip: "Film", imdb: "tt0111161", poster: "https://m.media-amazon.com/images/I/81dLj5FeX7L._AC_UF894,1000_QL80_.jpg" },
        { isim: "Breaking Bad", tip: "Dizi", imdb: "tt0903747", poster: "https://m.media-amazon.com/images/I/51O2ySDwX8L._AC_UF1000,1000_QL80_.jpg" },
        { isim: "Fight Club", tip: "Film", imdb: "tt0137523", poster: "https://m.media-amazon.com/images/I/81Luju2cHuL._AC_SL1500_.jpg" },
        { isim: "Forrest Gump",tip: "Film", imdb: "tt0109830", poster: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2920525/5964222/MOVAJ2095__61756.1679606794.jpg?c=2"}
    ],
    "korku": [
        { isim: "The Conjuring", tip: "Film", imdb: "tt1457767", poster: "https://i.pinimg.com/736x/84/0e/00/840e002aae1d6548e39d2bdb5324c1e6.jpg"},
        { isim: "The Exorcist", tip: "Film", imdb: "tt0070047", poster: "https://m.media-amazon.com/images/I/41fmVwTk1rL._AC_UF894,1000_QL80_.jpg"},
        { isim: "The Sixth Sense", tip: "Film", imdb: "tt0167404", poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png"},
        { isim: "Yaratılan", tip: "Dizi", imdb: "tt17553374", poster: "https://img03.imgsinemalar.com/images/afis_dev/y/yaratilan-1697472350.jpg"}
    ],
    "romantik": [
        { isim: "Before Sunrise", tip:"Film", imdb: "tt0112471", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqXDX0s_d6LGvnqSrgxo1LOIWS_za6E05fQ&s"},
        { isim: "Eternal Sunshıne Of The Spotless Mind", tip: "Film", imdb: "tt0338013", poster: "https://tr.web.img3.acsta.net/pictures/bzp/01/40191.jpg"},
        { isim: "Çalıkuşu", tip: "Dizi", imdb: "tt3142876", poster: "https://tr.web.img3.acsta.net/pictures/210/360/21036075_20130904135401875.jpg"},
        { isim: "Titanıc", tip: "Film", imdb: "tt0120338", poster: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg"}
    ]
};

function getRecommendation() {
    const genre = document.getElementById("genre").value;
    const resultDiv = document.getElementById("result");
    const loadingSpinner = document.getElementById("loading");

    // Mevcut öneriyi gizle ve spinner'ı göster
    resultDiv.classList.add("hidden");
    loadingSpinner.classList.remove("hidden");

    const list = data[genre];
    if (!list || list.length === 0) {
        // Hata durumunda spinner'ı gizle ve hata mesajı göster
        loadingSpinner.classList.add("hidden");
        resultDiv.innerHTML = `<div class="card-content"><strong>Üzgünüz!</strong> Bu kategoride henüz önerimiz yok.</div>`;
        resultDiv.classList.remove("hidden");
        return;
    }

    const pick = list[Math.floor(Math.random() * list.length)];

    setTimeout(() => {
        loadingSpinner.classList.add("hidden"); // Spinner'ı gizle
        resultDiv.innerHTML = `
            <img src="${pick.poster}" alt="${pick.isim} Posteri">
            <div class="card-content">
                <strong>${pick.isim}</strong>
                <p>${pick.tip}</p>
                <a href="https://www.imdb.com/title/${pick.imdb}" target="_blank">
                    IMDb'de İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                </a>
            </div>
        `;
        resultDiv.classList.remove("hidden"); // Yeni öneriyi göster
    }, 1000); // 1 saniye bekleme süresi
}