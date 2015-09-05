var add = require('../main/add');

describe('testAdd', function() {
    it('should return 2 when add 1 and 1', function() {
        expect(add(1,1)).toBe(2);
    });
});
