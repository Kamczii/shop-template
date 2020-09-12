import { OrderDirection } from '../enums/OrderDirection.enum';

export interface BaseOrder{
    field: string;
    order: OrderDirection;
}