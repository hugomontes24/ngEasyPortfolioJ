export class User {
    id!: number;
    firstname!: string;
    name!: string;
    email!: string;
    password!: string;
    dateInscription!: string;
    dateConnect!: string;
    role!: string;
    token!: string;
    confirmed!: number;

     constructor(){
         this.id = 0;
         this.firstname = '';
         this.email = '';
         this.password = '';
         this.dateInscription = '';
         this.dateConnect = '';
         this.role = '';
        this.token = '';
        this.confirmed = 0;
    }
}