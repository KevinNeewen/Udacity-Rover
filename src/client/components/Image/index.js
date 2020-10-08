import styles from "./image.module.scss";

const Image = (title, source) => {
  return `
    <div class=${styles.image}>
      <p><b>Date Taken:</b> ${title}</p>
      <img src='${source}' alt='rover-image'/>
    </div>
  `;
};

export default Image;
