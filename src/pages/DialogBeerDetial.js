import React, { useContext } from "react";
import { BeerFavoriteContext } from "../components/BeerFav";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { closeBeerModal } from "../store/actions";

const DialogBeerDetial = () => {
  const itemBeer = useSelector((state) => state.beerModal.itemBeer);
  const isShowDialog = useSelector((state) => state.beerModal.isShowDialog);
  const dispatch = useDispatch();

  const { favoritedBeers, toggleFavoriteBeer } = useContext(
    BeerFavoriteContext
  );

  const isFavorited = favoritedBeers.find((item) => item.id === itemBeer.id);

  const onModalClickCancel = () => {
    dispatch(closeBeerModal());
  };

  return (
    <Modal
      width="40%"
      style={{ maxHeight: "70%" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              marginRight: 8,
            }}
          >
            {itemBeer.name}
          </p>
          <div
            style={{
              position: "relative",
              top: 1,
            }}
          >
            <Button
              shape="circle"
              icon={isFavorited ? <HeartFilled /> : <HeartOutlined />}
              onClick={(event) => {
                event.stopPropagation();
                toggleFavoriteBeer(itemBeer);
              }}
            />
          </div>
        </div>
      }
      visible={isShowDialog}
      onCancel={onModalClickCancel}
      footer={[
        <Button key="back" onClick={onModalClickCancel}>
          Close
        </Button>,
      ]}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <img
          src={itemBeer.image_url}
          style={{ height: "200px", width: "auto" }}
        />
      </div>
      <p>
        <b>Tagline:</b> {itemBeer.tagline}
      </p>
      <p>
        <b>First Brewed:</b> {itemBeer.first_brewed}
      </p>
      <p>
        <b>Description:</b> {itemBeer.description}
      </p>
      <p>
        <b>Brewers Tips:</b> {itemBeer.brewers_tips}
      </p>
      <p>
        <b>Contributed by:</b> {itemBeer.contributed_by}
      </p>
    </Modal>
  );
};

export default DialogBeerDetial;
