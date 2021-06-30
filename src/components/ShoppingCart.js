import React from "react";
import "./shoppingCart.scss";
import { useSelector } from "react-redux";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ShoppingCart = (props) => {
  const state = useSelector((state) => {
    return {
      userCart: state.Category.cart,
    };
  });

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[50],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <h2>Order Summery</h2>
      {state.userCart.map((item) => {
        return (
          <div className="productInfo">
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}$</p>
          </div>
        );
      })}

      <p className="total">
        Total :{" "}
        {state.userCart.reduce((acc, item) => {
          return (acc += parseInt(item.price));
        }, 0)}
        $
      </p>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            className="payingFrom"
          >
            <div>
              <legend>Billing Details</legend>

              <TextField id="standard-basic" label="Full Name" />
              <br />
              <TextField id="standard-basic" label="Address" />
              <br />
              <TextField id="standard-basic" label="City" />
              <br />
              <TextField id="standard-basic" label="State" />
              <br />
              <TextField id="standard-basic" label="Zip code" />
              <br />
            </div>

            <div>
              <legend> Payment Details</legend>

              <TextField id="standard-basic" label="Credit Card #" />

              <TextField id="standard-basic" label="CVV" />
              <br />
              <KeyboardDatePicker
                className="date"
                margin="normal"
                id="date-picker-dialog"
                label="Expiration"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              className="btn"
              onClick={handleOpen}
            >
              Place Your Order !
            </Button>
          </form>
        </Grid>
      </MuiPickersUtilsProvider>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Thank You !</h2>
              <p id="transition-modal-description">
                Your order has been placed.
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default ShoppingCart;
