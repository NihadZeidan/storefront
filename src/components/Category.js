import React from "react";
import { connect } from "react-redux";
import { activeCat } from "../store/CategoryStore";

import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const Category = (props) => {
  return (
    <Paper square>
      {props.categories.map((category, idx) => {
        return (
          <>
            <Tab
              color="secondary"
              label={category.displayName}
              key={idx}
              onClick={() => props.activeCat(category)}
            ></Tab>
          </>
        );
      })}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  categories: state.CatReducer.categories,
});

const mapDispatchToProps = { activeCat };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
