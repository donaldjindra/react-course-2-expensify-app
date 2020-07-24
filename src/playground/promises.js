const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve({
        //     name: 'Donald',
        //     age: 43
        // });
        reject('Something went wrong')
    }, 1500)
});

console.log('Before')

promise.then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log('Error:', error)
});

console.log('After')