const { assert } = require('chai');
const sinon = require('sinon');

const Operation = require('../../database/models/operation');
const operationRepository = require('../../repositories/operation');

const sandbox = sinon.createSandbox();
const expectedOperation = {
    id: 1,
    type: 'random_string',
    cost: 10,
};

describe('Operation Repository', () => {
    afterEach(() => {
        sandbox.restore();
    });

    it('getById', () => {
        it('Success', async () => {
            sandbox.stub(Operation.prototype, 'fetch').resolves(expectedOperation);

            const operationFound = await operationRepository.getById(1);

            assert.isObject(operationFound, 'is an object');
            assert.equal(operationFound.id, 1);
            assert.equal(operationFound.type, 'random_string');
            assert.equal(operationFound.cost, 10);
        });

        it('Not found', async () => {
            sandbox.stub(Operation.prototype, 'fetch').resolves(null);

            const operationFound = await operationRepository.getById(999);

            assert.equal(operationFound, null);
        });
    });

    it('getByType', () => {
        it('Success', async () => {
            sandbox.stub(Operation.prototype, 'fetch').resolves(expectedOperation);

            const operationFound = await operationRepository.getByType('random_string');

            assert.isObject(operationFound, 'is an object');
            assert.equal(operationFound.id, 1);
            assert.equal(operationFound.type, 'random_string');
            assert.equal(operationFound.cost, 10);
        });

        it('Not found', async () => {
            sandbox.stub(Operation.prototype, 'fetch').resolves(null);

            const operationFound = await operationRepository.getByType('test');

            assert.equal(operationFound, null);
        });
    });
});
