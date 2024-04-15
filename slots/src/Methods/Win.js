export const matchTwo = (setResult) => {

};

export const small = (setResult) => {

};

export const mid = (props) => {
    props.setResult([11, 11, 11]);
};

export const big = (props) => {
    props.setResult([11, 11, 11]);
};

export const bonus = (setResult) => {

};

export const board = (setResult) => {

};

export const lose = (props) => {
    const result = props.result;
    let numbers = [];
    while (numbers.length < 3) {
        const randomNum = Math.floor(Math.random() * 12); 
        if (!numbers.includes(randomNum) && result.indexOf(randomNum) === -1) { 
            numbers.push(randomNum); 
        }
    }
    props.setResult(numbers);
};
