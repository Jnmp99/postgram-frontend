import react, { useState } from "react";
import AddImgIcon from "../../../../resources/insertIcons/addImgIcon";
import ImgIcon from "../../../../resources/insertIcons/ImgIcon";
import AttachIcon from "../../../../resources/insertIcons/AttachIcon";

const InsertIcons = (props) => {
  const { isOnFocus } = props;

  const icons = [
    {
      id: "addImgIcon",
      comp: <AddImgIcon fill="white" viewBox="0 0 50 50" />
    },
    {
      id: "imgIcon",
      comp: <ImgIcon fill="white" viewBox="0 0 50 50" />
    },
    {
      id: "attachIcon",
      comp: <AttachIcon fill="white" viewBox="0 0 50 50" />
    }
  ];

  return (
    <>
      {isOnFocus && (
        <div className="insertContainer">
          <div className="iconsContainer">
            {icons.map((e) => {
              const { id, comp } = e;
              return (
                <div key={id} className="iconContainer">
                  {comp}
                </div>
              );
            })}
          </div>
          <div className="postBtnContainer">
            <button>Post</button>
          </div>
        </div>
      )}
    </>
  );
};

export default InsertIcons;
