import React from "react";
import "./SASS/Header.scss";
import Cart from "./Cart";
import { connect } from "react-redux";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function Header(props) {
  return (
    <header>
      <h1> Buy & Fly !</h1>
      <StyledBadge
        badgeContent={props.UserCart.cart.length}
        color="secondary"
        className="userCart"
      >
        <Cart />
      </StyledBadge>
    </header>
  );
}

const mapStateToProps = (state) => ({
  UserCart: state.CartReducer,
});

export default connect(mapStateToProps)(Header);
