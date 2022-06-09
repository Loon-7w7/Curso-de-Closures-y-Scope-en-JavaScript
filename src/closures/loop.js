const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
        console.log(i); 
        }, 1000);
    }
}
anotherFunction()

//BIEN
const another = () => {
    for (let i = 0; i < 10; i++) {
    setTimeout( () => {
        console.log(i)
    }, 1000)
    }
}

another()
  //R: 0, 1, 2, 3, ... , 9

//mal
const another1 = () => {
    for (var i = 0; i < 10; i++) {
    setTimeout( () => {
        console.log(i)
    }, 1000)
    }
}

another1()
  //R: 10, 10, 10, 10, ... , 10