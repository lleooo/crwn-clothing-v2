// const a = () => {
//     let count = 1;
//     return () => {
//         console.log(count++);
//     };
// };

// let c = a();

// setInterval(() => {
//     c();
// }, 1000);

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}
