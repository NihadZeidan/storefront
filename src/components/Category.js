import React from "react";
import { connect } from "react-redux";
import { activeCat } from "../store/CategoryStore";
import { getRemoteData } from "../store/action";
import { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: "auto",
  },
});

const Category = (props) => {
  useEffect(() => {
    props.getRemoteData();
  }, []);

  const classes = useStyles();

  return (
    <>
      {/* <Typography gutterBottom variant="h5" component="h2">
        {props.categories.normalizedName}
      </Typography> */}
      <Paper square className={classes.root}>
        <Tabs centered>
          {props.categories.map((category, idx) => {
            return (
              <>
                <Tab
                  color="info"
                  label={category}
                  key={idx}
                  onClick={() => props.activeCat(category)}
                />
              </>
            );
          })}
        </Tabs>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.CatReducer.categories,
});

const mapDispatchToProps = { activeCat, getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
