"use client";
import Alert from "@/app/components/alert/Alert";
import API from "@/app/components/API";
import FireApp from "@/app/utls/FireApp/FireApp";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import React, { useRef, useState } from "react";
const ImageFrom = ({
  data,
  imgUrl,
  targetIndex,
  toggleUploading,
  uploading,
  type,
}) => {
  let previousUrl = imgUrl;
  // console.log("image Form: ", targetIndex, imgUrl);
  const imgRef = useRef(null);
  const [upload, setUpload] = useState({
    status: false,
    progress: 0,
    error: false,
  });
  let storage = getStorage(FireApp);
  //upload image function
  const handelFileChange = async (e) => {
    if (uploading) {
      console.log("image is already being uploaded");
      return Alert("error", "Please wait while uploading image");
    } else {
      console.log("change upload state");
      toggleUploading();
    }
    let mainUrlPart;
    if (previousUrl) {
      let firstUrlPart = previousUrl.split("?");

      let secondUrlPart = firstUrlPart[0];
      secondUrlPart = secondUrlPart.split("x-img");
      mainUrlPart = secondUrlPart[1];
    }

    let fileInput = e.target;
    let file = fileInput.files[0];
    let name, type;
    if (!file) {
      //Will show a popup
      return;
    }
    type = file.type;
    let extension = file.name.split(".");
    extension = extension[extension.length - 1];

    name = `${Date.now()}x${Math.random()
      .toString(36)
      .slice(2, 11)}.${extension}`;
    const filePath = mainUrlPart
      ? `bangladeshcounsel/courses/${data._id}/assets/x-img${mainUrlPart}`
      : `bangladeshcounsel/courses/${data._id}/assets/x-img${name}`;
    const storageRef = ref(storage, filePath);
    const metadata = { contentType: type };
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    //upload state observer
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const UpProgress = parseFloat(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ).toFixed(2);
        setUpload((prevState) => {
          return { status: true, progress: UpProgress, error: false };
        });
        console.log("Upload is " + UpProgress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        setUpload((prevState) => {
          return { ...prevState, error: true };
        });
        console.log("Error happened: ", error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            let url = downloadURL;
            let upData = { id: data._id, targetIndex, url };

            const res = await fetch(API + "/courses/upload-image", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(upData),
            });
            const result = await res.json();
            window.location.reload();
            // console.log("Image upload success message: ", result);
          } catch (error) {
            console.log("Server error:", error.message);
          }
        });
      }
    );
  };

  const deleteFile = async () => {
    if (!previousUrl) return;
    try {
      let mainUrlPart;
      if (previousUrl) {
        let firstUrlPart = previousUrl.split("?");

        let secondUrlPart = firstUrlPart[0];
        secondUrlPart = secondUrlPart.split("x-img");
        mainUrlPart = secondUrlPart[1];
      }
      const storageRef = ref(
        storage,
        `bangladeshcounsel/courses/${data._id}/assets/x-img${mainUrlPart}`
      );
      deleteObject(storageRef)
        .then(async () => {
          let update = { id: data._id, url: null, targetIndex };
          const res = await fetch(API + "/courses/delete-image", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(update),
          });
          const result = await res.json();
          window.location.reload();
        })
        .catch(async (error) => {
          if (error.code == "storage/object-not-found") {
            let update = { id: data._id, url: null, targetIndex };
            const res = await fetch(API + "/courses/delete-image", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(update),
            });
            const result = await res.json();
            window.location.reload();
          }
        });
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <div className="relative rounded   w-full h-full p-2  overflow-hidden">
      {/* upload and delete button below  */}
      <div className="absolute bottom-0  right-0 rounded  flex gap-2 pb-4 pe-4 z-30 ">
        <fieldset className="relative p-1 ">
          <label
            className="bg-custom-blue font-semibold text-white px-3 py-1 duration-100 active:scale-90 active:text-white rounded z-40 cursor-pointer select-none"
            htmlFor={targetIndex + "update"}
          >
            Upload
          </label>
          <input
            onChange={handelFileChange}
            className="absolute top-0 left-0 w-full h-full invisible z-10"
            id={targetIndex + "update"}
            name={targetIndex + "update"}
            type="file"
            accept="image/*"
          ></input>
        </fieldset>
        <button
          onClick={deleteFile}
          className="bg-black text-white px-3 duration-100 active:scale-90 active:text-white rounded cursor-pointer select-none"
        >
          Delete
        </button>
      </div>
      {/* The main image  */}
      <div className="h-full w-full rounded-md overflow-hidden relative">
        {upload.status ? (
          <div className="absolute z-30 w-full h-full flex flex-col items-center justify-center bg-base-100">
            <p className="text-sm text-red-400">
              {upload.error ? "Error happened" : ""}{" "}
            </p>
            {upload.error ? (
              <button
                className="text-green-400 px-5 py-2 text-sm active:scale-95 duration-100"
                onClick={() =>
                  setUpload({ status: false, progress: 0, error: false })
                }
              >
                Close
              </button>
            ) : (
              ""
            )}
            Uploading <p>{upload.progress}%</p>
          </div>
        ) : (
          ""
        )}
        {previousUrl && previousUrl?.length > 10 ? (
          <Image
            width={328}
            height={328}
            ref={imgRef}
            src={previousUrl}
            alt="image"
            className="absolute top-0 left-0 h-full w-full bg-transparent z-20"
          ></Image>
        ) : (
          ""
        )}

        <div className="absolute top-0 left-0 h-full w-full bg-base-100 z-10 grid place-content-center text-xl font-semibold">
          {previousUrl ? "Loading Image..." : "No Image"}
        </div>
      </div>
    </div>
  );
};

export default ImageFrom;
