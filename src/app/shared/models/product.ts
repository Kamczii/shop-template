import { Size } from './Size';

export class Product {
    id: string;
    name: string;
    nameLowerCase: string;
    brand: string;
    category: string;
    date: Date;
    updateDate: Date;
    description: string;
    price: number;
    sizes: Size[];
    advantages: string[];
}