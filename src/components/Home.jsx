import Article from './Article'
import articles from '../data/articles'

function Home() {
  return (
    <main className="page">
      <h1>Top Stories</h1>

      <div className="article-grid">
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </main>
  )
}

export default Home