let Blacksmith = {

    strength: ['noob', 'average', 'sweat'],
    weapon: ['none', 'melee', 'firearm'],
    armour:['garbage', 'common', 'rare', 'epic']

}

let shopOpen = true

let operation = (work, time) => {

    return new Promise((resolve, reject) => {
        if(shopOpen) {
            setTimeout(()=>{
                resolve(work())
            }, time)       
        }
        else {
            reject(console.log('closed, come back during business hours'))
        }
    })
}

operation(()=> console.log('Zombie maker Blacksmith started'), 0000)

.then(()=> {
    return operation(()=> console.log(`${Blacksmith.strength[2]} was set as power level`), 3000)
})
.then(()=> {
    return operation(()=> console.log(`Zombie was fitted with ${Blacksmith.weapon[1]} weapon`), 2000)
})
.then(()=>{
    return operation(()=> console.log(`Zombie was equipped with ${Blacksmith.armour[3]} armour`), 4000)
})
.then(()=>{
    return operation(()=> console.log('Shipping zombie now..'), 1000)
})
.then(()=>{
    return operation(()=> console.log(`${Blacksmith.strength[2]} Zombie, fitted with a ${Blacksmith.weapon[1]} and ${Blacksmith.armour[3]} armour was shipped and ready for war!!!`), 500)
})

.catch(()=> console.log('client left grumpily ;)'))

.finally(()=> console.log('Hard day of work so shop is closed, back to making plans and schemes to take over the world.. 0--0'))


