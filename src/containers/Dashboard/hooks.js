import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDonarList } from "./actions";
import firebase from "../../firebase";

export const useDonerList = () => {
  const dispatch = useDispatch();
  const donarList_ = useSelector(
    ({ dashboardReducer }) => dashboardReducer.donarList
  );
  const filterDonarList = useSelector(
    ({ dashboardReducer }) => dashboardReducer.filterDonarList
  );
  const appliedFilters = useSelector(
    ({ dashboardReducer }) => dashboardReducer.appliedFilters
  );
  const [donarList, setDonarList_] = useState(filterDonarList);

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
    setDonarList(filterDonarList);
  }, [appliedFilters]);

  const handleClearFilter = () => {
    setDonarList_(donarList_);
  };

  return { donarList, handleClearFilter };
};
