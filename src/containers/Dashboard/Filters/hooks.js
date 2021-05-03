import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters, setDonarList } from "../actions";
import firebase from "../../../firebase";

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
    firebase
      .database()
      .ref("donarsList")
      .orderByChild("donateType")
      .equalTo(donateType)
      .on("child_added", (snapshot) => {
        const list = snapshot.val();
        if (list.state === state && list.city === city) {
          console.log("filter_list::", [list]);
          dispatch(setDonarList([list]));
        } else {
          dispatch(setDonarList([]));
        }
      });
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
