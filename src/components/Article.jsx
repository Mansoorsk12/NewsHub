import { useReadLaterContext } from '../context/ReadLaterContext'

function Article({ article }) {
  const { readLater, addToReadLater } = useReadLaterContext()

  const isSaved = readLater.some(item => item.id === article.id)

  return (
    <article className="article-card">
      <img src={article.imageUrl} alt={article.title} />

      <div className="article-content">
        <p className="article-category">{article.category}</p>

        <h2>{article.title}</h2>

        <p>{article.summary}</p>

        <button
          className={isSaved ? 'saved-button' : ''}
          onClick={() => addToReadLater(article)}
        >
          {isSaved ? 'Added' : 'Read Later'}
        </button>
      </div>
    </article>
  )
}

export default Article