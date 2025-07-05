import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    // Menggunakan useParams untuk mendapatkan parameter dari URL
    // Misalnya jika URL adalah /movie/123, maka id akan berisi 123
    const { id } = useParams();
    // Menggunakan useEffect untuk mengambil data film berdasarkan id
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true); // State untuk menangani loading

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=20c140e4adb91f55d3869a54318cf4b4`) // Mengambil data film dari API berdasarkan id
            // Menggunakan template literal untuk menyisipkan id ke dalam URL
            .then(response => response.json())
            .then(data => {
                console.log("Make an API request for id:", data);
                setMovieDetails(data);
                setLoading(false); // Mengubah loading menjadi false setelah data berhasil diambil
            })
            .catch(error => console.error("Error fetching movie details:", error));
    }, [id]); // Dependensi useEffect adalah id, sehingga akan dijalankan ulang jika id berubah

    // Jika loading masih true, tampilkan pesan loading
    function renderMovieDetails() {
        if (loading) {
            return <Hero text="Loading..." />; // Menampilkan teks loading
        }
        // Jika loading sudah selesai, tampilkan detail film
        if (movieDetails) {
            return (
                <div>
                    <Hero text={movieDetails.original_title} /> {/* Menampilkan judul film sebagai teks Hero */}
                    <div className="container">

                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-4 my-5">
                                <div className="poster text-center text-lg-end">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title} className="img-fluid rounded" /> {/* Menampilkan poster film */}
                                </div>
                            </div>

                            <div className="col-lg-7 my-5">
                                <div className="detailsmovie ps-lg-5 text-lg-start text-center">
                                    <h2 className="mb-4">{movieDetails.original_title}</h2>
                                    <div className="d-flex gap-3 flex-column flex-lg-row">
                                        <p className="fst-italic fw-bold">
                                            Release Date: {movieDetails.release_date} <br />
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Original Language: {movieDetails.original_language}
                                        </p>
                                    </div>
                                    <p>
                                        <span className="fw-bold">Overview:</span> {movieDetails.overview} {/* Menampilkan overview film */}
                                    </p>
                                    <div className="d-flex gap-3 flex-column flex-lg-row py-5">
                                        <p className="fst-italic fw-bold">
                                            Popularity: {movieDetails.popularity} <br />
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Vote Average: {movieDetails.vote_average}
                                        </p>
                                        <p className="fst-italic fw-bold">
                                            Vote Count: {movieDetails.vote_count}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>      
            )
        }
    }

    return renderMovieDetails();
}

export default MovieView;