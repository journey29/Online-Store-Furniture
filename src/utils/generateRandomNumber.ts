export const generateRandomNumber = (initialValue: number): () => number => {
    let currentValue = initialValue;
    return () => {
        currentValue += 4;
        return Math.floor(Math.random() * currentValue);
    };
}