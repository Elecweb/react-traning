import React, { useContext } from "react";
import { Card, Button } from "antd";
import TextTruncate from "react-text-truncate";
import { useDispatch } from "react-redux";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { showBeerModal } from "../../store/actions";
import { BeerFavoriteContext } from "../BeerFav";
const { Meta } = Card;

function BeerItem(props) {
  const dispatch = useDispatch();

  const { favoritedBeers, toggleFavoriteBeer } = useContext(
    BeerFavoriteContext
  );

  const onItemBeerClick = () => {
    dispatch(showBeerModal(props.item));
  };

  const isFavorited = favoritedBeers.find((item) => item.id === props.item.id);

  return (
    <Card
      onClick={() => {
        onItemBeerClick();
      }}
      extra={
        <Button
          shape="circle"
          icon={isFavorited ? <HeartFilled /> : <HeartOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            toggleFavoriteBeer(props.item);
          }}
        />
      }
      hoverable
      cover={
        <div>
          <img
            src={props.item.image_url}
            style={{ height: "200px", width: "auto", paddingTop: "16px" }}
          />
        </div>
      }
    >
      <Meta
        title={props.item.name}
        description={
          <TextTruncate
            line={2}
            truncateText="…"
            text={props.item.description}
            textTruncateChild={<a href="#">Read more</a>}
          />
        }
      />
    </Card>
  );
}

export default BeerItem;
