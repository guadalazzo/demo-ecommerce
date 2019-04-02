
import React from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import { getResults } from './modules/MELI';
import './App.css';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      items: [],
      }
      this.handleSearchClick = this.handleSearchClick.bind(this);
    }
  handleSearchClick(param) {
    console.log("data",param);
    this.setState({
      query: param,
    });
  }
  componentDidMount() {
    // se monta el componete en la ui y se dispara la función
    getResults()// DEVUELVE UNA PROMISE
      .then(res => {
        console.log('haha');
          this.setState({
            items: res.data.results,
          });
        }
      )
      .catch(err => console.log('problemas: ',err));
  }

  render() {
    return (
      <>
        <h1>Ecommerce</h1>
        <SearchBar click={this.handleSearchClick} />
        <ProductList items={this.state.items}/>
      </>
    );
  }
}

export default App;