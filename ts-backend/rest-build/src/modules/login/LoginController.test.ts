import Axios from 'axios';
import { createTypeOrmConn } from '../../utils/ormConn';

beforeAll(async () => {
    await createTypeOrmConn();
});

describe('Testing login controller response to everything.', () => {
    test('Check for any of both empty fields: email or password.', async () => {
        const response = await Axios.post('http://localhost:3500/user/login', {
            email: ""
        });
        expect(response).toMatchObject({
            message: "There are fields that are compulsory for login and are not within the body. Check email or password fields.",
            code: 400
        });
    });

    test('Check for bad email pattern', async () => {

    });
});