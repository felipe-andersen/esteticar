'use client'

import { Children, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type ModalType = {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode
};

export function Modal({isOpen, onClose, children}: ModalType)  {
    const [categoryName, setCategoryName] = useState("");

    const isDisabled = categoryName.trim() === "";

    const handleSave = () => {
        if (!isDisabled) {
            onSave()
            handleClose();
        }
    };

    const handleClose = () => {
        setCategoryName("");
        onClose(false);
    };

    const onSave = () => {
        const category = categoryName.trim()
        console.log(category, "saved");
        // Simule um envio para a API, ou atualize seu estado global.
        alert(`Categoria "${category}" salva com sucesso!`);
    };

    if (!isOpen) return null;

    return (
        <div
            onClick={() => onClose(false)}
            className="fixed z-[545454545] top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black bg-opacity-50 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {children}
        </div>
    );
};