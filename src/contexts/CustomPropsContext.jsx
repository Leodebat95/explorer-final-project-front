import { createContext, useContext, useState } from "react";

const CustomPropsContext = createContext();


export function CustomPropsProvider({ children }) {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const [receiptCounter, setReceiptCounter] = useState(0);
  

  const [cardCounter, setCardCounter] = useState({});

  const updateCardCounter = (cardId, counter) => {

    setCardCounter( currentValue => ({

      ...currentValue,
      [cardId]: counter
    }));
  };

  const getCardCounter = (cardId) => {

    return cardCounter[cardId] || 0;
  };


  const [itemCounter, setItemCounter] = useState({});

  const updateItemCounter = (previewId, previewCounter) => {

    setItemCounter( currentValue => ({

      ...currentValue,
      [previewId]: previewCounter
    }));
  };

  const getItemCounter = (previewId) => {

    return itemCounter[previewId] || 0;
  };


  return(
    <CustomPropsContext.Provider value={{
        menuOpen, setMenuOpen,
        receiptCounter, setReceiptCounter,
        itemCounter, setItemCounter,
        updateItemCounter, getItemCounter,
        updateCardCounter, getCardCounter
      }}
    >
      {children}
    </CustomPropsContext.Provider>
  );
};


export function useCustom() {

  return useContext(CustomPropsContext);
};
