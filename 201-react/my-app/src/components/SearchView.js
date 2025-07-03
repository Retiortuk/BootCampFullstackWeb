import Hero from "./Hero";

// API KEY FROM THEMOVIEDB: 20c140e4adb91f55d3869a54318cf4b4
// https://api.themoviedb.org/3/search/movie

const SearchView = ({keyword, searchResults}) => { // Menerima props keyword dan searchResults dari App.js
    // keyword adalah teks yang dicari, searchResults adalah hasil pencarian
    const title = `you search for ${keyword}`; // Judul yang akan ditampilkan di Hero, bisa diubah sesuai kebutuhan

    const ResultsHTML = searchResults.map((obj, index) => { // Menggunakan map untuk mengiterasi setiap hasil pencarian
        // obj adalah setiap objek film dari hasil pencarian, index adalah indeksnya
        return (
            <div key={index}>
                {obj.title} {/* Menampilkan judul film dari hasil pencarian */}
            </div>
        )
    }) 

    return (
        <>
            {/* Menampilkan Hero dengan teks yang sesuai */}
            <Hero text={title} /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
            {ResultsHTML} {/* Menampilkan hasil pencarian */}
        </>
    );
};

export default SearchView;