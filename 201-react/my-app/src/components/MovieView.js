import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    // Menggunakan useParams untuk mendapatkan parameter dari URL
    // Misalnya jika URL adalah /movie/123, maka id akan berisi 123
    const { id } = useParams();
    // Menggunakan useEffect untuk mengambil data film berdasarkan id
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20c140e4adb91f55d3869a54318cf4b4`) // Mengambil data film dari API berdasarkan id
            // Menggunakan template literal untuk menyisipkan id ke dalam URL
            .then(response => response.json())
            .then(data => {
                console.log("Make an API request for id:", data);
                setMovieDetails(data);
            })
            .catch(error => console.error("Error fetching movie details:", error));
    }, [id]); // Dependensi useEffect adalah id, sehingga akan dijalankan ulang jika id berubah

    return (
        <div>
            <Hero text={movieDetails.original_title} /> {/* Menampilkan judul film sebagai teks Hero */}

        </div>
    )
}

export default MovieView;