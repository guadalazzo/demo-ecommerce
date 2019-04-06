
import React from 'react';
import SearchBarWithState from './containers/SearchBarWithState';
import ProductList from './components/ProductList';
import { getResults } from './modules/MELI';
import { connect } from 'react-redux';
import { getResultsItems } from './state/actions'; // action creator

import './App.css';
class App extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   query: '',
    //   items: [],
    //   }
   this.handleSearchClick = this.handleSearchClick.bind(this); // guarda la referencia en lugar de ejecutarse
    }
  handleSearchClick(param) {
    // this.setState({
    //   query: param,
    // });
    //getResults(param)
    //1er refactor , elimino el state y paso a props para usar a redux
      // .then(res => {this.setState({items: res.data.results})}) 
      // .catch(err =>  console.log('this is your err:', err));

      //2do refactor,  elimino la lógica de la llamada asinc para indicet a redux(thunk) que lo haga
      // .then( res => this.props.getItemsMeli({items: res.data.results}))
      // .catch(err=> console.log('ERR',err))
      this.props.getItemsMeli(this.props.query);
  }
  componentDidMount() {
    // se monta el componete en la ui y se dispara la función
    // getResults() // DEVUELVE UNA PROMISE
      //.then(res => {
        //console.log('haha');
          // this.setState({
          //   items: res.data.results,
          // });
  }

  render() {
    let { items } = this.props;
    return (
      <article>
        <h1>Searchinator</h1>
        <section>
          <SearchBarWithState click={ this.handleSearchClick } /> {/*anda de otra forma el bindeado*/}
          <ProductList items={items}/>
        </section>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items, //uno el componente con el store
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  getItemsMeli: (items) => dispatch(getResultsItems(items)) //despacho el action para informar cambios
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
