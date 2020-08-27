import { OrderDirection } from '../enums/OrderDirection.enum';

export interface SortOrder {
    field: string;
    order: OrderDirection;
}