import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from "../../redux/actions/productActions";
import { ListGroup, ListGroupItem,Badge } from 'reactstrap'

const CategoryList = ({ currentCategory,actions,categories }) => {
      useEffect(() => {
            actions.getCategories();
      });
      const selectedCategory = (category) => {
            actions.changeCategory(category);
            actions.getProducts(category.id)
      }
   
      return (
        <div className="mt-3">
          <h3>
            Categories <Badge className="alert">{categories.length}</Badge>{" "}
          </h3>
          <ListGroup>
            {categories.map((category) => (
              <ListGroupItem
                active={category.id === currentCategory.id}
                onClick={() => selectedCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
          <h4 className="mt-5 border">
            Selected category: {currentCategory.categoryName}
          </h4>
        </div>
      );
}
function mapStateToProps(state) {
      return {
            currentCategory: state.changeCategoryReducer,
            categories:state.categoryListReducer
         
      }
}
function mapDispatchToProps(dispatch) {
      return {
        actions: {
          getCategories: bindActionCreators(
            categoryActions.getCategories,
            dispatch
          ),
          changeCategory: bindActionCreators(
            categoryActions.changeCategory,
            dispatch
          ),
          getProducts: bindActionCreators(productActions.getProducts, dispatch),
        },
      };
      
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);

