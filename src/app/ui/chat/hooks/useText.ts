import { useContext } from "react";
import { TextStoreContext } from "../../../store/text";

export const useText = () => {
  const { addText, removeText, onUserChange } = useContext(TextStoreContext);

  return {
    addText,
    removeText,
    onUserChange,
  };
};
