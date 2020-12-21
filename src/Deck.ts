"use strict"

export interface IDeck {
    deck: ICard[];
}

export interface ICard {
    card: number;
    type: string;
}



export const myDeck: IDeck = [
    {card:1, type:"C"},
    {card:1, type:"D"},
    {card:1, type:"H"},
    {card:1, type:"S"},

    {card:2, type:"C"},
    {card:2, type:"D"},
    {card:2, type:"H"},
    {card:2, type:"S"},

    {card:3, type:"C"},
    {card:3, type:"D"},
    {card:3, type:"H"},
    {card:3, type:"S"},

    {card:4, type:"C"},
    {card:4, type:"D"},
    {card:4, type:"H"},
    {card:4, type:"S"},

    {card:5, type:"C"},
    {card:5, type:"D"},
    {card:5, type:"H"},
    {card:5, type:"S"},

    {card:6, type:"C"},
    {card:6, type:"D"},
    {card:6, type:"H"},
    {card:6, type:"S"},

    {card:7, type:"C"},
    {card:7, type:"D"},
    {card:7, type:"H"},
    {card:7, type:"S"},

    {card:8, type:"C"},
    {card:8, type:"D"},
    {card:8, type:"H"},
    {card:8, type:"S"},

    {card:9, type:"C"},
    {card:9, type:"D"},
    {card:9, type:"H"},
    {card:9, type:"S"},

    {card:10, type:"C"},
    {card:10, type:"D"},
    {card:10, type:"H"},
    {card:10, type:"S"},

    {card:11, type:"C"},
    {card:11, type:"D"},
    {card:11, type:"H"},
    {card:11, type:"S"},


    {card:12, type:"C"},
    {card:12, type:"D"},
    {card:12, type:"H"},
    {card:12, type:"S"},


    {card:13, type:"C"},
    {card:13, type:"D"},
    {card:13, type:"H"},
    {card:13, type:"S"},

];



console.log(deck);
