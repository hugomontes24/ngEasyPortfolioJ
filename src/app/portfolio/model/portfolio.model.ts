export class Portfolio {
    
    id!: number;
    title!: string;
    description!: string;
    name!: string;
    firstname!: string;
    email!:string;
    city!: string;
    descriptionSkills!: string;
    u_id!: number;

    constructor(){
        this.id = 0;
        this.title = '';
        this.description = '';
        this.name = '';
        this.firstname = '';
        this.email = '';
        this.city = '';
        this.descriptionSkills = '';
        this.u_id = 0;
    }
}