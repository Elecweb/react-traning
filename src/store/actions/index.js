export const showBeerModal = (payload) => {
  return {
    type: "click_item",
    payload,
  };
};

export const closeBeerModal = () => {
  return {
    type: "dismiss_dialog",
  };
};
