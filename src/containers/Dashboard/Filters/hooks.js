import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters, setDonarList } from "../actions";
import firebase from "../../../firebase";

export const useFilters = (type) => {
  const dispatch = useDispatch();
  const appliedFilters = useSelector(
    ({ dashboardReducer }) => dashboardReducer.appliedFilters
  );
  const { donateType: donateType_ = "" } = appliedFilters;
  const [donateType, setDonateType] = useState(donateType_ || null);
  const [err, setErr] = useState(null);

  const handleApplyFilters = async ({ state = "", city = "", block = "" }) => {
    if (!donateType && !state && !city && !block) {
      setErr("Select Filter!");
      return;
    } else {
      setErr(null);
    }

    dispatch(
      setAppliedFilters({
        donateType: donateType,
        state: state,
        city: city,
        block: block,
      })
    );

    let filterFilet_ = [];
    await firebase
      .database()
      .ref(type)
      .orderByChild("donateType")
      .equalTo(donateType)
      .once("value", (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          const list = childSnapshot.val();
          console.log({ list: list });
          if (!state && !city) {
            filterFilet_.push(list);
          } else {
            if (block) {
              if (
                list.state === state &&
                list.city === city &&
                list.block === block
              ) {
                filterFilet_.push(list);
              }
            } else {
              if (list.state === state && list.city === city) {
                filterFilet_.push(list);
              }
            }
          }
        });
      });
    console.log({ filterFilet_: filterFilet_ });
    if (filterFilet_.length) {
      console.log("here");
      dispatch(setDonarList(filterFilet_));
    } else {
      dispatch(setDonarList([]));
    }
  };

  return {
    err,
    donateType,
    setDonateType,
    handleApplyFilters,
  };
};
