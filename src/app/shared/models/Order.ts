import { CartItem } from './CartItem';
import { AddressFormValues } from './AddressFormValues';
import { OrderStatus } from '../enums/order-staturs.enum';

export interface Order{
    id?: string;
    items: CartItem[];
    purchaserId: string;
    date: Date;
    address: AddressFormValues;
    paymentMethod: string;
    status?: OrderStatus;
}