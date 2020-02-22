import { ResolverMap } from "../../types/graphql-utils";
import { GQL } from "../../types/schema";
import { Payment } from "../../entity/Payment";
import { User } from "../../entity/User";

const errorResponse = (path: string, message: string) => [
  {
    path,
    message
  }
];

export const resolvers: ResolverMap = {
  Query: {
    _: () => ""
  },
  Mutation: {
    payment_registration: async (
      _: any,
      {
        amount,
        currency,
        description,
        payment_method,
        name
      }: GQL.IPaymentRegistrationOnMutationArguments
    ) => {
      if (isNaN(Number(amount))) {
        return errorResponse("amount", "Payment amount cannot be NaN!");
      }

      if (currency.length > 3 || currency.length < 3) {
        return errorResponse(
          "currency",
          "Currency cannot be lesser or higher than 3 digits \n i.e: 'USD'"
        );
      }

      const response = User.find({ where: { id: 1 } });
      console.log(response);

      Payment.create({
        amount,
        currency,
        description,
        name,
        paymentMethod: payment_method
      });

      return null;
    }
  }
};
