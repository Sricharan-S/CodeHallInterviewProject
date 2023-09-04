export const provideRatingColor = (rating) => {
    if(rating < 4){
        return {background: 'red', color: 'white'};
    } else if(rating < 6){
        return {background: 'yellow', color: 'black'};
    } else if(rating < 8){
        return {background: 'lightgreen', color: 'black'};
    } else {
        return {background: 'green', color: 'white'};
    }
} 