import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
function Modal({ children}) {

  // getting setOpen ftn from modalContex
 const context = useContext(ModalContext);
  if (!context) throw new Error("Modal must be used within ModalProvider");
  const { setOpen } = context;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-2xl"
      onMouseDown={(e) => {
        // 
        if (e.target === e.currentTarget ) {
          setOpen(false);
          
        }
      }}
    >
      
      <div className="h-99 w-198 rounded-2xl bg-white px-3 py-3">
        {children}
      </div>
    </div>
  );
}

export default Modal;