import { Size } from './Size';

export class Product {
    id: string;
    name: string;
    brand: string;
    date: Date = new Date();
    description: string;
    price: number;
    sizes: Size[];
    advantages: string[];
}