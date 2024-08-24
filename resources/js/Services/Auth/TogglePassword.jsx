import { useState } from 'react';

function TogglePassword(initialValue = false) {
    const [isVisible, setIsVisible] = useState(initialValue);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return {
        isVisible,
        toggleVisibility,
    };
}

export default TogglePassword;
