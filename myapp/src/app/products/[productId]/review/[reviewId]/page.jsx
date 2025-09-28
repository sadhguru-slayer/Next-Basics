import React from 'react'
import NotFound from './not-found';

const getRandomInt = (number) => {
    return Math.floor(Math.random() * number); //The maximum is exclusive and the minimum is inclusive
}

const ReviewDetails = async ({params}) => {
    const urlparams = await params;
    const reviewId = urlparams.reviewId;
    const productId = urlparams.productId;
    const randomNumber = getRandomInt(10);
    if(reviewId > 100){
        return <NotFound limit={reviewId}/>;
    }
    if(randomNumber % 2 === 0){
        throw new Error("Random error occured while loading review details");
    }
    
  return (
    <div className="">
    <p>Product Id : {productId}</p>
    <p>Review Id : {reviewId}</p>
    </div>
  )
}

export default ReviewDetails