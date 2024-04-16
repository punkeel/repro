import { env } from 'cloudflare:test';
import { beforeEach, describe, it, expect } from 'vitest';

describe('checks', () => {
    it('bugs', async () => {
        const id = env.LALA.newUniqueId();
        const stub = env.LALA.get(id);
        const resp = await stub.ping();
        expect(resp.x).toBe(42);
    });
});
