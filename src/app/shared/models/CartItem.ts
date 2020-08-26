import { Sizes } from '../enums/sizes.enum';
import { Product } from './product';


export class CartItem {
    product: Product;
    count: number;
    size: Sizes;
}