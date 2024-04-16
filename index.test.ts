import { env } from 'cloudflare:test';
import { beforeEach, describe, it, expect } from 'vitest';

describe('checks', () => {
    it('bugs', async () => {
        const id: DurableObjectId = env.LALA.newUniqueId();
        const stub = env.LALA.get(id);
        const resp = await stub.fetch(new Request('http://localhost/'));
        expect(resp.status).toEqual(200);
        // await resp.text();
    });
});
