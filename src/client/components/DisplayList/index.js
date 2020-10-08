const DisplayList = (list, callback, tag) => {
  if (!tag) {
    tag = "div";
  }

  return list
    .map((element, index) => {
      return `<${tag}>${callback(element, index)}</${tag}>`;
    })
    .join("");
};

export default DisplayList;
