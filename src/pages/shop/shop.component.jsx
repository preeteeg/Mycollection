import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
// import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

// export class Shop extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

// export class Shop extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverview collections={collections} />
  </div>
);

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;
