import React, { useEffect, useState, useMemo } from "react";
import localeInfo from 'rc-pagination/lib/locale/fr_FR';
import PaginationRc from 'rc-pagination';

const textItemRender = (current, type, element) => {
    if (type === 'prev') {
      	return 'Précédent';
    }
    if (type === 'next') {
      	return 'Suivant';
    }
    return element;
  };
// changePage,data,itemPage
const Pagination = function() {
	const data = [];
	const itemPage = 10;
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    // const [isChange, setIsChange] = useState(false);

    const handleChange = function(current, pageSize) {
        // const indexLast = current * itemPage;
        // const indexFirst = indexLast - itemPage;
        // const newData = data.slice(indexFirst, indexLast);
        // changePage(newData)
        // setCurrentPage(current)
    }

    return(
      <div className="pager pagination">
        <PaginationRc
          total={data.length}
          locale={localeInfo}
          onChange={handleChange}
          itemRender={textItemRender}
          pageSize={itemPage}
        />
      </div>
    )
}

export default Pagination;
