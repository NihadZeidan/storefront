import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { remove } from "../store/CartReducer";
import { updateRemoteDataAfterDeleteFromCart } from "../store/CategoryStore";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import BackspaceIcon from "@material-ui/icons/Backspace";
import SvgIcon from "@material-ui/core/SvgIcon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = (props) => {
  const state = useSelector((state) => {
    return {
      UserCart: state.Category,
    };
  });

  const dispatch = useDispatch();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="info" {...bindTrigger(popupState)}>
            Your Cart
          </Button>
          <Menu {...bindMenu(popupState)}>
            {state.UserCart.cart.map((item, idx) => {
              {
                return (
                  <>
                    <MenuItem>
                      {item.name} &nbsp;{" "}
                      <BackspaceIcon
                        onClick={() =>
                          dispatch(
                            updateRemoteDataAfterDeleteFromCart(
                              item._id,
                              item.inventoryCount,
                              item.cartCount
                            )
                          )
                        }
                      />
                    </MenuItem>
                  </>
                );
              }
            })}

            <Link to="/checkout">
              Checkout
              <ShoppingCartIcon />
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default Cart;
