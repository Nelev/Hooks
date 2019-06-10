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

export const useCurrent = resource => {
    const [current, set] = useState(resource);

    function setCurrent(resource) {
        set(resource);
    }

    return {
        current,
        setCurrent
    };
};
