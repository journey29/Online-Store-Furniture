import { useAppSelector } from "./redux";

export const useAuth = () => {
  const {isAuth, email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth,
    email,
    token,
    id,
  };
};
