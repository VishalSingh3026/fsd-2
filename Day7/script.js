// const students = [
//     { name: 'John', score: 90 },
//     {name: 'Bob',score: 50},
//     {name: 'Alice',score: 80},
//     {name: 'Eve',score: 70},,
//     {name: 'Jack',score: 60}
// ];
// let newar = students.filter((student) => student.score>60)
//   .map((student) => student.score *2)
//   .reduce((x,y) => x+y,0);
// console.log(newar);







// sayhello =() =>{
//     console.log('Hello,I am in');
// };

// console.log("task Started");
// setTimeout(sayhello,3000);
// console.log("task Ended");







console.log("started");
setTimeout(() =>{
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed");
    },3000);
},2000);
},1000);

console.log("end")