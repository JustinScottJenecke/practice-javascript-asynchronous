
//Asynchronus Example

/*
    console.log('Get')

    console.log('ready')

    console.log('for')

    setTimeout(()=>{
        console.log('battle!')
    }, 1000)

    console.log('the')

    console.log('next')
*/


//CallBack Example

/*
let makeZombie = (firstStep, secondStep, thirdStep) => {
    firstStep() 
    secondStep()
    thirdStep()
}

let order = () => {
    console.log('5 zombies ordered')
}

let production = () => {

    console.log('building 5 zombies')

    setTimeout(() => {
        console.log('made zombie!')
    },2000)
    setTimeout(() => {
        console.log('made zombie!')
    },2000)
    setTimeout(() => {
        console.log('made zombie!')
    },2000)
    setTimeout(() => {
        console.log('made zombie!')
    },2000)
    setTimeout(() => {
        console.log('made zombie!')
    },2000)

}

let sell = () => {

    setTimeout(() => {
        console.log('processing...')
    },3000)  
    
    setTimeout(() => {
        console.log('All zombies sold and shipped for $5 million!!')
    },5000)  
}

makeZombie(order, production, sell)
*/


//CallBack Example Simple

    let orderZombie = (nextFunction) => {
        console.log('order for 5 zombies, \nbuilding zombies..')
        nextFunction()
    }

    let production = () => {
        setTimeout(()=>{
            console.log("5 zombies built")
        },2000)
    }


    orderZombie(production)