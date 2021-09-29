import React,{useState, useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from '../components/pagination'
import {paginate} from '../utils/paginate'
import Product from '../components/product'
import PropTypes from 'prop-types'; // ES6
import {ProductContext} from '../app'

const productScreen = ({onDelete,productss}) => {
    const products = useContext(ProductContext)
    console.log('products screen', products)
    console.log('productss screen', productss)
    const count = products.length
    console.log('products count', products.length)
    const pageSize = 4
    const [activePage, setActivePage] = useState(1)
    const productsCrop = paginate(productss, activePage, pageSize)
    const startIndex = (activePage - 1) * pageSize
    const listUsers = productsCrop && productsCrop.map((product,index) => {
          return (
              <Product
                  key={product._id}
                  product={product}
                  index={startIndex + index + 1}
                  onDelete={onDelete}
                  //onToggleBookmark={onToggleBookmark}
                  />
          )
      })
      const handlePageChange = (pageIndex) => {
          console.log('pageIndx', pageIndex)
          setActivePage(pageIndex)
      }
    return (
        <React.Fragment>
            <Table striped bordered hover style={{display: (products.length === 0) ? "none" : "show"}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>category</th>
                    <th>name</th>
                    <th>image</th>
                    <th>description</th>
                    <th>price</th>
                    <th>in stock</th>
                    <td>{/*delete button*/}</td>
                    </tr>
                </thead>
                <tbody>
                {listUsers}
                </tbody>
            </Table>
            <Pagination itemsCount={products.length} pageSize={pageSize} onPageChange={handlePageChange} activePage={activePage}/>
        </React.Fragment>
    );
};

export default productScreen;
