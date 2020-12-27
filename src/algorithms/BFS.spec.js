describe('BFS', function () {
    const BFS = require('./BFS');
    it('#should pass', function () {
        const G = { value: 'G', children: [] },
            F = { value: 'F', children: [G] },
            E = { value: 'E', children: [] },
            D = { value: 'D', children: [G] },
            C = { value: 'C', children: [E, F] },
            B = { value: 'B', children: [E] },
            A = { value: 'A', children: [B, C, D] };
        expect(BFS(A, G)).toEqual(3);
    })
})