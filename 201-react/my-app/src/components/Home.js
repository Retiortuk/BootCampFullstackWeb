import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero text="Welcome To Our Website" /> {/*text berupa seperti nama class yang bisa dipanggil di Hero.js  */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ornare magna, non ultricies turpis fringilla dictum. Nulla ut varius eros, id pellentesque libero. Nulla auctor vestibulum velit, placerat tincidunt ex venenatis eget. Etiam blandit scelerisque quam sit amet porta. Donec tincidunt feugiat augue, a pellentesque nulla mattis id. Donec fringilla tincidunt nulla, quis sagittis tortor efficitur sit amet. Ut dictum mauris non risus dignissim, vel placerat nisl condimentum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;