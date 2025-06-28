const Hero = ({text}) => { // parameter nya adalah {text} : component, yang mana match dengan yang ada di Home.js dan About.js
    return (
        <header className="bg-dark text-white p-5">
            <h1>{text}</h1> 
        </header>
        
    );
};

export default Hero;