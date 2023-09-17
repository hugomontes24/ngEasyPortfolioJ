export class Skill {
    
    id!: number;
    title!: string;
    description!: string;
    p_id!: number;

    constructor(){
        this.id = 0;
        this.title = '';
        this.description = '';
        this.p_id = 0;
    }
}