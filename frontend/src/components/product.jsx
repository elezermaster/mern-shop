import React from 'react';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
const Product = ({product, index, onDelete, onToggleBookmark}) => {
    // <tr>
    // <th>#</th>
    // <th>category</th>
    // <th>name</th>
    // <th>image</th>
    // <th>description</th>
    // <th>price</th>
    // <th>in stock</th>
    // <td>{/*delete button*/}</td>
    // </tr>
        return (
            <tr key={product._id}>
              <td>{index}</td>
              <td>{product.category}</td>
              {/*<td>{listQualities(user.qualities)}</td> */}
              <td>{product.name}</td>
              <td><Image src={product.imageUrl} rounded width="100"/></td>
              <td>{product.description.slice(0, 40) + '...' }</td>
              <td>{product.price}</td>
              <td>
                <Button variant="light" onClick={() => onToggleBookmark()}>
                  {/* {user.favorites?<FaBookmark/>:<FaRegBookmark/>} */}
                  {product.countInStock}
                </Button>
              </td>
              <td>
                {
                  <Button variant="warning" onClick={() => onDelete(product._id)}>
                    Delete
                  </Button>
                }
              </td>
            </tr>
          );
};

export default Product;
