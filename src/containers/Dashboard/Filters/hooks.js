import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters, setDonarList } from "../actions";
import firebase from "../../../firebase";

export const useFilters = () => {
  const dispatch = useDispatch();
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const handleApplyFilters = async () => {
    console.log("test::");
    dispatch(
      setAppliedFilters({
        donateType: donateType,
        state: state,
        city: city,
      })
    );
    let filterFilet_ = [];
    await firebase
      .database()
      .ref("donarsList")
      .orderByChild("donateType")
      .equalTo(donateType)
      .on("child_added", (snapshot) => {
        const list = snapshot.val();
        console.log("list:", list);
        console.log("state:", state);
        console.log("city:", city);
        if (list.state === state && list.city === city) {
          filterFilet_.push(list);
        }
      });
    if (filterFilet_.length) {
      dispatch(setDonarList(filterFilet_));
    } else {
      dispatch(setDonarList([]));
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
