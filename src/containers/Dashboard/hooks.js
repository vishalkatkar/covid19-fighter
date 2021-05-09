import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setDonarList, setAppliedFilters } from "./actions";
import firebase from "../../firebase";

export const useDonerList = (type) => {
  const dispatch = useDispatch();
  const [isResetFilter, setIsResetFilter] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [isViewMore, setIsViewMore] = useState(false);
  const unsortedData = useSelector(
    ({ dashboardReducer }) => dashboardReducer.donarList
  );
  const donarList = unsortedData.sort((a, b) => {
    return moment(b.postedDate).diff(a.postedDate);
  });

  useEffect(() => {
    getDonarList();
  }, [isResetFilter, type]);

  useEffect(() => {
    dispatch(setAppliedFilters({}));
  }, []);

  const getDonarList = () => {
    const donerData = firebase.database().ref();
    donerData
      .child(type == "donar" ? "donarsList" : "seekersList")
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
    dispatch(setAppliedFilters({}));
  };

  const handleVieMore = (person_data) => {
    setUserDetail(person_data);
    setIsViewMore(true);
  };

  return {
    donarList,
    getDonarList,
    handleResetFilter,
    handleVieMore,
    isViewMore,
    userDetail,
    setIsViewMore,
  };
};
