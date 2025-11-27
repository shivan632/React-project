import React from 'react'

const TrendingAnime = () => {
  const trendingAnime = [
    { id: 1, image: "./src/assets/naruto.png", title: "Jujutsu Kaisen", genre: "Action" },
    { id: 2, image: "./src/assets/naruto.png", title: "Attack on Titan", genre: "Action" },
    { id: 3, image: "./src/assets/naruto.png", title: "Demon Slayer", genre: "Fantasy" },
    { id: 4, image: "./src/assets/naruto.png", title: "My Hero Academia", genre: "Superhero" },
    { id: 5, image: "./src/assets/naruto.png", title: "One Piece", genre: "Adventure" },
    { id: 6, image: "./src/assets/naruto.png", title: "Naruto", genre: "Action" }
  ]

  return (
    <section id="trending" className="trending-section">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Trending</span> Now
        </h2>
        
        <div className="trending-grid">
          {trendingAnime.map(anime => (
            <TrendingCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TrendingCard = ({ anime }) => (
  <div className="trending-card anime-card card-3d">
    <img 
      src={anime.image} 
      alt={anime.title}
      className="trending-image"
    />
    <h3 className="trending-title">{anime.title}</h3>
    <p className="trending-genre">{anime.genre}</p>
  </div>
)

export default TrendingAnime