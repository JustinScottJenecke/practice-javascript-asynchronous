let Blacksmith = {

    strength: ['noob', 'average', 'sweat'],
    weapon: ['none', 'melee', 'firearm'],
    armour:['garbage', 'common', 'rare', 'epic']

}

let order = (str, callback) => {

    console.log('Please enter strength of the zombie: ')

    setTimeout(()=>{

        console.log(Blacksmith.strength[str] + ' is the strength of the zombie')
        callback()

    },2000)
}

let build = () => {

    console.log('building zombie')

    setTimeout(()=>{
        console.log('set strength.. complete.')
        
        setTimeout(()=>{
            console.log(Blacksmith.weapon[0] + ' weapon and ' +Blacksmith.armour[1] + ' armour were equipped to the zombie.\nset equipment complete..')    
        },2000)
    },2000)
}

order(0, build)