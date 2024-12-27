import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    ID: ""
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // --------------------------------------------------------------------------------------------------

  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  }, []);

  // --------------------------------------------------------------------------------------------------

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  // --------------------------------------------------------------------------------------------------

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  // --------------------------------------------------------------------------------------------------

  const registerRider = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/riders/riderRegister`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );
  // --------------------------------------------------------------------------------------------------

  const registerDriver = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/drivers/driverRegister`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );
  // --------------------------------------------------------------------------------------------------

  const loginRider = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/riders/riderLogin`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));

      setUser(response);
    },
    [loginInfo]
  );
  // --------------------------------------------------------------------------------------------------

  const loginDriver = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/drivers/driverLogin`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));

      setUser(response);
    },
    [loginInfo]
  );

  // --------------------------------------------------------------------------------------------------

  const logOutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);

  // --------------------------------------------------------------------------------------------------


  



  return (
    <authContext.Provider
      value={{
        user,

        registerInfo,
        updateRegisterInfo,
        registerRider,
        registerDriver,
        registerError,
        isRegisterLoading,

        loginInfo,
        updateLoginInfo,
        loginDriver,
        loginRider,
        loginError,
        isLoginLoading,

        logOutUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
