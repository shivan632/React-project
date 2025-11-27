import React from 'react'

const HeroSection = () => {
  const animeCards = [
    {
      id: 1,
      image: "./src/assets/naruto.png",
      title: "Demon Slayer",
      genre: "Action, Fantasy"
    },
    {
      id: 2,
      image: "./src/assets/naruto.png",
      title: "Solo Leveling",
      genre: "Action, Adventure"
    },
    {
      id: 3,
      image: "./src/assets/naruto.png",
      title: "My Hero Academia",
      genre: "Superhero, Action"
    },
    {
      id: 4,
      image: "./src/assets/naruto.png",
      title: "The Eminence in Shadow",
      genre: "Fantasy, Action"
    }
  ]

  return (
    <section id="hero" className="hero-section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">AniFlix</span>
            </h1>
            <p className="hero-description">
              Your ultimate destination for streaming the best anime from Japan and around the world. 
              Thousands of episodes at your fingertips!
            </p>
            
            <div className="cta-buttons">
              <a href="#" className="primary-btn ripple">
                <i className="fas fa-play-circle mr-2"></i> Start Watching
              </a>
              <a href="#trending" className="secondary-btn ripple">
                <i className="fas fa-fire mr-2"></i> Trending Now
              </a>
            </div>
            
            <div className="features-grid">
              <FeatureItem 
                icon="fas fa-bolt"
                title="HD Streaming"
                description="Crystal clear quality"
              />
              <FeatureItem 
                icon="fas fa-globe"
                title="Multiple Languages"
                description="Sub & Dub available"
              />
            </div>
          </div>
          
          {/* Right Content - Anime Characters */}
          <div className="lg:w-1/2 relative">
            <div className="anime-grid">
              {animeCards.map((anime, index) => (
                <AnimeCard 
                  key={anime.id}
                  anime={anime}
                  index={index}
                />
              ))}
            </div>
            
            <TrendingBadge />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <div className="feature-icon">
      <i className={icon}></i>
    </div>
    <div>
      <p className="feature-title">{title}</p>
      <p className="feature-description">{description}</p>
    </div>
  </div>
)

const AnimeCard = ({ anime, index }) => (
  <div className={`anime-card ${index % 2 === 1 ? 'mt-8' : ''}`}>
    <img 
      src={anime.image} 
      alt={anime.title}
      className="anime-card-image character-3d"
    />
    <h3 className="anime-card-title">{anime.title}</h3>
    <p className="anime-card-genre">{anime.genre}</p>
  </div>
)

const TrendingBadge = () => (
  <div className="trending-badge glow">
    <div className="flex items-center">
      <div className="badge-icon">
        <i className="fas fa-fire"></i>
      </div>
      <div className="ml-3">
        <p className="badge-title">Trending</p>
        <p className="badge-subtitle">This Week</p>
      </div>
    </div>
  </div>
)

export default HeroSection