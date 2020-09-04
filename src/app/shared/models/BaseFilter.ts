import { FilterSymbol } from '../enums/filter-symbol.enum';

export interface BaseFilter {
    field: string;
    symbol: FilterSymbol;
    value: any;
}