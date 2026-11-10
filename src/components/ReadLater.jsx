import Article from './Article'
import articles from '../data/articles'
import { useReadLaterContext } from '../context/ReadLaterContext'

function ReadLater() {
  const { readLater } = useReadLaterContext()

  const savedArticles = articles.filter(article =>
    readLater.some(item => item.id === article.id),
  )

  return (
    <main className="page">
      <h1>Read Later</h1>

      {savedArticles.length === 0 ? (
        <p className="empty-state">No articles added yet.</p>
      ) : (
        <div className="article-grid">
          {savedArticles.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      )}
    </main>
  )
}

export default ReadLater