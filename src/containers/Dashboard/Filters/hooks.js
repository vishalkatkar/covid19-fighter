import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedFilters, setDonarList } from "../actions";
import firebase from "../../../firebase";

export const useFilters = () => {
  const dispatch = useDispatch();
  const [donateType, setDonateType] = useState(null);

  const handleApplyFilters = async ({ state = "", city = "", block = "" }) => {
    dispatch(
      setAppliedFilters({
        donateType: donateType,
        state: state,
        city: city,
        block: block,
      })
    );

    // console.log({ state: state });
    // console.log({ state: state });
    // console.log({ city: city });
    // console.log({ block: block });
    let filterFilet_ = [];
    await firebase
      .database()
      .ref("donarsList")
      .orderByChild("donateType")
      .equalTo(donateType)
      .on("child_added", (snapshot) => {
        const list = snapshot.val();
        // console.log({ list: list });
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
    console.log({ filterFilet_: filterFilet_ });
    if (filterFilet_.length) {
      console.log("here");
      dispatch(setDonarList(filterFilet_));
    } else {
      dispatch(setDonarList([]));
    }
  };

  return {
    donateType,
    setDonateType,
    handleApplyFilters,
  };
};
