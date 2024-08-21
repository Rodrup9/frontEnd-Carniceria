
export const separatePoint = (num = 0.00) => {
    
    // console.log(num !== Math.floor(num));
    const [ first, second ] = num !== Math.floor(num) ? num.toString().split('.') :  [ num.toString(), '00' ];

    return {
        first,
        second,
    }
}

