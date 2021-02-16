import { UserInterface } from './../interfaces/UserInterface';
export class User implements UserInterface {

  id: number = null;
  name: string;
  lastName: string;
  fiscalCode: string;
  email: string;
  phone: string;
  city: string;

  constructor(){
  }

}
