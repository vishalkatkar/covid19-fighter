import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDonarList } from "./actions";
import firebase from "../../firebase";

export const useDonerList = () => {
  const dispatch = useDispatch();
  const donarList_ = useSelector(
    ({ dashboardReducer }) => dashboardReducer.donarList
  );
  const appliedFilters = useSelector(
    ({ dashboardReducer }) => dashboardReducer.appliedFilters
  );
  const [donarList, setDonarList_] = useState(donarList_);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef
      .child("donarsList")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          dispatch(setDonarList(Object.values(snapshot.val())));
        } else {
          dispatch(setDonarList([]));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const { donateType, state, city } = appliedFilters;
    if (donateType && state && city) {
      const filterList = donarList.filter(
        (donar) =>
          donar.donateType === donateType &&
          donar.state === state &&
          donar.city === city
      );
      setDonarList(filterList);
    }
  }, [appliedFilters]);

  const handleClearFilter = () => {
    setDonarList_(donarList_);
  };

  return { donarList, handleClearFilter };
};
