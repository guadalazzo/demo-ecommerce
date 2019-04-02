import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  handleChange(e){
    this.setState({
      query: e.target.value,
    });
  }
  handleClick(){
    console.log(this.state.query);
    this.props.click(this.state.query);
  }
  render() {
    return (
      <>
        <input 
          onChange={(e) => this.handleChange(e)} 
          type="text" 
          placeholder="ingrese su busqueda"
        /> <button onClick={() => this.handleClick()}>
          Enviar
        </button>
      </>
    )
  }
}
export default SearchBar;