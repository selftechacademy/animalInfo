import React, { useState } from "react";
import { catInfo } from "../../assets/data/animalInfo";
import Popup from "../popup/Popup";

const AnimalDetails = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);

  const onCatClick = () => {
    setIsCatOpen(!isCatOpen);
  };

  // const showCatInfo = () => {
  //   if (isCatOpen) {
  //     return <p>{catInfo}</p>;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <div>
      <button onClick={onCatClick}>Cat</button>
      {isCatOpen ? (
        <Popup info={catInfo} closePopup={() => setIsCatOpen(false)} />
      ) : null}
      {/* {showCatInfo()} */}
    </div>
  );
};

export default AnimalDetails;
