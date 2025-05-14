import { Classification } from "./classification.model";

export class Pays{
    idPays?:number;
    nomPays?:string;
    population?:number;
    continent?:string;
    independenceDate?: Date;
    classification?:Classification;

}