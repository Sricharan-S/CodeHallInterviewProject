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

export const debounce = (func, delay = 200) => {
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }
}