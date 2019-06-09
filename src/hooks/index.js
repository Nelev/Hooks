import { useState } from "react";

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggleModal() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggleModal
    };
};

export const useMenu = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggleMenu() {
        setIsShowing(!isShowing);
    }

    return { isShowing, toggleMenu };
};
