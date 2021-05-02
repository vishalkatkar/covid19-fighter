import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters } from "../actions";

export const useFilters = () => {
  const dispatch = useDispatch();
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const handleApplyFilters = () => {
    console.log("test::");
    dispatch(
      setAppliedFilters({
        donateType: donateType,
        state: state,
        city: city,
      })
    );
  };

  return {
    donateType,
    state,
    city,
    setDonateType,
    setState,
    setCity,
    handleApplyFilters,
  };
};
