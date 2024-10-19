import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  //  console.log('inside', isAuth, user)
  return { user, isAuth }
};

export default useAuth;
