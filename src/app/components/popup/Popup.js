/**
 * purpose -> A popup template for all types of popup
 * @param attributes:{message:String,error:false,bgOverlay:boolean,closeBtn:true,autoClose:Number,width:number(%)}
 * @param arguments: {type:"text"}
 * @param callback
 *
 */
const Popup = (attributes, arguments, callback) => {
 
  
  let container = document.getElementById("popup-container");
  let alertContainer = document.createElement("div");
  alertContainer.className += `bg-base-100 px-4 py-3 rounded-md font-semibold border-b-4 duration-100 pointer-events-auto flex self-start  gap-6 popupAnimation w-5/6 md:w-[568px] min-h-40`;

  container.appendChild(alertContainer);

  let hidden = false;
  let button = document.createElement("button");
  button.innerText = "Close";
  button.className += "cursor-pointer bg-white rounded px-1";
  button.addEventListener("click", (e) => {
    hidden = true;
    alertContainer.classList.remove("alertAnimation");
    alertContainer.classList.add("alertAnimationEnd");
  });
  if (attributes?.autoClose)
    setTimeout(() => {
      if (hidden) return;
      alertContainer.classList.remove("alertAnimation");
      alertContainer.classList.add("alertAnimationEnd");
    }, attributes.autoClose);
};

const Alert = (type, message, autoClose = 5000) => {
  let container = document.getElementById("popup-container");

  let alertContainer = document.createElement("div");
  let text = document.createElement("p");
  let button = document.createElement("button");

  alertContainer.className += ` border border-gray-300 bg-base-100   px-4 py-3 rounded-md font-semibold border-b-4 duration-100 pointer-events-auto ${
    type == "error" ? "border-b-red-500" : "border-b-blue-500"
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

export default Popup;
