import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters, setFilterDonarList } from "../actions";

export const useFilters = () => {
  const dispatch = useDispatch();
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const donarList = useSelector(
    ({ dashboardReducer }) => dashboardReducer.donarList
  );
  const handleApplyFilters = () => {
    console.log("test::");
    dispatch(
      setAppliedFilters({
        donateType: donateType,
        state: state,
        city: city,
      })
    );
    if (donateType && state && city) {
      const filterList = donarList.filter(
        (donar) =>
          donar.donateType === donateType &&
          donar.state === state &&
          donar.city === city
      );
      dispatch(setFilterDonarList(filterList));
    }
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
