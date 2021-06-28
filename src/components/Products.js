import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/ProductsStore";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    display: "inline-block",
    margin: 50,
  },
  media: {
    height: 240,
  },
});

function Products(props) {
  const classes = useStyles();

  return (
    <>
      {props.Pro.map((item, idx) => {
        if (item.inventoryCount === 0) {
          return;
        }

        return (
          <>
            <Card key={idx} className={classes.root}>
              <CardMedia className={classes.media} image={item.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description} {item.price}$
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.addToCart(item)}
                >
                  Add to Cart
                </Button>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  Pro: state.ProductReducer.productsList,
  categories: state.CatReducer.categories,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
