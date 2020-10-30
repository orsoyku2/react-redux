import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge } from 'reactstrap'
import { Table } from "reactstrap";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";


const ProductList = ({ currentCategory,actions,products }) => {
      useEffect(() => {
            actions.getProducts();    
      },[])
      return (
        <div>
          <h3>
            <Badge className="accordion">{currentCategory.categoryName}</Badge>
          </h3>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
}
function mapStateToProps(state) {
      return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
      };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      )
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
