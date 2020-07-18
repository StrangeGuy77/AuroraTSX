import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import {
  getLanguage,
  getLanguageAcronym,
} from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import Axios from "axios";
import { selectCurrentUser } from "../../redux/user/userSelector";

const StripeCheckoutButton: React.FC<IProps> = ({
  price,
  language,
  image,
  description,
  email,
  languageAcronym,
  user,
}) => {
  const { username } = user.user;
  const priceForStripe = (price as number) * 100;
  const publishableKey = "pk_test_Z5JZQq8QxBrvoKf8bgss1PkH0072q9LKtb";
  const onToken = async (token: any) => {
    const { data } = await Axios.post(
      `http://localhost:3500/payment?username=${username}`,
      token
    );
    if (data) {
      console.log(data);
    } else {
    }
  };
  const { buy } = language.buyInfo;

  return (
    <StripeCheckout
      label={buy}
      name="Aurora Development Ltd."
      email={email}
      billingAddress
      shippingAddress
      image={image}
      description={description}
      amount={priceForStripe}
      panelLabel={buy}
      token={onToken}
      stripeKey={publishableKey as string}
      locale={languageAcronym === "jp" ? "ja" : languageAcronym}
    />
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  languageAcronym: getLanguageAcronym(state),
  user: selectCurrentUser(state),
});

export default connect(mapStateToProps)(StripeCheckoutButton);

interface IProps {
  price: string | number;
  image: string;
  description: string;
  language: ILanguage;
  languageAcronym: string;
  email: string;
  user: any;
}
