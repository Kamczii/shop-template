import { BaseFilter } from './BaseFilter';
import { BaseOrder } from './BaseOrder';

export interface FilterAndOrder {
    baseFilter: BaseFilter;
    baseOrder: BaseOrder;
}