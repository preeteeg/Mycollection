import React from "react";

import { MenuItem } from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

// export class Directory extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       sections: sections
//     };
//   }

//   render() {
//     return (
//       <div className="directory-menu">
//         {this.state.sections.map(({ id, ...otherSectionProps }) => (
//           <MenuItem key={id} {...otherSectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
