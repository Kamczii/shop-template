import { Size } from './Size';

export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sizes: Size[];
    advantages: string[];
    imageURLs: string[];
}