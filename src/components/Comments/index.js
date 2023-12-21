import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    commentList: [],
  }

  handleChange = event => {
    //  console.log(event.target.value)
    this.setState({nameInput: event.target.value})
  }

  textDisc = event => {
    //  console.log(event.target.value)
    this.setState({descriptionInput: event.target.value})
  }

  isLikes = id => {
    console.log('liked')
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each =>
        each.id === id ? {...each, isLiked: !each.isLiked} : each,
      ),
    }))
  }

  deleteFromList = id => {
    //  console.log(key)
    const {commentList} = this.state
    const newList = commentList.filter(each => each.id !== id)
    //  console.log(newList)
    this.setState({commentList: newList})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, descriptionInput} = this.state
    const classNames =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      description: descriptionInput,
      date: new Date(),
      isLiked: false,
      intialClassName: classNames,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      descriptionInput: '',
    }))
  }

  render() {
    const {nameInput, descriptionInput, commentList} = this.state

    // console.log(commentList)

    return (
      <div className="bg-card">
        <div className="head-card">
          <h1 className="heading">Comments</h1>
        </div>
        <div className="comments-img-card">
          <div className="comments-card">
            <form className="form-tag" onSubmit={this.onSubmitForm}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                id="user"
                className="input-name"
                placeholder="Your Name"
                onChange={this.handleChange}
                value={nameInput}
              />
              <br />
              <textarea
                rows="10"
                cols="10"
                className="enter-text"
                value={descriptionInput}
                id="te"
                placeholder="Your Comment"
                onChange={this.textDisc}
              />

              <br />
              <button className="add-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>

          <img
            className="comment-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="count-card">
          <p className="count-box">{commentList.length}</p>
          <p className="count-comment">Comments</p>
        </div>
        <ul className="added-comments-card">
          {commentList.map((each, index) => (
            <CommentItem
              commentlist={each}
              key={each.id}
              isLikes={this.isLikes}
              deleteFromList={this.deleteFromList}
              classNames={initialContainerBackgroundClassNames[index]}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
