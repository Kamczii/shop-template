import { AddressFormValues } from './AddressFormValues';

export interface User {
    uid: string;
    email: string;
    address?: AddressFormValues;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
  }
  