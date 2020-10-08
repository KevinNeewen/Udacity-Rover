import DisplayList from "../DisplayList";
import Image from "../Image";
import styles from "./imageGrid.module.scss";

const ImageGrid = (images) => {
  return `
    <div class=${styles.imageGrid}>
      ${DisplayList(images, (image) => Image(image.title, image.img_src))}
    </div>
  `;
};

export default ImageGrid;
