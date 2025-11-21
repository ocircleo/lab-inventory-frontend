function SliceLength(text, length, dots) {
  return text.Slice(0, length) + dots ? "..." : "";
}
function SliceIndex(text, start, end, dots) {
  return text.Slice(start, end) + dots ? "..." : "";
}

export { SliceLength, SliceIndex };
