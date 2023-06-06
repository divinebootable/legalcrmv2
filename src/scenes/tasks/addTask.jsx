import React from "react";
import { connect } from "react-redux";

export const addTask = (props) => {
  return <div>addTask</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(addTask);
