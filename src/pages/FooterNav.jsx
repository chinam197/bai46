import React from "react";
import NumericNavigator from "../components/NumericNavigator";
import { useSelector, useDispatch } from "react-redux";
const FooterNav = () => {
  const status = useSelector((state) => state.product.status);
  return <>{status === "success" && <NumericNavigator />}</>;
};

export default FooterNav;
