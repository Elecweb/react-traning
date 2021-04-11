import React from "react";
import { List } from "antd";
import BeerItem from "./Item";

function ListBeer(props) {
  console.log("props.items", props.items);
  return (
    <div style={{ minHeight: "300px" }}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={props.items}
        renderItem={(item) => (
          <List.Item>
            <BeerItem item={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListBeer;
