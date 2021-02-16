import { Injectable } from "@angular/core";
import { User } from '../model/User';

@Injectable()
export class UserService {

  private usersData: Array<User> = [
      {
        id: 1,
        name: 'Roberto',
        lastName: 'Amato',
        fiscalCode: 'MTARRT93H11E573Z',
        email: 'robertoxx93@libero.it',
        phone: '334323323',
        city: 'Milano'
      },
      {
        id: 2,
        name: 'Fabio',
        lastName: 'Amato',
        fiscalCode: 'MTAFBAT93H11E573L',
        email: 'fabioxx93@libero.it',
        phone: '331432435',
        city: 'Agrigento'
      },
      {
        id: 3,
        name: 'Rosario',
        lastName: 'Amato',
        fiscalCode: 'MTARSR23C49E573A',
        email: 'rosario49@libero.it',
        phone: '333562563',
        city: 'Agrigento'
      },
      {
        id: 4,
        name: 'Vincenza',
        lastName: 'Ballacchino',
        fiscalCode: 'BNLVCN46B46E573W',
        email: 'vincenza56@libero.it',
        phone: '385123456',
        city: 'Agrigento'
      }
    ];

  constructor() {}

  public getUsers(): Array<User> {
    console.log("[UserService] - getUsers - START");

    const usersFetched: Array<User> = this.usersData;

    console.log("[UserService] - getUsers - END");
    return usersFetched;
  }

  public saveNewUser(user: User): void {
    console.log("[UserService] - saveNewUser - START - user=", user);

    this.usersData.push(user);

    console.log("[UserService] - saveNewUser - END");
  }

  public updateUser(userToUpdate: User): void {
    console.log("[UserService] - updateUser - START - userToUpdate=", userToUpdate);

    for(let user of this.usersData) {
      if(user.id === userToUpdate.id) {
        user.name= userToUpdate.name;
        user.lastName = userToUpdate.lastName;
        user.fiscalCode = userToUpdate.fiscalCode;
        user.email = userToUpdate.email;
        user.city = userToUpdate.city;

        return;
      }
    };

    console.log("[UserService] - updateUser - END");
  }


  public deleteUser(idUserToDel: number): void {
    console.log("[UserService] - deleteUser - START - idUserToDel=", idUserToDel);

    this.usersData = this.usersData.filter( user => {
      return user.id !== idUserToDel;
    });

    console.log("[UserService] - deleteUser - END");
  }
}
