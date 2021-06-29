import React from "react";
import { connect, useSelector } from "react-redux";
// import { remove } from "../store/CartReducer";
import { updateRemoteDataAfterDeleteFromCart } from "../store/action";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import BackspaceIcon from "@material-ui/icons/Backspace";

const Cart = (props) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="info" {...bindTrigger(popupState)}>
            Your Cart
          </Button>
          <Menu {...bindMenu(popupState)}>
            {props.UserCart.cart.map((item, idx) => {
              {
                return (
                  <>
                    <MenuItem>
                      {item.name} &nbsp;{" "}
                      <BackspaceIcon
                        onClick={() =>
                          props.updateRemoteDataAfterDeleteFromCart(
                            item._id,
                            item.inventoryCount,
                            item.cartCount
                          )
                        }
                      />
                    </MenuItem>
                  </>
                );
              }
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

const mapStateToProps = (state) => ({
  UserCart: state.CartReducer,
});

const mapDispatchToProps = {
  updateRemoteDataAfterDeleteFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
