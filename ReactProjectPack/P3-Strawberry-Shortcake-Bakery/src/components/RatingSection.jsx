


import StarRating from './StarRating'




function RatingSection({theme}) {


  return (

   <section>
     <div>
        <StarRating theme={theme} noOfStars={5}/>

    </div>
   </section>
  )
}

export default RatingSection