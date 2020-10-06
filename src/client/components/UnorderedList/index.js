const UnorderedList = (list, callback) => {
  return list
    .map((element, index) => {
      return `<ul>${callback(element, index)}</ul>`;
    })
    .join("");
};

export default UnorderedList;
