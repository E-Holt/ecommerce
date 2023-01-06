import { useReducer } from "react"
import reviewReducer from "./reducers/reviewReducer"
import Title from "./styled/Title"

const initialReviews = [
  {
    id: 1,
    description: 'bad to use, would not recomment',
  },
  {
    id: 2,
    description: 'good to use, would recomment',
  }
]

function Review() {

  const initialState = {
    reviews: initialReviews,
    review: "",
    showEditBox: false,
    editReviewId: null, 
    editReviewDesc: "", 
  }

  const [store, dispatch] = useReducer(reviewReducer, initialState)

  const { reviews, review, showEditBox, editReviewDesc} = store

  const handleOnChange = (e) => {
    dispatch({
      type: 'setReview',
      data: e.target.value,
    })
    // setReview(e.target.value)
  }
  const addReview = (e) => {
    e.preventDefault()
    dispatch({
      type: 'addReview',
      data: review
    })
  }
  const deleteReview = (id) =>{
    dispatch({
      type: 'deleteReview',
      data:id
    })
  }

  const editReview = (id) => {
    dispatch({ 
      type: 'editReview', 
      data: id
    })
  }

  const handleEditReview = (e) => {
    dispatch({
      type: 'setEditReview',
      data: e.target.value
    })
  }

  const handleEdit = () => {
    dispatch({
      type: 'handleEdit'
    })
  }

  return(
    <div style={{padding:20}}>
      <Title>Review</Title>
      {reviews.map((review) => {
        return(
          <div key ={review.id} style={{padding: `20px 0px`}}>
            <div>{review.description}</div>
            <button onClick={() => editReview(review.id)}>Edit</button>
            <button onClick={() => deleteReview(review.id)}>Delete</button>
          </div>
        )
      })}
      {showEditBox && (
        <div>
          <textarea 
            value={editReviewDesc}
            onChange={handleEditReview}
          />
          <div>
            <button onClick={handleEdit}>Save Edit</button>
          </div>
        </div>
        )}
      <form>
        <div>Add Review</div>
        <textarea value={review} onChange={handleOnChange} />
        <div>
          <button onClick={addReview}>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Review