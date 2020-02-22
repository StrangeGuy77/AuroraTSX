import { Payment } from "../../entity/Payment";
import { createTypeOrmConn } from "../../utils/ormconn";
import * as faker from "faker";
import { User } from "../../entity/User";
import { GQL } from "../../types/schema";

let newTestUser: User;
let fakePaymentData: GQL.IPaymentRegistrationOnMutationArguments;

beforeAll(async () => {
  await createTypeOrmConn();
  newTestUser = await User.create({
    email: "jhonatanrg@live.com",
    password: "1234"
  }).save();

  fakePaymentData = {
    payment_method: [faker.finance.account()],
    currency: faker.finance.currencyCode(),
    amount: Number(faker.finance.amount()),
    name: faker.name.firstName(),
    description: faker.lorem.lines(1),
    user: newTestUser.id
  };
});

describe("Payment shall differ tables from within", () => {
  it("Should return payment entity fulfilled", async () => {
    const response = Payment.create(fakePaymentData);
    console.log(response);
  });
});
