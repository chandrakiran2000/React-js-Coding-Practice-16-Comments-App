import './index.css'
import {formatDistanceToNow} from 'date-fns'
// Write your code here
const CommentItem = props => {
  const {commentlist, isLikes, deleteFromList} = props
  const {id, name, description, date, isLiked, intialClassName} = commentlist

  const postedTime = formatDistanceToNow(date)

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const textColor = isLiked ? 'text-color' : ''

  const sendingId = () => {
    deleteFromList(id)
  }

  const likesKey = () => {
    isLikes(id)
  }

  return (
    <li className="main-card">
      <div className="card">
        <h1 className={`first-letter ${intialClassName}`}>
          {name[0].toUpperCase()}
        </h1>
        <div className="name-text-card">
          <div className="name-card">
            <h1 className="name-heading">{name}</h1>
            <p className="time">{postedTime}</p>
          </div>
          <p className="des-para">{description}</p>
        </div>
      </div>
      <div className="like-del-card">
        <div className="like-card">
          <img className="like-img" src={likeUrl} alt="Like" />
          <button
            className={`like-btn like-text ${textColor} `}
            onClick={likesKey}
            //  aria-label="Save"
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="del-btn"
          onClick={sendingId}
          aria-label="Save"
          type="button"
          data-testid="delete"
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
