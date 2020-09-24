
const user1 = {
    name: 'Diego Fuentes',
    username: 'diegodragon1',
    country: 'Chile',
    social: {
        facebook: 'https://fb....',
        twitter: 'https://tw....'
    }
}

const saluda = (user) => {
    const { name, country, social } = user
    const { twitter } = social
    const orden = ['pizza', 'te verde', 'pay'];
    // eslint-disable-next-line no-use-before-define  
    const [ comida , bebida, postre ] = orden; 
   
    console.log(
        `Hola soy ${name} y vivo en ${country}, mi twitter es ${twitter} y me gusta la ${comida}`
    )
        
}

saluda(user1)