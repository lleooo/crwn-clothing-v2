function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result);