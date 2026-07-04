

import { useState } from 'react'
import './StarRating.css'

import { FaStar } from 'react-icons/fa'

function StarRating({ noOfStars }) {

    const [ratingstar, setRatingstar] = useState(0);
    const [hoverstar, setHoverstar] = useState(0);

    function handleStarClick(getCurrentStar) {
        setRatingstar(getCurrentStar)
        console.log(getCurrentStar)

    }

    function handleMouseEnter(getCurrentStar) {
        setHoverstar(getCurrentStar)
 console.log(getCurrentStar)
    }

    function handleMouseLeave(getCurrentStar) {
        setHoverstar(ratingstar)
 console.log(getCurrentStar)
    }

    return (

        <div>
            <h1 className='c1'>Star Rating</h1>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;

                    return (
                        <FaStar
                            key={index}
                            className={index <= (hoverstar || ratingstar) ? 'active' : 'inactive'}
                            onClick={() => handleStarClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />
                    );
                })
            }

        </div>
    )
}

export default StarRating