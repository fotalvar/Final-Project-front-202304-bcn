const useLocalStorage = () => {
  const removeToken = (key: string) => {
    return localStorage.removeItem(key);
  };

  const getTokenData = (key: string) => {
    return localStorage.getItem(key);
  };

  const setTokenData = (key: string, token: string) => {
    return localStorage.setItem(key, token);
  };

  return { removeToken, getTokenData, setTokenData };
};

export default useLocalStorage;
