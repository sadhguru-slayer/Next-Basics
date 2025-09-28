import React from 'react'
import Link from 'next/link'
const ReviewsPage = async ({params}) => {
    const urlparams = await params;
    console.log(urlparams);
    const reviews = [
        {id:1, name:"Good"},
        {id:2, name:"Bad"},
        {id:100, name:"Average"},
        {id:114, name:"Excellent"},
    ]
  return (
    <div>ReviewsPage
    
    <h1>List of reviews</h1>
    <ul>
    {reviews.map((review) =>(
        <li key={review.id}>
        <Link href={`/products/1/review/${review.id}`}>
        {review.name} - {review.id}
        </Link>
        
        </li>
    ))}
    </ul>
    </div>
  )
}

export default ReviewsPage