import Hero from "./Hero";

const SearchView = ({keyword, searchResults}) => { // Menerima props keyword dan searchResults dari App.js
    // keyword adalah teks yang dicari, searchResults adalah hasil pencarian
    const title = `you search for ${keyword}`; // Judul yang akan ditampilkan di Hero, bisa diubah sesuai kebutuhan
    console.log("Results:", searchResults) // Judul yang akan ditampilkan di Hero
    return (
        <>
            {/* Menampilkan Hero dengan teks yang sesuai */}
            <Hero text={title} /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
        </>
    );
};

export default SearchView;