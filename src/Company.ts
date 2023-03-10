import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export default class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string{
        return `
        Company name is: ${this.companyName},
        Catchphrase: ${this.catchPhrase}
        `;
    }
}