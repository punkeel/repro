import { DurableObject } from 'cloudflare:workers';

export default { fetch: function() {} }

export class Lala extends DurableObject {
    async ping() {
       return {x:42};
    }
}

