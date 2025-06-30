const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Your feet deserve the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES. </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className= "secondary-btn"> category </button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="brand1" />
                        <img src="/images/flipkart.png" alt="brand2" />
                    </div>
                </div>
            </div>
                    <div className="hero-image">
                        <img src="/images/shoe_image.png" alt="hero-image" />
                    </div>
            

            </main>
    );
};

export default HeroSection;