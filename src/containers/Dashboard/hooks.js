import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDonarList } from "./actions";
import firebase from "../../firebase";

export const useDonerList = (type) => {
  const dispatch = useDispatch();
  const unsortedData = useSelector(
    ({ dashboardReducer }) => dashboardReducer.donarList
  );
  const donarList = unsortedData.sort((a, b) => b.postedDate - a.postedDate)

  const [isResetFilter, setIsResetFilter] = useState(false);

  useEffect(() => {
    getDonarList();
  }, [isResetFilter]);

  const getDonarList = () => {
    const donerData = firebase.database().ref();
    donerData
      .child(type == 'donar' ? "donarsList" : "seekersList")
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
  };

  const handleResetFilter = () => {
    setIsResetFilter(!isResetFilter);
  };

  return { donarList, getDonarList, handleResetFilter };
};
