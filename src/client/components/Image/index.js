const Image = (title, source) => {
  return `
    <div>
      <span>${title}</span>
      <img src='${source}' alt='rover-image' height='200px' width='auto' />
    </div>
  `;
};

export default Image;
