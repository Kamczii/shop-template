import { AddressFormValues } from './AddressFormValues';
import { Roles } from './Roles';

export interface User {
  uid: string;
  email: string;
  phone?: number;
  roles: Roles;
  address?: AddressFormValues;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}
