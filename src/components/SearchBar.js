import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  handleChange(e){
    // this.setState({
    //   query: e.target.value,
    // });
    this.props.change(e.target.value);
  }
  handleClick(){
    this.props.click(this.props.query);
  }
  render() {
    return (
      <header>
        <input 
          onChange={(e) => this.handleChange(e)} 
          type="text" 
          placeholder="ingrese su busqueda"
        /> <button onClick={() => this.handleClick()}>
          Enviar
        </button>
      </header>
    )
  }
}
export default SearchBar;