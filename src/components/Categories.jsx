import React from 'react'

const Categories = () => {
  const categories = [
    { id: 1, icon: "fas fa-fist-raised", name: "Action" },
    { id: 2, icon: "fas fa-heart", name: "Romance" },
    { id: 3, icon: "fas fa-ghost", name: "Horror" },
    { id: 4, icon: "fas fa-laugh", name: "Comedy" },
    { id: 5, icon: "fas fa-rocket", name: "Sci-Fi" },
    { id: 6, icon: "fas fa-dragon", name: "Fantasy" }
  ]

  return (
    <section id="category" className="categories-section">
      <div className="container mx-auto">
        <h2 className="section-title">
          Browse by <span className="gradient-text">Category</span>
        </h2>
        
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CategoryCard = ({ category }) => (
  <div className="category-card card-3d">
    <div className="category-icon">
      <i className={category.icon}></i>
    </div>
    <h3 className="category-name">{category.name}</h3>
  </div>
)

export default Categories