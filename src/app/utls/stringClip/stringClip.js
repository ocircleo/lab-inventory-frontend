/***
 * @param {string} text - The text to be clipped.
 * @param {number} length - The maximum length of the clipped text.
 * @returns {string} - The clipped text with ellipsis if it exceeds the specified length.
 */
const stringClip = (text, length, tail = null) => {
  let clippedText = "";
  if (text.length > length)
    clippedText = text.substring(0, length) + (tail ? tail : "..");
  else clippedText = text;
  return clippedText;
};

export default stringClip;
