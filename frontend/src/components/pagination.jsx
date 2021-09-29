import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types"; //ES6

const PaginationProducts = ({
  itemsCount,
  pageSize,
  onPageChange,
  activePage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  //const pages = lodash.react(1, pageCount+1)
  console.log("activePage", activePage);
  const items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="lg">{items}</Pagination>
      <br />
    </div>
  );

  return paginationBasic;
};

Pagination.propTypes = {
  //itemsCount: PropTypes.number.isRequired,
  //pageSize: PropTypes.number.isRequired,
  //onPageChange: PropTypes.func.isRequired,
  //activePage: PropTypes.number.isRequired,
};
export default PaginationProducts;
