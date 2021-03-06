import { connect } from "react-redux";
import { sankeyRequested } from "./Actions";
import { Sankey } from "./index";

const mapStateProps = (state) => ({ sankey: state.sankey });

const mapDispatchToProps = {
  sankeyRequested: sankeyRequested,
};

export const SankeyContainer = connect(
  mapStateProps,
  mapDispatchToProps
)(Sankey);
