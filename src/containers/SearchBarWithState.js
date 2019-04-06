import React from 'react';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { setQuery } from '../state/actions';

const SearchBarWithState = (props) => {
  return (
    <SearchBar change={props.handleClick} click={props.click}  />
  )
}
const mapDispatchToProps = dispatch => ({
  handleClick: (q) => dispatch(setQuery(q)) //despacho el action para informar cambios
});

export default connect(undefined, mapDispatchToProps)(SearchBarWithState);
