const useLocalStorage = () => {
  const removeItemLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
  };

  const getItemLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  const setItemLocalStorage = (key: string, token: string) => {
    return localStorage.setItem(key, token);
  };

  return {
    removeItemLocalStorage,
    getItemLocalStorage,
    setItemLocalStorage,
  };
};

export default useLocalStorage;
