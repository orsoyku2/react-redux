import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap'

const CategoryList = ({ currentCategory,actions,categories }) => {
      useEffect(() => {
            actions.getCategories();
    
        });
      return (
        <div className="mt-3">
          <h3>Categories {categories.length} </h3>
          <ListGroup>
            {categories.map((category) => (
                  <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
            ))}
          </ListGroup>
          <p>Selected category: {currentCategory.categoryName}</p>
        </div>
      );
}
function mapStateTopProps(state) {
      return {
            currentCategory: state.changeCategoryReducer,
            categories:state.categoryListReducer
         
      }
}
function mapDispatchToProps(dispatch) {
      return {
            actions: {
                  getCategories:bindActionCreators(categoryActions.getCategories,dispatch)
            }
      }
      
}

export default connect(mapStateTopProps,mapDispatchToProps)(CategoryList);

