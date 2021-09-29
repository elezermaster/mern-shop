import React,{useState, useEffect} from 'react'
import NavBar from './components/navBar'
import Counters from './components/counters'
//change HashRouter to BrowserRouter
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductScreen from './screen/ProductScreen'
import HomeScreen from './screen/HomeScreen'
import axios from "axios";

export const ProductContext = React.createContext()
function App() {
  const params = location.search ? location.search : null;
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");
 const initialState = [
      {value: 0, id: 1, name: 'ложка'},
      {value: 4, id: 2, name: 'тарелка'},
      {value: 0, id: 3, name: 'вилка'},
      {value: 4, id: 4, name: 'стартовый набор'},
      {value: 2, id: 5, name: 'ненужные вещи'}]

      useEffect(() => {
        let cancel;
        const fetchData = async() => {
          //setLoading(true);
          try {
            let query;
            if (params && !filter) {
              query = params;
            } else {
              query = filter;
            }
            if (sorting) {
              if (query.length === 0) {
                query = `?sort=${sorting}`;
              } else {
                query = query + "&sort=" + sorting;
              }
            }
            // const {data} = await axios({
            //   method: "GET",
            //   url: `/api/products${query}`,
            //   cancelToken: new axios.CancelToken((c) => (cancel = c)),
            // });
            const {data} = await axios.get("http://localhost:5000/api/products");
            console.log('data::=>',data)
            setProducts(data.data)
          } catch (error) {
            if (axios.isCancel(error)) return;
            console.log(error.response.data);
          }
        }
        fetchData();
        return () => cancel();
      }, [filter, params, sorting])
    //const initialStateProducts = data;
    const [counters, setCounters] = useState(initialState)
    const [products, setProducts] = useState({})
    console.log('products', products)
    console.log('counters init', counters)
    const handleDelete = (counterId) => {
      //console.log('handleDelete', counterId)
      const newCounters = counters.filter(counter => counter.id !== counterId)
      setCounters(newCounters)
    }
    const handleReset = () => setCounters(initialState)
    const handleDecrement = (counterId) => {
      const newStateCounters = [...counters]
      const index = newStateCounters.findIndex(i => i.id === counterId)
      newStateCounters[index].value--
      setCounters(newStateCounters)
    }
    const handleIncrement = (counterId) => {
      const newStateCounters = [...counters]
      const index = newStateCounters.findIndex(i => i.id === counterId)
      newStateCounters[index].value++
      setCounters(newStateCounters)
    }
    const handleDeleteProduct = (productId) => {
      const newProducts = products.filter(product => product._id !== productId)
      setProducts(newProducts)
  }
    const CartScreen = (/*counters, handleDelete, handleIncrement, handleDecrement, handleReset*/) => {
        return (
          <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
        )
    }
  return (
    <ProductContext.Provider value={products}>
    <Router>
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems = {counters.reduce((a,c) => a + c.value, 0)}
        />
        <Switch>
          <Route exact path="/">
            <CartScreen/>
          </Route>
          <Route exact path="/product">
            <HomeScreen/>
          </Route>
          <Route exact path="/product/:id">
            <ProductScreen
              onDelete={handleDeleteProduct}
              productss={products}
            />
          </Route>
        </Switch>
        {/* {SideDrawer} */}
        {/* {BackDrop} */}
        {/* {Homescreen} */}
        {/* {ProductScreen} */}
        {/* {CartScreen} */}

      </main>

    </div>
    </Router>
    </ProductContext.Provider>
  );
}

export default App;
