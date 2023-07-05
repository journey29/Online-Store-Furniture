import { useAppSelector } from "./redux";

export const useAuth = () => {
  const {isAuth, email, id } = useAppSelector((state) => state.user);

  return {
    isAuth,
    email,
    id,
  };
};
