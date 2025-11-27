import React from 'react'

const FeaturedAnime = () => {
  const featuredAnime = [
    {
      id: 1,
      image: "./src/assets/naruto.png",
      badge: "NEW",
      badgeColor: "primary",
      title: "Demon Slayer: Entertainment District Arc",
      description: "Tanjiro and his friends join the Sound Hashira Tengen Uzui on a mission to investigate demon activity in the Entertainment District."
    },
    {
      id: 2,
      image: "./src/assets/naruto.png",
      badge: "POPULAR",
      badgeColor: "primary",
      title: "Attack on Titan: The Final Season",
      description: "The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. The fate of the world hangs in the balance."
    },
    {
      id: 3,
      image: "./src/assets/naruto.png",
      badge: "TRENDING",
      badgeColor: "secondary",
      title: "My Hero Academia Season 6",
      description: "UA Academy continues to prepare the next generation of heroes, but a dark threat looms with the rise of the Paranormal Liberation Front."
    }
  ]

  return (
    <section id="featured" className="featured-section">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Featured</span> Anime
        </h2>
        
        <div className="featured-grid">
          {featuredAnime.map(anime => (
            <FeaturedCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturedCard = ({ anime }) => (
  <div className="featured-card anime-card card-3d">
    <div className="relative">
      <img 
        src={anime.image} 
        alt={anime.title}
        className="featured-image character-3d"
      />
      <div className={`featured-badge ${anime.badgeColor}`}>
        {anime.badge}
      </div>
    </div>
    <h3 className="featured-title">{anime.title}</h3>
    <p className="featured-description">{anime.description}</p>
  </div>
)

export default FeaturedAnime