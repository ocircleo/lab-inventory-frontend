//Filters text for preventing injections
function Filter(text) {
  let filter = ["<", ">", "/", "|", "#", "~", "*", "!"];
  text = text.split("");
  let newText = text.filter((ele) => (filter.includes(ele) ? "" : ele));
  return newText.join("");
}
function FilterInput(text) {
  let filter = ["<", ">", "/", "|",  "#", "~", "*"];
  text = text.split("");
  let newText = text.filter((ele) => (filter.includes(ele) ? "" : ele));
  return newText.join("");
}
function FilterRegex(text) {
  let filter = ["<", ">", "/", "|", "?", "#", "~", "*", `"`, `'`, "!"];
  text = text.split("");
  let newText = text.filter((ele) => (filter.includes(ele) ? "" : ele));
  return newText.join("");
}

export { Filter, FilterRegex };
