const Alert = (errorType, message, autoClose = 5000) => {
  let container = document.getElementById("alert-container");

  let alertContainer = document.createElement("div");
  let text = document.createElement("p");
  let button = document.createElement("button");

  alertContainer.className += ` border border-gray-300 bg-base-100   px-4 py-3 rounded-md font-semibold border-b-4 duration-100 pointer-events-auto ${
    errorType == "error" ? "border-b-red-500" : "border-b-blue-500"
  } flex self-start  gap-6 alertAnimation`;
  button.className += "cursor-pointer bg-white rounded px-1";
  let img = document.createElement("img");
  img.src = "/icons/cross.svg"; 
  img.alt = "cross";
  img.style.width = "20px";
  img.style.height = "20px";

  button.appendChild(img);
  text.innerText = message;

  let hidden = false;
  button.addEventListener("click", (e) => {
    hidden = true;
    alertContainer.classList.remove("alertAnimation");
    alertContainer.classList.add("alertAnimationEnd");
  });

  alertContainer.appendChild(text);
  alertContainer.appendChild(button);
  container.appendChild(alertContainer);
  setTimeout(() => {
    if (hidden) return;
    alertContainer.classList.remove("alertAnimation");
    alertContainer.classList.add("alertAnimationEnd");
  }, autoClose);
};

export default Alert;

