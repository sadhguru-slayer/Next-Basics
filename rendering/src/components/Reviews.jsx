import React from 'react'

const Reviews = async () => {
  // Example reviews data
  await new Promise((r)=> setTimeout(r,2000));
  const reviews = [
    { id: 1, user: 'Alice', comment: 'Great product!' },
    { id: 2, user: 'Bob', comment: 'Value for money.' },
    { id: 3, user: 'Charlie', comment: 'Highly recommend.' },
  ]

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews