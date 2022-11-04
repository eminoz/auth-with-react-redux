import { useDispatch, useSelector } from "react-redux";
import UserAuth from "./components/UserAuth";
import Main from "./components/Main";
import { userActions } from "./store/user-slice";
import "./index.css";
import { useEffect } from "react";

function App() {
  let isAuh = useSelector((state) => state.todox.isAuth);

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(userActions.fetchUserFromLocal());
  }, [isAuh, dispatch]);

  
  return (
    <>
      <div className="flex  flex-col">{!isAuh ? <UserAuth /> : <Main />}</div>
    </>
  );
}

export default App;
