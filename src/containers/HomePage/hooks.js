import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useHome = () => {
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/donate`);
    }

    return {handleClick};
}