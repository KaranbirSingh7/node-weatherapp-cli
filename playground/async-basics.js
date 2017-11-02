console.log('Starting app');

setTimeout(() => {
    console.log('inside of callback');
},2000);
setTimeout(() => {
    console.log('Here is delay of 0 miliseconds');
},0);
console.log('Finishing app');
