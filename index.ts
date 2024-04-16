export class Lala implements DurableObject {
    constructor(
        readonly ctx: DurableObjectState,
        readonly env: Bindings,
    ) { }

    async fetch(request: Request) {
        return new Response('Yo!');
    }
}

