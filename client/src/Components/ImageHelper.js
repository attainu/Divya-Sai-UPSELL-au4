import React from "react";
import { API } from "../backend";

const ImageHelper = ({ productId, styles }) => {
  return (
    <img
      src={`${API}/product/photo/${productId}`}
      alt="Photo"
      style={styles ? styles : ""}
      className="img-responsive"
    />
  );
};
export default ImageHelper;
