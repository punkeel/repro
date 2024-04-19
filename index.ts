import { DurableObject } from 'cloudflare:workers';

export class Lala extends DurableObject {
    async ping() {
       return {x:42};
    }
}

