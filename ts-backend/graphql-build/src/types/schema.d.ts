// tslint:disable
// graphql typescript definitions

export declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    bye2: string | null;
    me: IUser | null;
    _: IPayment | null;
    bye: string | null;
    hello: string;
  }

  interface IHelloOnQueryArguments {
    name?: string | null;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    email: string;
  }

  interface IPayment {
    __typename: 'Payment';
    amount: number;
    description: string;
    currency: string;
    payment_method: string;
    name: string;
    id: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    login: Array<IError> | null;
    payment_registration: IPayment;
    register: Array<IError> | null;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface IPaymentRegistrationOnMutationArguments {
    amount: number;
    description: string;
    currency: string;
    payment_method: Array<string>;
    name: string;
    user: string;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }
}

// tslint:enable
