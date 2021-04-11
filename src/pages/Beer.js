import React, { useEffect, useState } from "react";
import { Spin, Pagination } from "antd";
import ListBeer from "../components/Beer/List";

const getBeers = ({ page, perPage }) => {
  return fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
  ).then((response) => response.json());
};

const BeerPage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(40);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBeers({ page, perPage }).then((items) => {
      setItems(items);
      setLoading(false);
    });
    return () => {};
  }, [page, perPage]);

  const onSelectPage = (page, pageSize) => {
    setPage(page);
    setPerPage(pageSize);
  };

  return (
    <div
      style={{
        padding: "16px",
        marginTop: 64,
        minHeight: "600px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {!loading ? (
        <div>
          <ListBeer items={items} />
          <br />
          <Pagination
            total={240}
            pageSize={40}
            defaultCurrent={page}
            onChange={onSelectPage}
          />
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

// class BeerPage extends Component {
//   state = {
//     items: [],
//     page: 1,
//     perPage: 40,
//     isLoading: true,
//   };

//   componentDidMount() {
//     this.loadData();
//   }

//   loadData = () => {
//     this.setState({ isLoading: true });
//   };

//   onSelectPage = (page, pageSize) => {
//     this.setState({ page, perPage: pageSize }, () => {});

//     set;
//   };

//   render() {}
// }

export default BeerPage;
