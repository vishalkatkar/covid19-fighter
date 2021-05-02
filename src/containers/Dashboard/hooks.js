import { useEffect } from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setDonarList } from "./actions";

export const useDonerList = () => {
  const dispatch = useDispatch();
  const donarList = useSelector(
    ({ dashbaordReducer }) => dashbaordReducer.donarList
  );

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

  return { donarList };
};
