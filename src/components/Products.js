import React from "react";
import "./SASS/products.scss";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { updateRemoteData } from "../store/CategoryStore";
import { details } from "../store/CategoryStore";
import { useSelector, useDispatch } from "react-redux";

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

  const state = useSelector((state) => {
    return {
      Pro: state.Category.productsList,
      categories: state.Category.categories,
    };
  });

  const dispatch = useDispatch();

  return (
    <div className="mainCards">
      {" "}
      {state.Pro.map((item, idx) => {
        if (item.inventoryCount == 0) {
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Quantity Available: {item.inventoryCount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => dispatch(updateRemoteData(item))}
                >
                  Add to Cart
                </Button>

                <Link to="/products/details">
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(details(item._id))}
                  >
                    View Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default Products;
