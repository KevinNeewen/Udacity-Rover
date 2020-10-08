import DisplayList from "../DisplayList";
import Image from "../Image";

const ImageGrid = (images) => {
  return `
    ${DisplayList(images, (image) => Image(image.title, image.img_src))}
  `;
};

export default ImageGrid;
