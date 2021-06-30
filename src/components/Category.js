import React from "react";
import { connect } from "react-redux";
import { ACTIVE } from "../store/CategoryStore";
import { getRemoteData } from "../store/CategoryStore";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
});

const Category = (props) => {
  useEffect(() => {
    dispatch(getRemoteData());
  }, []);

  const state = useSelector((state) => {
    return {
      categories: state.Category.categories,
    };
  });
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <>
      <Paper square className={classes.root}>
        <Tabs centered>
          {state.categories.map((category, idx) => {
            return (
              <>
                <Tab
                  color="info"
                  label={category}
                  key={idx}
                  onClick={() => dispatch(ACTIVE(category))}
                />
              </>
            );
          })}
        </Tabs>
      </Paper>
    </>
  );
};

export default Category;
