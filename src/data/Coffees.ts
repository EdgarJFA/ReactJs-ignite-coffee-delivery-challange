import { v4 as uuidv4 } from 'uuid'

import coffeeExpress from '../assets/images/Type=Expresso.png'
import coffeeAmericano from '../assets/images/Type=Americano.png'
import coffeeExpressoCremoso from '../assets/images/Type=Expresso Cremoso.png'
import coffeeGelado from '../assets/images/Type=Café Gelado.png'
import coffeeComLeite from '../assets/images/Type=Café com Leite.png'
import coffeeLatte from '../assets/images/Type=Latte.png'
import coffeeCapuccino from '../assets/images/Type=Capuccino.png'
import coffeeMacchiato from '../assets/images/Type=Macchiato.png'
import coffeeMochaccino from '../assets/images/Type=Mochaccino.png'
import coffeeChocolateQuente from '../assets/images/Type=Chocolate Quente.png'
import coffeeCubano from '../assets/images/Type=Cubano.png'
import coffeeHavaiano from '../assets/images/Type=Havaiano.png'
import coffeeIrlandes from '../assets/images/Type=Irlandês.png'
import coffeeArabe from '../assets/images/Type=Árabe.png'


export interface CoffeeProps {
    id: string
    type: string
    description: string
    price: number
    image: string
    ingredients: string[]

}

export const coffeeList = [
    {
        id: uuidv4(),
        type: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        image: coffeeExpress,
        ingredients: ['Tradicional']

    },
    {
        id: uuidv4(),
        type: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        image: coffeeAmericano,
        ingredients: ['Tradicional']

    },
    {
        id: uuidv4(),
        type: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        image: coffeeExpressoCremoso,
        ingredients: ['Tradicional']

    },
    {
        id: uuidv4(),
        type: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        image: coffeeGelado,
        ingredients: ['Tradicional', 'gelado']

    },
    {
        id: uuidv4(),
        type: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        image: coffeeComLeite,
        ingredients: ['Tradicional', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        image: coffeeLatte,
        ingredients: ['Tradicional', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        image: coffeeCapuccino,
        ingredients: ['Tradicional', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        image: coffeeMacchiato,
        ingredients: ['Tradicional', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        image: coffeeMochaccino,
        ingredients: ['Tradicional', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        image: coffeeChocolateQuente,
        ingredients: ['especial', 'com leite']

    },
    {
        id: uuidv4(),
        type: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        image: coffeeCubano,
        ingredients: ['especial', 'alcoólico', 'gelado']

    },
    {
        id: uuidv4(),
        type: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        image: coffeeHavaiano,
        ingredients: ['especial']

    },
    {
        id: uuidv4(),
        type: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        image: coffeeArabe,
        ingredients: ['especial']

    },
    {
        id: uuidv4(),
        type: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        image: coffeeIrlandes,
        ingredients: ['especial', 'alcoólico']

    }
] as CoffeeProps[]