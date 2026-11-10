import { Link } from 'react-router-dom'
import { useReadLaterContext } from '../context/ReadLaterContext'

function Navbar() {
  const { readLater } = useReadLaterContext()

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        NewsHub
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/read-later">
          Read Later ({readLater.length})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar